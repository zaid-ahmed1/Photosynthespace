using UnityEngine;

public class PlantGrowthController : MonoBehaviour
{
    public Animator plantAnimator;  // Animator controlling the leaf growth
    private string growthParameter = "StartGrowing";  // The parameter to trigger the animation
    private bool hasGrown = false;  // Flag to check if growth has already occurred

    // This method is called when particles from the particle system collide with the plant
    void OnParticleCollision(GameObject other)
    {
        Debug.Log("Collided with spray particles");
        // Check if the colliding object is the spray particles and if the plant hasn't already grown
        if (!hasGrown)
        {
            // Trigger the leaf growth animation
            plantAnimator.SetBool(growthParameter, true);
            hasGrown = true;  // Set the flag to prevent multiple triggers
        }
    }

    // This method can be called to reset the growth after each spray
    public void ResetGrowth()
    {
        hasGrown = false;
        plantAnimator.SetBool(growthParameter, false);
    }
    
    public void toggleGrowthParameter(bool growth)
    {
        if (growth != hasGrown)
        plantAnimator.SetBool(growthParameter, growth);
        hasGrown = growth;
        growth = false;
    }
}