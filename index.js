module.exports = function formatter(items) {
	
	var html_items = items.map(function(item) {
		var output = '';

		output += '<h2>' + item.title + '</h2>\n';

		output += '<ul>\n';

		item.highlights.forEach(function(h) {
			output += '\t<li>' + h.text + '</li>\n';
		});

		output += '</ul>\n\n';

		return output;

	});

	return html_items.join('<hr>');

};
