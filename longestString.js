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