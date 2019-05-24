//EDIT BY AGUSTIN ORTIZ FOR HTF PART 3: ADDING LOGIC FOR ROLES OPTIONS LIST

var application = "Aspire";
var uploadSuite;
var efficencySuite;
var discoverer;
var connect;

var options = new GlideRecord('u_htf_user_roles_options');
	options.addQuery('u_htf_application', application);
	options.addQuery('u_role', current.variables.aspireRole);
	options.query();
	while(options.next()){
		uploadSuite = options.u_olm_upload_suite;
		efficencySuite = options.u_olm_efficiency_suite;
		discoverer = options.u_olm_discoverer;
		connect = options.u_olm_connect;
	}		


//Check all 4 columns for true values

if(uploadSuite == true)
{
	task.description += "OLM - Upload Suite\n";
}
if(efficencySuite == true)
{
	task.description += "OLM - Efficiency Suite\n";
}
if(discoverer == true)
{
	task.description += "OLM - Discoverer\n";
}
if(connect == true)
{
	task.description += "OLM - Connect\n";
}
