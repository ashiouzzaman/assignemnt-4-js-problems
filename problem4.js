// Problem 04 : Make A Great Password

function password(obj) {
	if (
		obj.hasOwnProperty("name") == false ||
		obj.hasOwnProperty("birthYear") == false ||
		obj.hasOwnProperty("siteName") == false ||
		obj.birthYear.toString().length < 4
	) {
		return "invalid";
	} else {
		// Capitalizing the first word
		const firstLetter = obj.siteName.charAt(0).toUpperCase();
		const remainingLetters = obj.siteName.slice(1).toLowerCase();
		const capitalizedSiteName = firstLetter + remainingLetters;
		return capitalizedSiteName + "#" + obj.name + "@" + obj.birthYear;
	}
}


// Calling the function
let myObj = {
	name: "Real",
	birthYear: 1999,
	siteName: "thriveZesta",
};

console.log(password(myObj));
