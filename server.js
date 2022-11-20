import roll from './lib/roll.js';

import express from 'express';
const app = express();

import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

var port = 5000;
if(args.port) {
	port = args.port;
}
