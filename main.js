var numVictims = prompt("How many disaster victims do you wish to enter?");
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



for





// console.log(victim);


//  Part 3

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

// console.log(volunteer);


// alert("Number of victims: " + numVictims
// 	// + "\nNumber of volunteers: " + numVolunteers
// 	+ "\nVictim names: " + victim[0])

