using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectFlower : MonoBehaviour
{
    // Start is called before the first frame update
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Spray"))
        {
            transform.localScale *= 2;
        }

        if (other.CompareTag("Water"))
        {
            transform.localScale /= 2;
        }
    }
}
