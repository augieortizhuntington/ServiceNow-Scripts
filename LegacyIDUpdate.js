

//Updating the ID's in the location table to the new ID's provided by the Archibus Team.
//Written By Agustin Ortiz - HB28901	



var legacyID;
var newID;
var replacement = new GlideRecord('u_mapped_building_legacy');
replacement.setLimit(1); //testing;
replacement.query();

//For each replacement in the mapped building legacy table
while(replacement.next())
{
	legacyID = replacement.u_legacy_id;
	newID = replacement.u_new_building_id;

	//location query
	var location = new GlideRecord('cmn_location');
	location.addQuery('u_building_id', legacyID);
	location.query();
	gs.log("Number of Locations to update: " + location.getRowCount());

	//For each location matching a legacy id
	while(location.next())
	{
		//Update the current location with the replacement ID
		location.u_building_id = newID;
		location.update();
	}

}



//For each replacement in the mapped floor legacy table
var replacement = new GlideRecord('u_mapped_floor_legacy');
replacement.setLimit(1); //testing;
replacement.query();

//For each replacement in the mapped floor legacy table
while(replacement.next())
{
	legacyID = replacement.u_legacy_id;
	newID = replacement.u_new_floor_id;

	//location query
	var location = new GlideRecord('cmn_location');
	location.addQuery('u_floor_id', legacyID);
	location.query();
	gs.log("Number of Locations to update: " + location.getRowCount());

	//For each location matching a legacy id
	while(location.next())
	{
		//Update the current location with the replacement ID
		location.u_floor_id = newID;
		location.update();
	}

}

//For each replacement in the mapped space legacy table
var replacement = new GlideRecord('u_mapped_space_legacy');
replacement.setLimit(1); //testing;
replacement.query();

//For each replacement in the mapped floor legacy table
while(replacement.next())
{
	legacyID = replacement.u_legacy_id;
	newID = replacement.u_new_floor_id;

	//location query
	var location = new GlideRecord('cmn_location');
	location.addQuery('u_floor_id', legacyID);
	location.query();
	gs.log("Number of Locations to update: " + location.getRowCount());

	//For each location matching a legacy id
	while(location.next())
	{
		//Update the current location with the replacement ID
		location.u_floor_id = newID;
		location.update();
	}

}







