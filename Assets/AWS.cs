// using System;
// using System.Collections.Generic;
// using System.Threading.Tasks;
// using Amazon.CognitoIdentity;
// using Amazon.CognitoIdentityProvider;
// using Amazon.DynamoDBv2;
// using Amazon.DynamoDBv2.DataModel;
// using Amazon.Runtime;
// using UnityEngine;
// using Newtonsoft.Json;
//
// public class AWS : MonoBehaviour
// {
//     public string Username;
//     private string startTime;
//
//     [DynamoDBTable("photosynthespace")]
//     public class Session
//     {
//         [DynamoDBHashKey]   // Hash key.
//         public int id { get; set; }
//
//         [DynamoDBProperty] public string username { get; set; }
//
//         [DynamoDBProperty] public string message { get; set; }
//     }
//
//     private const string IDENTITY_POOL_ID = "us-east-2:f0977603-9198-4a7e-9cd8-fb4457e3b879";
//     private static Amazon.RegionEndpoint REGION = Amazon.RegionEndpoint.USEast2; // Change this to your region
//     private CognitoAWSCredentials credentials;
//     private DynamoDBContext Context;
//     private Session session;
//     private int counter = 0;
//
//     // void Start()
//     // {
//     //     var unixTimestamp = (int)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
//     //
//     //     // Use a counter that increments for each new item
//     //     counter++;
//     //
//     //     // Combine the Unix timestamp and the counter to create the id
//     //     int id = unixTimestamp * 100 + counter; // Multiply by 100 to allow for up to 100 items per second
//     //     startTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
//     //     Debug.Log("Initializing AWS Credentials");
//     //     credentials = new CognitoAWSCredentials(
//     //         IDENTITY_POOL_ID, // Identity Pool ID
//     //         REGION // Region
//     //     );
//     //     Debug.Log("Creating DynamoDB client");
//     //     AmazonDynamoDBClient client = new AmazonDynamoDBClient(credentials, REGION);
//     //     Context = new DynamoDBContext(client);
//     //     session = new Session
//     //     {
//     //         id = id,
//     //         username = Username,
//     //     };
//     //
//     //     // Call the AppendHeartRate method every 
//     //     
//     //     InvokeRepeating("AppendHeartRate", 1.0f, 1.0f);
//     // }
//     //
//     // private void PerformCreateOperation()
//     // {
//     //     Debug.Log("Creating session data");
//     //
//     //     session.timeElapsed = Timer.getTime();
//     //     session.createdAt = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
//     //
//     //     // Serialize heartRateData to JSON
//     //     var heartRateMap = new Dictionary<int, int>();
//     //     for (int i = 0; i < session.heartRateData.Count; i++)
//     //     {
//     //         heartRateMap[i] = session.heartRateData[i];
//     //     }
//     //     session.heartRateMapJson = JsonConvert.SerializeObject(heartRateMap);
//     //
//     //     Debug.Log("Logging heartRateData before saving:");
//     //     for (int i = 0; i < session.heartRateData.Count; i++)
//     //     {
//     //         Debug.Log($"HeartRateData[{i}] = {session.heartRateData[i]}");
//     //     }
//     //
//     //     Debug.Log($"Saving session with id: {session.id}");
//     //
//     //     // Save the session.
//     //     Context.SaveAsync<Session>(session).ContinueWith(task =>
//     //     {
//     //         if (task.Exception == null)
//     //         {
//     //             Debug.Log("Session data saved successfully");
//     //         }
//     //         else
//     //         {
//     //             Debug.LogError("Error saving session data");
//     //             Debug.LogException(task.Exception);
//     //         }
//     //     });
//     // }
//
//     private async Task<string> RetrieveSession(int sessionId)
//     {
//         try
//         {
//             session = await Context.LoadAsync<Session>(sessionId);
//
//             if (session != null)
//             {
//                 Debug.Log($"Retrieved Session: \nId={session.id} \nUsername={session.username}, \nMessage={session.message}");
//                 return session.message;
//             }
//             else
//             {
//                 Debug.Log("Session not found");
//                 return null;
//             }
//         }
//         catch (Exception ex)
//         {
//             Debug.LogError("Error retrieving session data");
//             Debug.LogException(ex);
//             return null;
//         }
//     }
//     
// }
