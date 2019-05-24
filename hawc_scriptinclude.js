var GetHAWCInfo = Class.create();
 
GetHAWCInfo.prototype = Object.extendsObject(AbstractAjaxProcessor, {
 
    getEnv: function() {
 
        var arrayUtil = new ArrayUtil();
        var envArr = new Array();
        var solution = this.getParameter('sysparm_sol');
        var envRec = new GlideRecord('u_hawc_mapping');
        envRec.addQuery('u_active', true);
        envRec.addQuery('u_solution', solution);
        envRec.query();
		
        while (envRec.next()){
        	envArr.push(envRec.u_environment.toString());
        }

        var envUniq = arrayUtil.unique(envArr);
        return envUniq.toString();
    }
 
});