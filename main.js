// create an Array filled with objects containing victim information

var numVictims = prompt("How many victims will be entered?");
var victim = [];
for (i = 1; i <= numVictims; i++) {
	var victimName = prompt("Enter name of victim " + i);
	var victimPhone = prompt("Enter phone number of victim " + i);
	var victimStreet = prompt("Enter Street of victim " + i);
	var victimInfo = {
		name: victimName,
		phone: victimPhone,
		street: victimStreet
		
	}
		victim.push(victimInfo);
}

var victimNameList = [];

// create an Array that contains the victim Names

for (i = 0; i < numVictims; i++) {
	victimNameList.push(victim[i]["name"]);
}






//  Create an array that contains objects containing volunteer names

var numVolunteers = prompt("How many volunteers will be entered?");
var volunteer = [];
for (i=1; i <= numVolunteers; i++) {
	var  volunteerName = prompt("Enter name of volunteer " + i);
	var  volunteerPhone = prompt("Enter phone number of volunteer " + i);
	var  volunteerStreet = prompt("Enter street of volunteer " +i);
	var volunteerInfo = {
		name: volunteerName,
		phone: volunteerPhone,
		street: volunteerStreet
	}
		volunteer.push(volunteerInfo);
}

// Create an array that contains the volunteer names

var volunteerNameList = [];
for (i = 0; i < numVolunteers; i++) {
	volunteerNameList.push(volunteer[i]["name"]);
}

// Create an Alert with info

alert("Number of victims: " + numVictims
 	+ "\nNumber of volunteers: " + numVolunteers
	+ "\nVictim names: " + victimNameList.join(", ")
	+ "\nVolunteer names: " + volunteerNameList.join(", "));

