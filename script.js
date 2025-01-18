// Simulating a database
const students = [];

// Navigation
const loginFrame = document.getElementById("loginFrame");
const formFrame = document.getElementById("formFrame");
const summaryFrame = document.getElementById("summaryFrame");
const viewFrame = document.getElementById("viewFrame");

// Buttons
document.getElementById("welcomeButton").addEventListener("click", () => {
    loginFrame.style.display = "none";
    formFrame.style.display = "block";
});

document.getElementById("studentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const gender = document.getElementById("gender").value;
    const branch = document.getElementById("branch").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!firstName || !lastName || !gender || !branch || !address) {
        alert("Please fill all fields.");
        return;
    }

    // Save student
    students.push({ firstName, lastName, gender, branch, address });
    alert("Student details saved successfully!");

    // Show summary
    formFrame.style.display = "none";
    summaryFrame.style.display = "block";

    document.getElementById(
        "studentSummary"
    ).innerText = `Name: ${firstName} ${lastName}\nGender: ${gender}\nBranch: ${branch}\nAddress: ${address}`;
});

document.getElementById("newEntryButton").addEventListener("click", () => {
    summaryFrame.style.display = "none";
    formFrame.style.display = "block";
});

document.getElementById("exitButton").addEventListener("click", () => {
    window.close();
});

document.getElementById("viewStudents").addEventListener("click", () => {
    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";

    students.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.gender}</td>
            <td>${student.branch}</td>
            <td>${student.address}</td>
        `;
        tbody.appendChild(row);
    });

    formFrame.style.display = "none";
    viewFrame.style.display = "block";
});

document.getElementById("backButton").addEventListener("click", () => {
    viewFrame.style.display = "none";
    formFrame.style.display = "block";
});
