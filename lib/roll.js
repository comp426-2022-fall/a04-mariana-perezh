#!/usr/bin/env node

export default function roll(sides, dice, rolls) {	
	let results = [];

	for (let i=0; i<rolls; i++) {
		let randNum = Math.floor(Math.random() * sides * dice) + 1
		results[i] = randNum;
	}

	let m = {sides: sides, dice: dice, rolls: rolls, results: results};

	return m;
}
