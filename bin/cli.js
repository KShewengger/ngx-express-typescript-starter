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
      demandOption: true
    },
    useCurrentDir: {
      describe: 'Use current directory as the base directory',
      default: false
    }
  },
  handler: async ({ appName, useCurrentDir }) => await init(appName, useCurrentDir)
});


yargs.parse();
