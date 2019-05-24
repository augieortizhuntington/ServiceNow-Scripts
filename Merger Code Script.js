gs.log("Starting the Merger Code script...", "Merger Script");
var start = new Date().getTime();
var preferedName;
var orginalName;
var updateCount = 0;
var ignoreCount = 0;
var errorCount = 0;
var collegue;
var merger;
var code;
var user = new GlideRecord('sys_user');
user.query();

//Loop over all users
while(user.next()){

	//Get Current Colleague ID
	colleague = user.user_name;
	//Query the Merger Code table to find this user
	merger = new GlideRecord('u_person_hr_merger_code');
	merger.addQuery('u_user_id', colleague);
	merger.query();

	if(merger.getRowCount() == 1)
	{
		while(merger.next()){

			//Update the User table with the merger code
			code = merger.u_merger_code;
			user.u_hnb_person_hr_merger_code = code;
			user.update();
			updateCount++;
		}
	}
	else if(merger.getRowCount() < 1)
	{
		ignoreCount++;
	}
	else
	{
		errorCount++;
	}
}

gs.log("UPDATED CODES: " + updateCount, "Merger Script");
gs.log("IGNORED: " + ignoreCount, "Merger Script");
gs.log("ERRORS: " + errorCount, "Merger Script");

var end = new Date().getTime();

var time = end - start;

gs.log("Execution time: " + (time/1000) + " seconds", "Merger Script");
gs.log("Execution time: ~" + ((time/1000)/60) + " mins", "Merger Script");