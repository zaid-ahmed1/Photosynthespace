using System.Collections.Generic;
using UnityEngine;

public class PlantController : MonoBehaviour
{
    public List<GameObject> milestones = new List<GameObject>();
    public Animator plantAnimator;  // Animator controlling the leaf growth

    private string growthParameter0 = "StartGrowing";  // The parameter to trigger the animation

    private string growthParameter1 = "Grow2";  // The parameter to trigger the animation
    
    private string growthParameter2 = "Grow3";  // The parameter to trigger the animation
    private bool hasGrown1 = false;  // Flag to check if growth has already occurred
    private bool hasGrown0 = false;  // Flag to check if growth has already occurred
    private bool hasGrown2 = false;  // Flag to check if growth has already occurred
    int count = 0;
    
    
    // This method is called when particles from the particle system collide with the plant
    // void OnParticleCollision(GameObject other)
    // {
    //     Debug.Log("Collided with spray particles");
    //     // Check if the colliding object is the spray particles and if the plant hasn't already grown
    //     if (!hasGrown)
    //     {
    //         // Trigger the leaf growth animation
    //         plantAnimator.SetBool(growthParameter, true);
    //         hasGrown = true;  // Set the flag to prevent multiple triggers
    //     }
    // }

    // This method can be called to reset the growth after each spray
    // public void ResetGrowth()
    // {
    //     hasGrown = false;
    //     plantAnimator.SetBool(growthParameter, false);
    // }


    public void milestoneController(int index)
    {
        GameObject milestone = milestones[index];
        // Set it disabled
        milestone.SetActive(false);
    }

    
    public void incrementCount()
    {
        count++;
    }
    public void toggleGrowthParameter()
    {
        if (count == 1)
        {
            bool growth0 = true;
            plantAnimator.SetBool(growthParameter0, growth0);
            hasGrown0 = growth0;
            growth0 = false;
            milestoneController(0);
        }

        else if (count == 2)
        {
            bool growth1 = true;
            plantAnimator.SetBool(growthParameter1, growth1);
            hasGrown1 = growth1;
            growth1 = false;
            milestoneController(1);

        }

        else if (count == 3)
        {
            bool growth2 = true;
            plantAnimator.SetBool(growthParameter2, growth2);
            hasGrown2 = growth2;
            growth2 = false;
            milestoneController(2);

        }



    }
}