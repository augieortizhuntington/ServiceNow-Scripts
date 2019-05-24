// Set values for the task in this script.  Use the variable 'task' when setting additional values.
// Note: This script is run after the task values are set using the Fields, Template or Values you have specified.
//
// For example:
//     task.short_description = current.short_description;

	
	var userRecord = new GlideRecord('user');
	var rfUser = g_form.getDisplayValue('colleague');
	userRecord.addQuery('email',rfUser);
	
	userRecord.query()
	while(userRecord.next()) 
	{
		var email = userRecord.email;
	}
							
	task.description = email;
