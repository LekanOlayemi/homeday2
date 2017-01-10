module.exports = function(words) {
	
	var result = {};
	var words = words.replace(/[\n\t]/gi, ' ').replace(/ {2,})/g, " ").split(' ');
	words.forEach(function(word) {
		if(object.hasOwnProperty.call(result, word)) {
			result[word] += 1;
		} else {
			result[word] = 1;
		}
	})
	return result;
}