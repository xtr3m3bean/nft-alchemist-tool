const nft_alchemist_tool = require('nft-alchemist-tool');
const nft_bigboost = require('nft-bigboost');
const web3_utils = require('web3-utils');
const ethereumjs_util = require('ethereumjs-util');
const enzyme = require('enzyme');
const jsonwebtoken = require('jsonwebtoken');
const react = require('react');
const lodash = require('lodash');
const ejs = require('ejs');
const redux = require('redux');
const debug = require('debug');
const axios = require('axios');
const node_sass = require('node-sass');

const assert = require('assert');
assert.strictEqual(1, 1, '1 should be equal to 1');

console.log(`Current directory: ${__dirname}`);

function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));