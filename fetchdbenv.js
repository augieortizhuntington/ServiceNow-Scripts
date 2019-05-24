function onChange(control, oldValue, newValue, isLoading) {
   
   //   if (isLoading)
   //      return;
   
   var appln = g_form.getValue('sql_da_pick_app');
   var src_env = g_form.getValue('sql_da_envnmt');
   var src_inst = g_form.getValue('sql_da_db_instance');
   var src_db = g_form.getValue('sql_da_db_name_cp');
   
   
   var temp = [];
   var i=0;
   var flag = 0;
   
   var gr0 = new GlideRecord('u_hnb_applications');
   gr0.addQuery('sys_id',appln);
   gr0.addQuery('u_system_status','Retired');
   gr0.query();
   
   if(gr0.next())
      {
      alert('Please select an application which is in Active state');
      g_form.setValue('sql_da_pick_app','');
      return false;
      
   }
   else {
      
      var gr = new GlideRecord('cmdb_rel_ci');
      gr.addQuery('parent.sys_id',appln);
      gr.addQuery('child.sys_class_name','cmdb_ci_db_mssql_instance');
      gr.addQuery('parent.sys_class_name','u_hnb_applications');
      gr.query();
      var rows = gr.rows.length;
      
      g_form.clearOptions('sql_da_env');
      g_form.addOption('sql_da_env','','Please make a selection');
      while(gr.next())
         {
         var gr2 = new GlideRecord('cmdb_ci_db_mssql_instance');
         gr2.addQuery('sys_id',gr.child);
         gr2.addQuery('u_db_status','!=','Inactive');
         gr2.query();
         while(gr2.next())
            {
            
            //g_form.addOption('oracle_dr_src_env',gr2.u_environment,gr2.u_environment);
            temp[i] = gr2.u_environment;
            i++;
         }
      }
      
      var flag1 = 0;
      var j;
      var n;
      var env_cnt = 0;
      for(j=0;j<temp.length;j++)
         {
         for(n=j+1;n<temp.length;n++)
            {
            if(j!=n && temp[j] == temp[n])
               {
               flag1 = 1;
               break;
            }
         }
         if(flag1 == 0)
            {
            if(temp[j] != '') {
               
               env_cnt++;
               g_form.addOption('sql_da_env',temp[j],temp[j]);
            }
            
         }
         flag1=0;
      }
      
      
      
      if(env_cnt == 0 && appln!='')
         {
         alert("Please select an application that has an active MS SQL database.");
         g_form.setValue('sql_da_pick_app','');
         return false;
      }
      if (src_env != '')
         {
         g_form.setValue('sql_da_env',src_env);
         g_form.setValue('sql_da_envnmt','');
      }
      if (src_inst != '')
         {
         g_form.setValue('sql_da_db_inst',src_inst);
         g_form.setValue('sql_da_db_instance','');
      }
      if (src_db != '')
         {
         g_form.setValue('sql_da_db_name',src_db);
         g_form.setValue('sql_da_db_name_cp','');
      }
      
   }
   
}


