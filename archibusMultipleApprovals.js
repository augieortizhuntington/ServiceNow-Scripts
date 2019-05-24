// Set values for the task in this script.  Use the variable 'task' when setting additional values.
// Note: This script is run after the task values are set using the Fields, Template or Values you have specified.
//
// For example:
//     task.short_description = current.short_description;


task.description = "If user exists in Archibus already, the following should replace any existing access\n\n";


task.description += "Request Type: " + current.variables.requestType + "\n";

task.description += "\Environment(s)\n";

if(current.variables.dev == "true")
{
	task.description += "dev\n";
}
if(current.variables.prod == "true")
{
	task.description += "prod\n";	
}


task.description += "\nModules(s):\n";


var mod = new GlideRecord('u_archibus_module');
var selected = [];
var approver;
var duplicateFound = false;
mod.addQuery('sys_id', 'IN', current.variables.module);
mod.query();
while(mod.next())
{
	var app = new GlideRecord('sysapproval_group');

	app.addQuery('parent', current.sys_id);
	app.addQuery('approval', 'Approved');
	app.addQuery('assignment_group', mod.u_approval_group);
	app.query();
	workflow.info(app.getRowCount());

	if(app.getRowCount() > 0)
	{
		task.description += mod.u_module;
		
		while(app.next())
		{
			task.description += "  * Approved by " + app.approval_user.name + "\n"; 
		}
	}
}



task.description += "\nUser Level(s):\n";

if(current.variables.iamAdmin == "Yes")
{
	task.description += "IAM Admin\n";
}


mod = new GlideRecord('u_archibus_module');
selected = [];
duplicateFound = false;
mod.addQuery('sys_id', 'IN', current.variables.module);
mod.query();
while(mod.next())
{
	app = new GlideRecord('sysapproval_group');

	app.addQuery('parent', current.sys_id);
	app.addQuery('approval', 'approved');
	app.addQuery('assignment_group', mod.u_approval_group);
	app.query();
	workflow.info(app.getRowCount());

	if(app.getRowCount() > 0)
	{
		task.description += mod.u_user_level + "\n";
	}
}

task.description += " ***Audit Tracking Only. IAM, Do Not Provision Access for Rejected Modules***\n";
task.description += "\nRejection Modules\n";
mod = new GlideRecord('u_archibus_module');
selected = [];
duplicateFound = false;
mod.addQuery('sys_id', 'IN', current.variables.module);
mod.query();
while(mod.next())
{
	app = new GlideRecord('sysapproval_group');

	app.addQuery('parent', current.sys_id);
	app.addQuery('approval', 'rejected');
	app.addQuery('assignment_group', mod.u_approval_group);
	app.query();
	workflow.info(app.getRowCount());

	if(app.getRowCount() > 0)
	{
		task.description += mod.u_user_level;
		while(app.next())
		{
		
		task.description += "  * Rejected by " + app.approval_user.name + "\n";
		}
	}
}




