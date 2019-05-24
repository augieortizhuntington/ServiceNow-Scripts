function __storeDetails()
{
	g_form.setValue('req_details_temp','');
	
    	var ft = document.getElementsByName("ftype");
  	var fp = document.getElementsByName("fpath");
	var jst = document.getElementsByName("just");
	var env = document.getElementsByName("env");
	
	var val = "";
	var len = ft.length;
	//alert("len:"+env.length);
	//alert("len1:"+env[0].length+" env[0]:"+env[0]);

	var myCount = 0;	

   	for(var index=0;;index++){
		var fqdnid = "col"+index;
		var appid = "colm"+index;
		if(myCount==len)
		{
		 //alert("myCount:"+myCount+" len:"+len);
		//alert("breaking");
		break;
		}
		if(document.getElementById(fqdnid) && myCount<len)
		{
		var envTemp=env[myCount];
		var envStr='';
		for(var i=0;i<env[myCount].length;i++)
		{		
			if(envTemp[i].selected)
			{
				envStr=envTemp[i].value+","+envStr;
			}
		}
		//alert("envstr:"+envStr);
		val += document.getElementById("sys_display."+fqdnid).value + "^" + document.getElementById("sys_display."+appid).value + "^" + envStr + "^" + ft[myCount].value + "^" + fp[myCount].value + "^" + jst[myCount].value;
		val+="#";
	myCount++;
	}
 	}
	g_form.setValue('req_details_temp',val);
}
