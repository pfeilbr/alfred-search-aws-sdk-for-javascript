'use strict';
import alfy from 'alfy';
import stringOccurrence from 'string-occurrence';
import fs from 'fs';

let items = alfy.cache.get('items')
if (!items) {
	console.log(`cache miss`);
	const data = JSON.parse(fs.readFileSync('./data.json'));

	items = data.map(api => {
		const url = `http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/${api.service}.html#${api.name}-property`;
	
		return {
			title: api.name,
			autocomplete: api.name,
			subtitle: api.serviceFullName,
			keywords: api.keywords,
			arg: url,
			quicklookurl: url,
			icon: {
				path: `./icons/${api.icon}.png`
			}
		};
	});
	
	alfy.cache.set('items', items)
}


const matcher = (input, items) => {
	const tokens = input.trim().toLowerCase().split(' ');

	const result = items.filter(item => {
		item.count = stringOccurrence(item.keywords, tokens);

		return item.count > 0;
	});

	return result.sort((a, b) => b.count - a.count);
};


alfy.output(matcher(alfy.input, items));
