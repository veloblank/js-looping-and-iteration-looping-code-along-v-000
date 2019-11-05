function writeCards(array, event) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(
			`Thank you, ${array[i]}, for the wonderful ${event} gift!`
		);
	}
	return newArray;
}

function countdown(integer) {
	while (integer >= 0) {
		console.log(integer--);
	}
}
