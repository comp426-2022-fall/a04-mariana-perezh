import roll from './lib/roll.js';

import express from 'express';
const app = express();

import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

var port = 5000;
if(args.port) {
	port = args.port;
}

var sides = 6;
var dice = 2;
var rolls = 1;

app.get('/app/', (req, res) => {
	res.send("200 OK");
})

app.use('/app/roll/', (req, res, next) => {
	res.send(roll(sides, dice, rolls)).end();
})

app.get('/app/roll/:sides', (req, res, next) => {
	sides = parseInt(req.params.sides);
	res.send(roll(sides, dice, rolls)).end();
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
	sides = parseInt(req.params.sides);
	dice = parseInt(req.params.dice);
	res.send(roll(sides, dice, rolls)).end();
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	sides = parseInt(req.params.sides);
	dice = parseInt(req.params.dice);
	rolls = parseInt(req.params.rolls);
	res.send(roll(sides, dice, rolls)).end();
})

app.use((req, res) => {
	res.status(404).send("404 NOT FOUND").end();
})

app.listen(port);
