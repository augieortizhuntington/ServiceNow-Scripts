function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }
	
	var test = validateDate(g_form.getValue('dueDate'))
	if(!test)
	{
		alert("Wrong Date fromat. Try again.");
		return false;
	}
		
   //Type appropriate comment here, and begin script below
   
}

function validateDate(testdate) {
    var date_regex = /^(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])-(19|20)\d{2}$/ ;
    return date_regex.test(testdate);
}