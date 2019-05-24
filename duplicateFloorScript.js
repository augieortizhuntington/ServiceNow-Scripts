/*
Script by: Agustin Ortiz
Puropose: 
1/16/2018

*/




var q = new GlideAggregate('cmn_location'); 
q.addAggregate('COUNT', 'u_floor_id');
q.addQuery('u_active', 'true'); //aggregate to count values in whatever field is passed as dupeField
q.addQuery('u_type', 'Floor');
q.orderBy('u_floor_id');
q.addHaving('COUNT', 'u_floor_id', '>', '1'); //returns only records having more than one active instance of dupeField (duplicates)
q.query();  
var listOfDupesFloors = new Array();
 //build array to push the results into
while (q.next()) {  
    listOfDupesFloors.push(q.getValue('u_floor_id')); //Push the value of the dupe field to the array
    //gs.print(q.getValue('u_floor_id'));
} 

gs.print('Dup Floors: ' + listOfDupesFloors.length);

for(var i =0; i < 10; i++)
{

    gs.print(listOfDupesFloors[i]);

    var dup = new GlideRecord('cmn_location');
    dup.addQuery('u_active', 'true'); 
    dup.addQuery('u_floor_id', listOfDupesFloors[i]);
    dup.addQuery('u_type', 'Floor');
    dup.orderBy('sys_created_on')
    dup.query();
    
    var listFloors = [];

    while(dup.next())
    {
        gs.print(dup.sys_created_on);
        listFloors.push(dup.sys_id.toString());
    }

    for(var x in listFloors)
    {
        gs.print(listFloors[x])

        var spaces = GlideRecord('cmn_location')
        spaces.addQuery('u_active', 'true');
        spaces.addQuery('parent' , listFloors[x])
        spaces.query()
        gs.print(spaces.getRowCount());


        if(spaces.getRowCount() > 0 )
        {
            var parent = listFloors[x];

            //Update
            var fix = new GlideRecord('cmn_location')
            fix.addQuery('sys_id', listFloors[x]);
            fix.setWorkflow(false);
            fix.query();

            while(fix.next())
            {
                gs.log(fix.u_floor.toString().length);
                if(fix.u_floor.toString().length == 1)
                {
                    gs.log("Updating floor name;");
                    var newFloor = "00" + fix.u_floor.toString();
                    fix.u_floor = newFloor;
                    fix.name = "Floor: 00" + fix.u_floor;
                    fix.update();
                }
            }

        }

        var noChildCount = 0;

        if(spaces.getRowCount() == 0)
        {
            noChildCount++;
            inactive = listFloors[x];

            if(noChildCount  > 1)
            {
                var fix = new GlideRecord('cmn_location')
                fix.addQuery('sys_id', listFloors[x]);
                fix.query();
                while(fix.next())
                {
                    if(fix.u_floor.toString().length == 1)
                        var inactive = listFloors[x]
                }
            }
        }
    }

    //Check if parent is null, if so then these floors are not a parent to any spaces

    if(parent != null || inactive != null)
    {
        gs.log("Setting inactive record");
        var update = new GlideRecord('cmn_location');
        update.addQuery('sys_id', inactive);
        update.query();
        while(update.next())
        {
            update.u_active = 'false';
            update.update();
        } 

    }

}
