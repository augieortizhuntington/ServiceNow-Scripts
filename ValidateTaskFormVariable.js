if(current.description.indexOf('CT1292') > -1)
{
	alert("Script is running");
	var code = g_form.getValue('u_user_code');
	if(code == '')
	{
		alert("You must enter a code 1-99");
		return false;
	}
	else if (code != parseInt(code, 10))
	{
		alert("You must enter a valid integer number.  No text allowed.");
		return false;
	}
	else if(code > 99 || code < 1)
	{
		alert("The code is not valid.  Must be 1-99.");
		return false;
	}
}


	
