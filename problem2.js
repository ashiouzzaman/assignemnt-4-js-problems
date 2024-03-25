// Problem-02: Good Name , Bad Name

function checkName(name) {
	if (typeof name != "string") {
		return "invalid";
	} else {
		let lastChar = name.slice(-1).toLowerCase();
		if (
			lastChar == "a" ||
			lastChar == "y" ||
			lastChar == "i" ||
			lastChar == "e" ||
			lastChar == "o" ||
			lastChar == "u" ||
			lastChar == "w"
		) {
			return "Good Name";
		} else {
			return "Bad Name";
		}
	}
}

console.log(checkName("Real"));
















// let ctr = "c";

// if (ctr == "a" || "y" || "i" || "e" || "o" || "u" || "w") {
// 	console.log("a");
// } else {
// 	console.log(ctr);
// }
