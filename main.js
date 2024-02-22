<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Employee Details Form</title>
</head>
<body>

<form id="employeeForm" onsubmit="return validateForm()">
    <label for="empid">EmployeeID:</label>
    <input type="text" id="empid" name="empid" required>
    <span id="spanEmpid" style="color: red;"></span><br><br>

    <label for="empname">Employee Name:</label>
    <input type="text" id="empname" name="empname" required>
    <span id="spanEmpname" style="color: red;"></span><br><br>

    <label for="age">Age:</label>
    <input type="text" id="age" name="age" required>
    <span id="spanAge" style="color: red;"></span><br><br>

    <label>Gender:</label><br>
    <input type="radio" id="male" name="gender" value="male" required> Male
    <input type="radio" id="female" name="gender" value="female"> Female
    <span id="spanGender" style="color: red;"></span><br><br>

    <label for="designation">Designation:</label>
    <input type="text" id="designation" name="designation" required>
    <span id="spanDesignation" style="color: red;"></span><br><br>

    <label for="salary">Salary:</label>
    <input type="text" id="salary" name="salary" required>
    <span id="spanSalary" style="color: red;"></span><br><br>

    <label for="location">Location:</label>
    <select id="location" name="location" required>
        <option value="">Select Location</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Calcutta">Calcutta</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
    </select>
    <span id="spanLocation" style="color: red;"></span><br><br>

    <label for="email">Email ID:</label>
    <input type="email" id="email" name="email" required>
    <span id="spanEmail" style="color: red;"></span><br><br>

    <label for="dateOfJoining">Date of Joining:</label>
    <input type="text" id="dateOfJoining" name="dateOfJoining" placeholder="dd-mm-yyyy" required>
    <span id="spanDateOfJoining" style="color: red;"></span><br><br>

    <label for="contactNumber">Contact Number:</label>
    <input type="text" id="contactNumber" name="contactNumber" required>
    <span id="spanContactNumber" style="color: red;"></span><br><br>

    <button type="submit" id="btnSubmit">Submit</button>
</form>

<script>
function validateForm() {
    let empid = document.getElementById("empid").value.trim();
    let empname = document.getElementById("empname").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let designation = document.getElementById("designation").value.trim();
    let salary = document.getElementById("salary").value.trim();
    let location = document.getElementById("location").value;
    let email = document.getElementById("email").value.trim();
    let dateOfJoining = document.getElementById("dateOfJoining").value.trim();
    let contactNumber = document.getElementById("contactNumber").value.trim();

    document.getElementById("spanEmpid").textContent = '';
    document.getElementById("spanEmpname").textContent = '';
    document.getElementById("spanAge").textContent = '';
    document.getElementById("spanGender").textContent = '';
    document.getElementById("spanDesignation").textContent = '';
    document.getElementById("spanSalary").textContent = '';
    document.getElementById("spanLocation").textContent = '';
    document.getElementById("spanEmail").textContent = '';
    document.getElementById("spanDateOfJoining").textContent = '';
    document.getElementById("spanContactNumber").textContent = '';

    let valid = true;

    // EmployeeID validation
    if (empid.length < 5) {
        document.getElementById("spanEmpid").textContent = "EmployeeID should be at least 5 characters long.";
        valid = false;
    }

    // Employee Name validation
    if (empname === '') {
        document.getElementById("spanEmpname").textContent = "Employee Name is required.";
        valid = false;
    }

    // Age validation
    if (isNaN(age) || parseInt(age) <= 0) {
        document.getElementById("spanAge").textContent = "Age should be a number and should not be less than or equal to zero.";
        valid = false;
    }

    // Gender validation
    if (!gender) {
        document.getElementById("spanGender").textContent = "Gender is required.";
        valid = false;
    }

    // Designation validation
    if (designation === '') {
        document.getElementById("spanDesignation").textContent = "Designation is required.";
        valid = false;
    }

    // Salary validation
    if (isNaN(salary) || parseInt(salary) <= 0) {
        document.getElementById("spanSalary").textContent = "Salary should be a number and should not be less than or equal to zero.";
        valid = false;
    }

    // Location validation
    if (location === '') {
        document.getElementById("spanLocation").textContent = "Location is required.";
        valid = false;
    }

    // Email validation
    let emailFormat = /^\S+@\S+\.\S+$/;
    if (!email.match(emailFormat)) {
        document.getElementById("spanEmail").textContent = "Email ID should be in proper format.";
        valid = false;
    }

    // Date of Joining validation
    let dateRegex = /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-\d{4}$/;
    if (!dateOfJoining.match(dateRegex)) {
        document.getElementById("spanDateOfJoining").textContent = "Date of joining should be in dd-mm-yyyy format.";
        valid = false;
    }

    // Contact Number validation
    let contactNumberFormat = /^\d{10}$/;
    if (!contactNumber.match(contactNumberFormat)) {
        document.getElementById("spanContactNumber").textContent = "Contact Number should be 10 digits long.";
        valid = false;
    }

    return valid;
}
</script>

</body>
</html>
