// Problem-01 : Help The Zoo Manager

function calculateMoney(ticketSale) {
	if(ticketSale < 0){
        return "Invalid number"; 
    }else{
        let total = 120 * ticketSale - (500 + 8 * 50);
        return total;
    }
}


// Calling function 
console.log(calculateMoney(-103120))