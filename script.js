//your JS code here. If required.
const userForm = document.getElementById("userForm");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const submitButton = document.getElementById("btn");
userForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const age = ageInput.value;
    const name = nameInput.value;
	if (age >= 18) {
		setTimeout(function () {
			alert(`Welcome, ${name}. You can vote.`);
		}, 4000);
	} else {
		alert(`Oh sorry ${name}. You aren't old enough.`);
	}
});