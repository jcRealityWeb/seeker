document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to avoid page reload

    // Get form input values
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const employerName = document.getElementById('employerName').value;
    const jobLocation = document.getElementById('jobLocation').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const dateApplied = document.getElementById('dateApplied').value;

    // Create a Date object to format the date
    const appliedDate = new Date(dateApplied);
    const formattedDate = `${appliedDate.getDate()} ${getMonthAbbreviation(appliedDate.getMonth())} ${appliedDate.getFullYear()}`;

    // Create an object to store the form data
    const formData = {
        name: name,
        jobTitle: jobTitle,
        employerName: employerName,
        jobLocation: jobLocation,
        jobDescription: jobDescription,
        dateApplied: formattedDate
    };

    // Function to get the month abbreviation
    function getMonthAbbreviation(month) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[month];
}



    // Use the object to fill the ids on the page
    // document.getElementById('job-title').innerText = formData.jobTitle;
    // document.getElementById('employer').innerText = formData.employerName;
    // document.getElementById('job-posted').innerText = `Job posted ${formData.dateApplied} ago`;
    // document.getElementById('job-location').innerText = formData.jobLocation;
    // document.getElementById('job-desc').innerText = formData.jobDescription;
    // document.getElementById('date').innerText = `Applied on ${formData.dateApplied}`;

    // Output the formData object to the console
    console.log(formData);

    // Clear the form fields (optional)
    // document.getElementById('customForm').reset();

          // Redirect to the "result.html" page and pass the data as a URL parameter
          const queryString = `?name=${encodeURIComponent(formData.name)}&jobTitle=${encodeURIComponent(formData.jobTitle)}&employerName=${encodeURIComponent(formData.employerName)}&jobLocation=${encodeURIComponent(formData.jobLocation)}&jobDescription=${encodeURIComponent(formData.jobDescription)}&dateApplied=${encodeURIComponent(formData.dateApplied)}`;
          const resultUrl = `result.html${queryString}`;
          window.location.href = resultUrl;
});
