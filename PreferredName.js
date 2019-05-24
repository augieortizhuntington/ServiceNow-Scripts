
// 1. Query the user table for all user records.
// 2. Check the prefered name feild.
// 3. If empty, run through logic to update it, otherwise, ignore.

//* print error log if the name feild is empty. 
gs.log("Starting the Preferred name script...", "Prefer Script");
var start = new Date().getTime();
var preferedName;
var orginalName;
var updateCount = 0;
var ignoreCount = 0;
var errorCount = 0;
var user = new GlideRecord('sys_user');
user.query();
while(user.next()){

	//Loop over all users

	preferedName = user.u_preferred_name;
	orginalName = user.name;

	if (preferedName == "")
	{
		//If the name is not empty, update it. Otherwise, throw error.
		if(orginalName != "")
		{
			//Write query to update
			user.u_preferred_name = orginalName;
			user.update(); 
			updateCount++;
		}
		else
		{
			errorCount++;
		}

	}
	else
	{
		ignoreCount++;
	}

}

gs.log("UPDATED NAMES: " + updateCount, "Prefer Script");
gs.log("IGNORED: " + ignoreCount, "Prefer Script");
gs.log("ERRORS: " + errorCount, "Prefer Script");

var end = new Date().getTime();

var time = end - start;

gs.log("Execution time: " + (time/1000) + " seconds", "Prefer Script");
gs.log("Execution time: ~" + ((time/1000)/60) + " mins", "Prefer Script");
