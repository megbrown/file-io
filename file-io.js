"use strict";

const { readFileSync } = require("fs");

const fileInput = process.argv[2];

if(fileInput) {
	try {
		const language = readFileSync(`${fileInput}`);
		process.stdout.write(language);
	} catch(err) {
		console.log('Error', err.stack);
		}
	} else {
		 process.exit();
}


