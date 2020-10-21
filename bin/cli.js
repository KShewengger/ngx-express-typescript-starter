#!/usr/bin/env node


const yargs = require('yargs');
const init = require('./init');


yargs.command({
  command: 'generate',
  describe: 'Generate Backend & Frontend Folders & Files',
  builder: {
    appName: {
      describe: `App's Name`,
      type: 'string',
      default: ''
    }
  },
  handler: async ({ appName }) => await init(appName)
});


yargs.parse();
