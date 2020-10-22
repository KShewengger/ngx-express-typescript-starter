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
    },
    installDeps: {
      describe: 'Install dependencies on both frontend and backend',
      default: true
    }
  },
  handler: async ({ appName, installDeps }) => await init(appName, installDeps)
});


yargs.parse();
