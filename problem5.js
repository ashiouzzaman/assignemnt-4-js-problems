// Problem 05 : Monthly Savings of a Freelancer

function monthlySavings(arr, livingCost) {
	if (Array.isArray(arr) == false || typeof livingCost !== "number") {
		return "invalid input";
	} else {
		let totalEarning = 0;
		let totalSavings = 0;
		for (let a of arr) {
			if (a >= 3000) {
				let tax = (20 / 100) * a;
				totalEarning += a - tax;
			} else {
				totalEarning += a;
			}
		}

		totalSavings = totalEarning - livingCost;
		if (totalSavings >= 0) {
			return totalSavings;
		} else {
			return "earn more";
		}
	}
}

// Calling the function
console.log(monthlySavings([900, 2700, 3400], 10000))
