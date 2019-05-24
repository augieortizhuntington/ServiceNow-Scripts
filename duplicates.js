    var q = new GlideAggregate('cmn_location'); 
    //q.addQuery('active', '=', 'true'); //returns only active records
    q.addAggregate('COUNT', 'u_building_id'); //aggregate to count values in whatever field is passed as dupeField
    q.addHaving('COUNT', 'u_building_id', '>', '1'); //returns only records having more than one active instance of dupeField (duplicates)
    q.query();  
    var listOfDupes = new Array();
     //build array to push the results into
    while (q.next()) {  
        listOfDupes.push(q.getValue('u_building_id')); //Push the value of the dupe field to the array       
    } 

gs.print('Buildings: ' + listOfDupes.length);

    var q = new GlideAggregate('cmn_location'); 
    //q.addQuery('active', '=', 'true'); //returns only active records
    q.addAggregate('COUNT', 'u_floor_id'); //aggregate to count values in whatever field is passed as dupeField
    q.addHaving('COUNT', 'u_floor_id', '>', '1'); //returns only records having more than one active instance of dupeField (duplicates)
    q.query();  
    var listOfDupesFloors = new Array();
     //build array to push the results into
    while (q.next()) {  
        listOfDupesFloors.push(q.getValue('u_floor_id')); //Push the value of the dupe field to the array       
    } 

gs.print('Floors: ' + listOfDupesFloors.length);

    var q = new GlideAggregate('cmn_location'); 
    //q.addQuery('active', '=', 'true'); //returns only active records
    q.addAggregate('COUNT', 'u_space_id'); //aggregate to count values in whatever field is passed as dupeField
    q.addHaving('COUNT', 'u_space_id', '>', '1'); //returns only records having more than one active instance of dupeField (duplicates)
    q.query();  
    var listOfDupesSpaces = new Array();
     //build array to push the results into
    while (q.next()) {  
        listOfDupesSpaces.push(q.getValue('u_space_id')); //Push the value of the dupe field to the array       
    } 

gs.print('Spaces: ' + listOfDupesSpaces.length);