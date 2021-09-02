class CreditCard {
	constructor(number) {
		number = Math.floor(number);
		// Check if bigger than 16 digits
		if (number > 10000000000000000) {
			throw "Card number too big";
		}
		this.number = number;
		this.numberString = number.toString()
		let tempdigits = [];
		for (let i = 0; i < 16; i++) {
			if (this.numberString.charAt(i) == "") {
				tempdigits[i] = 0
			} else {
				tempdigits[i] = parseInt(this.numberString.charAt(i));
			}
		}
		this.digits = tempdigits
	}
	checksum() {
		let checkdigits = [];
		let sum = 0;
		for (var i = this.digits.length - 1; i >= 0; i--) {
			if (i % 2 == 1) {
				checkdigits[i] = this.digits[i] * 2;
			} else {
				checkdigits[i] = this.digits[i];
			}
			if (checkdigits[i] > 9) {
				checkdigits[i] = parseInt(checkdigits[i].toString().charAt(0)) + parseInt(checkdigits[i].toString().charAt(1));
			}
			sum += checkdigits[i]
		}
		let output = false;
		if (sum % 10 == 0 && sum !== 0) {
			output = true;
		}
		return output;
	}
}

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question("Please enter the card number: ", num => {
	creditcard = new CreditCard(num);
	console.log(creditcard.checksum());
	readline.close()
})