// Set values for the task in this script.  Use the variable 'task' when setting additional values.
// Note: This script is run after the task values are set using the Fields, Template or Values you have specified.
//
// For example:
//     task.short_description = current.short_description;

// Set values for the task in this script.  Use the variable 'task' when setting additional values.
// Note: This script is run after the task values are set using the Fields, Template or Values you have specified.
//
// For example:
//     task.short_description = current.short_description;


//Looks as if these are just editing the access description basesd on which action access is set to: Add, Modify, or Remvoe
//Straight foward but I have no way of confirming without runnin the catalog item

var access = current.variables.venture_access_type;
if(access=='Add Access')
{
	task.short_description = 'Add Venture Access';
}
if(access=='Modify Access')
{
	task.short_description = 'Modify Venture Access';
}
if(access=='Remove Access')
{
	task.short_description = 'Remove Venture Access';
}

task.description = "\n\n\nCT00770";