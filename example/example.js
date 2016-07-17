var format = require('../');

var clippings = [
	{
		title: 'Lords of the Housetops / Thirteen Cat Tales',
		highlights: [
			{
				text: "\"But life would not be worth living without a cat!\" she wailed."
			}
		]
	},
	{
		title: 'The Importance of Being Earnest (Oscar Wilde)',
		highlights: [
			{
				text: "When one is in town one amuses oneself.  When one is in the country one amuses other people.  It is excessively boring."
			},
{
			text: "I never travel without my diary.  One should always have something sensational to read in the train."
			},
		]
	}
];

var output = format(clippings);
console.log(output);
