using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectFlower : MonoBehaviour
{
    // Start is called before the first frame update
    private void OnTriggerEnter(Collider other)
    {
        // Access the transform component of this object and make it twice as large
        transform.localScale *= 2;
    }
}
