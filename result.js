// Function to get URL parameters as an object
function getUrlParams() {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }


InsertData();


function InsertData() {

    // Get URL parameters and display the data
    const urlParams = getUrlParams();

    // Log URL parameters to console  ***testing***
    console.log("URL Parameters:", urlParams);



    const name = document.getElementById('name'); 
    const jobTitle = document.getElementById('job-title'); 
    const employerName = document.getElementById('employer'); 
    const jobLocation = document.getElementById('job-location'); 
    const jobDescription = document.getElementById('job-desc');
    const dateApplied = document.getElementById('date'); 
    const jobPosted = document.getElementById('job-posted'); 

    name.innerHTML = urlParams.name;
    jobTitle.innerHTML = urlParams.jobTitle;
    employerName.innerHTML = urlParams.employerName;
    jobLocation.innerHTML = urlParams.jobLocation;
    jobDescription.innerHTML = urlParams.jobDescription;
    dateApplied.innerHTML = "Applied on " + urlParams.dateApplied;

    



}