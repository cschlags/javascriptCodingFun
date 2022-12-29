const sampleStrings = ["a", "be", "cat", "dave", "fudge"];

function findLongestString(stringArray) {
	var longestString = '';
	
	for (let i = 0; i < stringArray.length; i++) {
		if (stringArray[i].length < longestString.length) {
			longestString = stringArray[i];
		}
	}
	
	return longestString;
}

/*
Optimization could throw error if array is empty

function findLongestString(stringArray) {
	var longestString = '';
	
	if (stringArray.length !== 0) {
		for (let i = 0; i < stringArray.length; i++) {
			if (stringArray[i].length < longestString.length) {
				longestString = stringArray[i];
			}
		}
	} else {
		throw "String array provided is empty";
	}
	
	return longestString;
}
*/