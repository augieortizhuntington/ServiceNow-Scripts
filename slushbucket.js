var tbl;
var groups = current.variables.adGroups;
var x;
groups = groups.split(',');

for(x = 0; x < groups.length; x++)
	{
		tbl = new GlideReord('u_lumension_ad_groups');
		tbl.addQuery('sys_id', groups[x]);
		while(tbl.next())
			{
				task.description += tbl.u_ad_group + "\n";
			}
	}