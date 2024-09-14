using System.Collections;
using System.Collections.Generic;
using UnityEngine.Networking;
using UnityEngine;
using System;
using Newtonsoft.Json;
using System.IO;  // To handle file reading
using TMPro;

public class VoiceflowController : MonoBehaviour
{
    public string DM_API_KEY;
    public string userID = "test-user-unity";

    // Start is called before the first frame update
    void Start()
    {
        // Load the API key from appsettings.local.json
        LoadApiKey();
    }

    // Load the API key from appsettings.local.json
    private void LoadApiKey()
    {
        try
        {
            // Read the config file
            var config = File.ReadAllText("appsettings.local.json");
            dynamic jsonConfig = JsonConvert.DeserializeObject<dynamic>(config);
            
            // Extract the API key from the JSON config
            DM_API_KEY = jsonConfig.VoiceFlowApiKey;

            if (string.IsNullOrEmpty(DM_API_KEY))
            {
                Debug.LogError("API key not found in config file.");
            }
            else
            {
                Debug.Log("API key successfully loaded.");
            }
        }
        catch (FileNotFoundException)
        {
            Debug.LogError("Config file not found. Make sure 'appsettings.local.json' exists.");
        }
        catch (Exception ex)
        {
            Debug.LogError("Error reading config file: " + ex.Message);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void InteractVoiceflow(string payloadJson, ResponseHandlerPackage responseHandlerPackage) {
        StartCoroutine(InteractVoiceflowWorker(payloadJson, responseHandlerPackage));
    }

    IEnumerator InteractVoiceflowWorker(string payloadJson, ResponseHandlerPackage responseHandlerPackage)
    {
        string url = $"https://general-runtime.voiceflow.com/state/user/{userID}/interact";
        using (UnityWebRequest webRequest = new UnityWebRequest(url, "POST"))
        {
            webRequest.SetRequestHeader("Authorization", DM_API_KEY);
            webRequest.SetRequestHeader("content-type", "application/json");
            webRequest.SetRequestHeader("accept", "application/json");
            webRequest.SetRequestHeader("versionID","production");

            byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(payloadJson);
            webRequest.uploadHandler = new UploadHandlerRaw(bodyRaw);
            webRequest.downloadHandler = new DownloadHandlerBuffer();

            Debug.Log(payloadJson);

            yield return webRequest.SendWebRequest();

            if (webRequest.result == UnityWebRequest.Result.ConnectionError || webRequest.result == UnityWebRequest.Result.ProtocolError)
            {
                Debug.LogError($"Voiceflow interact error: {webRequest.error} - {webRequest.downloadHandler.text}");
                yield break;
            }
            else
            {
                Debug.Log(webRequest.downloadHandler.text);
            }

            // wrap the response in a wrapper class so that it can be deserialized correctly
            string wrappedResponse = "{\"items\":" + webRequest.downloadHandler.text + "}";

            GenericResponseWrapper genericResponses = JsonConvert.DeserializeObject<GenericResponseWrapper>(wrappedResponse);
            foreach (var item in genericResponses.items)
            {
                Debug.Log(item.type);
                switch (item.type)
                {
                    case "text":
                        TextResponsePayload textPayload = item.payload.ToObject<TextResponsePayload>();
                        responseHandlerPackage.textHandler(textPayload.message);
                        break;
                    case "face_talk":
                        FaceTalkResponsePayload customPayload = item.payload.ToObject<FaceTalkResponsePayload>();
                        responseHandlerPackage.faceTalkHandler(customPayload.message, customPayload.face);
                        break;
                    case "face_speech_talk":
                        SpokenFaceTalkResponsePayload spokenPayload = item.payload.ToObject<SpokenFaceTalkResponsePayload>();
                        responseHandlerPackage.spokenFaceTalkHandler(spokenPayload.message, spokenPayload.face, spokenPayload.base64AudioData);
                        break;
                    case "scene_change":
                        BackgroundChangeResponsePayload backgroundPayload = item.payload.ToObject<BackgroundChangeResponsePayload>();
                        responseHandlerPackage.backgroundChangeHandler(backgroundPayload.scene);
                        break;
                    case "item_gift":
                        ItemGiftResponsePayload itemPayload = item.payload.ToObject<ItemGiftResponsePayload>();
                        responseHandlerPackage.itemGiftHandler(itemPayload.item);
                        break;
                    default:
                        Debug.LogWarning("Unknown type: " + item.type);
                        break;
                }
            }
        }
    }

    public void LaunchVoiceflow(ResponseHandlerPackage responseHandlerPackage) {
        InterractPayload payload = new InterractPayload {
            action = new InterractAction()
        };

        string payloadJson = JsonConvert.SerializeObject(payload);
        InteractVoiceflow(payloadJson, responseHandlerPackage);
    }

    public void SendTextVoiceflow(string text, ResponseHandlerPackage responseHandlerPackage) {
        InterractPayload payload = new InterractPayload {
            action = new InterractAction()
        };
        payload.action.type = "text";
        payload.action.payload = text;

        string payloadJson = JsonConvert.SerializeObject(payload);
        InteractVoiceflow(payloadJson, responseHandlerPackage);
    }
}
