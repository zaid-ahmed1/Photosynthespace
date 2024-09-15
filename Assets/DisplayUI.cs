using System;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UI;
public class DisplayUI : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] private Canvas canvas;
    void Start()
    {
    
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Plant"))
        {
            print("Collided");
            canvas.gameObject.SetActive(true);
        }
        else
        {
            print("wrong tag");
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("Plant"))
        {
            print("Collided");
            
            canvas.gameObject.SetActive(false);
        }
        else
        {
            print("wrong tag");
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
