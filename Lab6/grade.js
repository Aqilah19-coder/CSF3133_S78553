// Error 1 (grade.html, Line 9): Add return before checkMark() to control form submission.

// Error 2 (grade.html, Line 17): Change showtable() to showTable().

// Error 3 (grade.html, Line 19): Change grades.js to grade.js.

// Error 4 (grade.js, Line 5): Change name = "" to name === "".

// Error 5 (grade.js, Line 9): Change isNan() to isNaN().

// Error 6 (grade.js, Line 14): Change && to || for range validation.

// Error 7 (grade.js, Line 28): Change getElementByID() to getElementById().

// Error 8 (grade.js, Line 30): Change style.colour to style.color.

// Error 9 (grade.js, Line 31): Change return true to return false to prevent page reload.

// Error 10 (grade.js, Line 38): Change initial value of i from 1 to 0.

// Error 11 (grade.js, Line 42): Change innerHtml to innerHTML.


function checkMark() {

    let name = document.forms["gradeForm"]["name"].value.trim();

    let mark = document.forms["gradeForm"]["mark"].value.trim();

    // Validate empty name
    if (name === "") {

        alert("Name must be filled out.");
        return false;
    }

    // Validate empty mark
    if (mark === "") {

        alert("Mark field cannot be empty.");
        return false;
    }

    // Validate non-numeric mark
    if (isNaN(mark)) {

        alert("Please enter a valid numeric value.");
        return false;
    }

    // Convert mark to a number
    mark = Number(mark);

    // Validate mark range
    if (mark < 0 || mark > 100) {

        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;
    let color;

    // Determine grade and result colour
    if (mark >= 80) {

        grade = "A";
        color = "green";

    } else if (mark >= 65) {

        grade = "B";
        color = "green";

    } else if (mark >= 50) {

        grade = "C";
        color = "orange";

    } else {

        grade = "F";
        color = "red";
    }

    // Display result
    document.getElementById("result").textContent =
        name + " got grade " + grade;

    // Change result colour
    document.getElementById("result").style.color =
        color;

    // Display checked date and time
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + Date();

    document.getElementById("checkTime").style.color =
        color;

    // Prevent the page from reloading
    return false;
}

function showTable() {

    // Declare arrays
    let grades = ["A", "B", "C", "F"];

    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    // Create table header
    let tableHTML = "<table>";

    tableHTML +=
        "<tr><th>Grade</th><th>Mark range</th></tr>";

    // Generate table rows using a for loop
    for (let i = 0; i < grades.length; i++) {

        tableHTML +=
            "<tr>" +
            "<td>" + grades[i] + "</td>" +
            "<td>" + ranges[i] + "</td>" +
            "</tr>";
    }

    tableHTML += "</table>";

    // Display grade table
    document.getElementById("tableContainer").innerHTML =
        tableHTML;
}

function randomMark() {

    let mark = Math.floor(Math.random() * 101);

    document.getElementById("mark").value = mark;
}