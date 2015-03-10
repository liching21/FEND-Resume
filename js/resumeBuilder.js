/** 										**/	
/*	File: ResumeBuilder.js 					 */
/*	Based on: JavaScript Basics from Udacity */
/*	Written by: Liching Yew					 */
/**											**/

var bio = {
	"name" : "Liching Yew",
	"role" : "Front End Web Developer",
	"contacts" : {
		"email" : "liching.yew@gmail.com",
		"mobile" : "0488 888 888",
		"github" : "https://github.com/liching21",
		"location" : "Sydney, Australia"
	},
	
	"pictureURL" : "images/may-main.jpg",
	"welcomeMessage" : "Hello everyone, welcome to my portfolio page!",
	"skills" : ["HTML" , " JS" , " CSS" , " Responsive"]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

/** Creating work object with dot notation **/
/**
	var work = {};

	work.position = "Service Desk Analyst";
	work.employer = "SiteMinder";
	work.yearsWorked = "1 year";
	work.cityOfBusiness = "Sydney, Australia";
*/

/** Updating the work object **/
var work = {
	"jobs" : [
		{
			"employer" : "SiteMinder",
			"title" : "Service Desk Analyst",
			"location" : "Sydney, Australia",
			"dates" : "june 2014 - current",
			"description" : "Support Little Hotelier by phone and written support"
		},
		{
			"employer" : "Sydney Eemralds Synchro Club",
			"title" : "Coach",
			"location" : "Sydney, Australia",
			"dates" : "2009 - 2014",
			"description" : "Planning sessions and coaching swimmers for competition"
		}
	]
}

/** Creating the projects object **/

var projects = {
	"projects" : [
		{
			"title" : "Events of y22",
			"dates" : "February 2015",
			"description" : "A web page reflecting my life event during th year I was 22",
			"images" : [
				"images/22img1.png", 
				"images/22img2.png"
			]
		},
		{
			"title" : "Sydney Emeralds Club Website",
			"dates" : "February 2014 - January 2015",
			"description" : "Website for the Sydney Emeralds Synchro Club",
			"images" : [
				"images/combo-states.jpg", 
				"images/competitive-lift.jpg"
			]
		}
	]
}

/** Creating Education object with brackets notation **/
/**
	var education = {};

	education["schoolName"] = "University of Sydney";
	education["yearsAttended"]= "4 years";
	education["schoolCity"] = "Sydney, Australia";
*/

/** Append Work position and Education name to the page **/
/**
	$("#header").append(work["position"]);
	$("#header").append(education.schoolName);
*/

/** Created a new education object and verify it with JSON **/
var education = {
		"schools" : [
			{
			  "name" : "University of Sydney",
			  "location" : "Sydney, Australia",
			  "degree" : "Bachelor of Science",
			  "majors" : ["Computer Science" , "Information Systems"],
			  "dates" : "2009 - 2013",
			  "url" : "http://sydney.edu.au/"
			}
	  ],

	  "onlineCourses" : [
	  	{
	  		"title" : "Front End Web Development",
		  	"school" : "Udacity",
		  	"dates" : "Feb 2015 - Ongoing"
	  	}	
	  ] 
}

/** write an if statement to check if there are skills in the bio object **/

if(bio.skills.length > 0){
	/** skills **/
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
}

/** write a for in loop that iterates over all jobs in the work obj **/
/*	format each jobs employer	and job title													 */
var formattedEmployer;
var formattedTitle;
var combineEmployerTitle;

for (job in work.jobs){

	formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].location);
	formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].dates);
	formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	
	combineEmployerTitle = formattedEmployer + formattedTitle;

	$("#workExperience").append(HTMLworkStart);
	$("#workExperience:last").append(combineEmployerTitle);
	$("#workExperience:last").append(formattedDates);
	$("#workExperience:last").append(formattedLocation);
	$("#workExperience:last").append(formattedDescription);

	console.log(work.jobs[job].employer, work.jobs[job].title);
}







