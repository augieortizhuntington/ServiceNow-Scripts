gs.log("Starting the Space name script...", "Space Script");
var start = new Date().getTime();


var spaceID;
var locSysID;
var employeeNumber;
var updateCount = 0;

var space = new GlideRecord('u_hr_spaces');
space.query();

while(updateCount != 30) {
	space.next()
	spaceID = space.u_space_id;
	employeeNumber = space.u_employee_number;
	var location = new GlideRecord("cmn_location");
	location.addQuery("u_space_id", spaceID);
	location.query();
	while(location.next()) {
		var locSysID = location.sys_id;
	}

	var user = new GlideRecord("sys_user");
	
	//Check for Contractor

	if(employeeNumber.indexOf("ZZ") || employeeNumber.indexOf("zz"))
		user.addQuery("user_name", employeeNumber);
	else
		user.addQuery("employee_number" , employeeNumber);

	user.query();
	while(user.next()) {
		user.u_centerstone_allocated_locati = locSysID;
        //user.update();

        gs.log("Updating user: [" + user.user_name + "] to space: [" + spaceID + "]");
        updateCount++;
	}
}


	gs.log("UPDATED EMPLOYEES: " + updateCount, "Space Script");
	var end = new Date().getTime();

	var time = end - start;

	gs.log("Execution time: " + (time/1000) + " seconds", "Space Script");
	gs.log("Execution time: ~" + ((time/1000)/60) + " mins", "Space Script");



//Update the user record center stone allocation feild with the location sys_id

