function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading) {
      return;
   }
  if (newValue == ''){
    g_form.clearOptions('environment');
    //addOption(fieldName, choiceValue, choiceLabel, [choiceIndex]))
    //g_form.addOption('priority', '2.5', '2.5 - Moderately High', 3);
    //g_form.addOption('environment', '', '-- None --', 0);
  }
  
  var solution = g_form.getValue('solution');
  //alert("Solution: " + solution);
  
  var gAjax = new GlideAjax('GetHAWCInfo');
  gAjax.addParam('sysparm_name', 'getEnv');
  gAjax.addParam('sysparm_sol', solution);
  gAjax.getXML(EnvParse);
}
  
function EnvParse(response){
  var answer = response.responseXML.documentElement.getAttribute("answer");
  //alert(answer);
  if(answer == ''){
    //g_form.addOption('environment', '', '-- None --', 0); 
  }else{
    g_form.clearOptions('environment');
	  g_form.addOption('environment','','Please make a selection',0);
    var envArr = answer.split(",");
    //alert("EnvArr: " + envArr);
    //g_form.addOption('environment', '', '-- None --', 0);
    for(i=0;i<envArr.length;i++){
      g_form.addOption('environment', envArr[i], envArr[i]);  
    }
  }
}