//---------THE BIO + FOOTER PART-------------

var bio = {
	"name": "Benjamin Arias",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "+49 152 5843 7870",
		"email": "benjamin.j.arias@gmail.com",
		"github": "bjlaa",
		"location": "Berlin"},
	"welcomeMessage": "Hi, my name is Ben.",
	"skills": ["great", "good", "organised", "polite"],
	"bioPic": "images/fry.jpg"
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$('#header').append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$('#header').append(formattedRole);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$('#header').append(formattedBioPic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$('#header').append(formattedWelcomeMsg);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$('#topContacts').append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$('#topContacts').append(formattedGitHub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$('#topContacts').append(formattedLocation);

	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

		formattedSkill= HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

		formattedSkill= HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

		formattedSkill= HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$('#footerContacts').append(formattedMobile);
	
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$('#footerContacts').append(formattedEmail);
	
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$('#footerContacts').app
};
bio.display();

//--------THE WORK PART------------

var work = {
	"jobs": [
	{
		"employer": "Leader Price",
		"title": "Casher",
		"location": " Rueil-Malmaison, France",
		"dates": "2010 - 2012 ",
		"description": "Worked."
	},
	{
		"employer": "Self-employed",
		"title": "Guitar teacher",
		"location": " Rueil-Malmaison, France",
		"dates": "2010 - 2014 ",
		"description": "Worked."
	}]
};
work.display = function(){
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedworkDates);

		var formattedworkLocation = HTMLworkDates.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);

		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedworkDescription);

	}
};
work.display();

//----------THE EDUCATION PART------------

var education = {
	"schools": [ 
		{
			"name": "DBS Music Berlin",
			"location": "Berlin, Germany",
			"degree": "Bachelor",
			"major": "Electronic Music Production",
			"dates": "2015",
			"url": " http://www.dbsmusic.net/electronic-music-course-degree/ "
		},
		{
			"name": "Université Paris Ouest Nanterre",
			"location": "Nanterre, France",
			"degree": "Bachelor",
			"major": "Law and Economics",
			"dates": "2012",
			"url": " http://www.u-paris10.fr/formation/licences-droit-economie-gestion-264286.kjsp"
		}
	],

	"onlinecourses":
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	
};
education.display = function() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	
	$("#onlineyes").append(HTMLonlineClasses);
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses.title);
	$("#onlineyes:last").append(formattedOnlineTitle);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses.school);
	$("#onlineyes:last").append(formattedOnlineSchool);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses.dates);
	$("#onlineyes:last").append(formattedOnlineDates);
	var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses.url);
	$("#onlineyes:last").append(formattedOnlineURL);
	
};
education.display();
//----------THE PROJECTS PART-------------

var projects = {
	"projects":[
		{ 
			"title": "Create your Portfolio",
			"dates": "June 2015",
			"description": "The first project I did within the Udacity Front-End Web Development Nanodegree."
		},
		{
			"title": "OtherProject",
			"dates": "June 2015",
			"description": "Words"
		}	
	]		
};
projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);	

		/*if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}	*/
	}	
};
projects.display();

//-----------OPTIONS---------------

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
