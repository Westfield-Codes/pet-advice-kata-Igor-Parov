/* Pet Advice Kata */

/* Var, Prompt, Confirm, Alert, Compound Conditional */
var pet = "";
var allergic = confirm("Are you allergic to fur?");
var active = confirm("Do you want an active pet?");
if (allergic == false && active == false) pet = " cat";
else if (allergic == false && active == true) pet = " dog";
else if (allergic == true && active == false) pet = " fish";
else pet = " spider";

alert ("try a" + pet);
// Create pet variable, set equal to empty quotes ("")
// Ask if they are allergic, store in a boolean variable with OK/Cancel
// If they are allergic, ask if they want a cute pet, store in a boolean variable with OK/Cancel
// If they are not allergic, ask if they want to be outdoors with their pet.  Store it in a boolean with OK/Cancel.
// If allergic and cute, pet =  bird
// Else if allergic and not cute,  pet =  tarantula
// Else if not allergic and outdoors,  pet =  dog
// Else if not allergic and indoors,  pet =  cat 
// Display the type of pet: You would do well with a pet
// Ask for a pet name for the pet starting with the same letter as the pet starts with
// Display petname the pet says hi. 
