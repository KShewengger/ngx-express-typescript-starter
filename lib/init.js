const exec = require('child_process').exec;
const promisify = require('util').promisify;
const fs = require('fs');
const path = require('path');
const process = require('process');
const mkdirp = require('mkdirp');
const ncp = require('ncp').ncp;
const prettier = require('prettier');
const chalk = require('chalk');
const spinner = require('ora');
const boxen = require('boxen');
const handler = require('./handler');

const execPromise = promisify(exec);

const currentDirectoryName = path.basename(path.resolve());
const sourcePath = path.join(__dirname, '..', 'source');


/**
 * Initialize Generation of Directories and Files
 *
 * @param appName
 * @param installDeps
 * @returns {Promise<void>}
 */
async function init(appName, installDeps) {
  const useCurrentDirectory = appName === '';
  const appDirectory = useCurrentDirectory ? './' : await path.resolve(appName);

  appName = appName ? appName : currentDirectoryName;

  console.log(chalk.bold(`Generating app "${appName}"`));

  let promises = [
    [ copyDirectoryFiles, [ appName, useCurrentDirectory, appDirectory ] ],
    [ initializeGit, [ appName, useCurrentDirectory ] ]
  ];

  if (installDeps) {
    promises = [
      ...promises,
      [ installDependencies, [ 'backend', appDirectory ] ],
      [ installDependencies, ['frontend', appDirectory ] ]
    ]
  }

  await handler
    .multipleAsyncHandler(promises)
    .then(() => updateContents(appName, appDirectory))
    .catch(err => handler.errorHandler(err));

  done(appName);
}


/**
 * Update Contents
 *
 * @param name
 * @param appDirectory
 */
function updateContents(name, appDirectory) {
  const data = JSON.parse(fs.readFileSync(`${sourcePath}/package.json`, 'utf-8'));
  const update = prettier.format(JSON.stringify({...data, name }), { parser: 'json' });

  fs.writeFileSync(`${appDirectory}/package.json`, update);
  console.log(chalk.green('✔'), `${chalk.green('UPDATE')} package.json`);

  fs.writeFileSync(`${appDirectory}/README.md`, `# ${name}`);
  console.log(chalk.green('✔'), `${chalk.green('UPDATE')} README.md`);
}


/**
 * Copy Directory and Files
 *
 * @param appName
 * @param useCurrentDirectory
 * @param appDirectory
 * @returns {Promise<void>}
 */
async function copyDirectoryFiles(appName, useCurrentDirectory, appDirectory) {
  const status = spinner(`${chalk.green('SETUP')} Backend and Frontend Architecture`).start();

  if (useCurrentDirectory) await copyFiles(appDirectory);
  else {
    const promises = [
      [ mkdirp, [ appName ] ],
      [ copyFiles, [ appDirectory ] ]
    ];

    await handler
      .multipleAsyncHandler(promises)
      .catch(err => handler.errorHandler(err));
  }

  status.succeed(`${chalk.green('SETUP')} Backend and Frontend Architecture`)
}


/**
 * Copy Files
 *
 * @param appDirectory
 * @returns {Promise<any>}
 */
async function copyFiles(appDirectory) {
  const copy = promisify(ncp);

  return await copy(sourcePath, appDirectory)
    .catch(err => handler.errorHandler(err));
}


/**
 * Install dependencies
 *
 * @param type
 * @param appDirectory
 * @returns {Promise<any>}
 */
async function installDependencies(type, appDirectory) {
  const status = spinner(`Installing ${type} dependencies`).start();
  const cmd = type === 'backend' ? 'npm install' : 'cd public/app && npm install';

  return await execPromise(`cd ${appDirectory} && ${cmd}`)
    .then(() => status.succeed(`${chalk.green('INSTALLED')} ${type} dependencies`))
    .catch(err => handler.errorHandler(err));
}


/**
 * Initialize Git
 *
 * @param appName
 * @param useCurrentDirectory
 * @returns {Promise<void>}
 */
async function initializeGit(appName, useCurrentDirectory) {
  const location = useCurrentDirectory ? './' : appName;

  await execPromise(`cd ${location} && git init`, { silent: true, async: true })
    .then(() => console.log(chalk.green('✔'), `${chalk.green('INITIALIZED')} Git`))
    .catch(err => handler.errorHandler(err));
}


/**
 * Done
 *
 * @param appName
 */
function done(appName) {
  const styles = {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'green',
    align: 'center'
  };

  console.log(boxen(`${chalk.bold('NGX EXPRESS TYPESCRIPT STARTER')} \n ${chalk.green(`${appName} app is now ready!`)}`, styles));

  process.exit();
}


module.exports = init;
