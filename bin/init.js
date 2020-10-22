const { exec } = require('child_process');
const execPromise = require('util').promisify(exec);
const process = require('process');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const ncp = require('ncp').ncp;
const prettier = require('prettier');
const chalk = require('chalk');
const spinner = require('ora');
const boxen = require('boxen');

const currentDirectoryName = path.basename(path.resolve());
const sourcePath = path.join(__dirname, '..', 'source');


/**
 * Initialize Generation of Directories and Files
 */
async function init(appName) {
  const useCurrentDirectory = appName === '';
  appName = appName ? appName : currentDirectoryName;

  console.log(chalk.bold(`Generating app "${appName}"`));

  updateContents(appName);

  await copyDirectoryFiles(appName, useCurrentDirectory);
  await installDependencies('backend');
  await installDependencies('frontend');
  await initializeGit(appName);

  done();
}


/**
 * Update Contents
 */
function updateContents(name) {
  const data = JSON.parse(fs.readFileSync(`${sourcePath}/package.json`, 'utf-8'));
  const update = prettier.format(JSON.stringify({...data, name }), { parser: 'json' });

  fs.writeFileSync(`${sourcePath}/package.json`, update);
  console.log(chalk.green('✔'), 'UPDATE package.json');

  fs.writeFileSync(`${sourcePath}/README.md`, `# ${name}`);
  console.log(chalk.green('✔'), 'UPDATE README.md');
}


/**
 * Copy Directory and Files
 *
 * @param appName
 * @param useCurrentDirectory
 * @returns {Promise<void>}
 */
async function copyDirectoryFiles(appName, useCurrentDirectory) {
  const appDirectory = useCurrentDirectory ? './' : await path.resolve(appName);

  if (useCurrentDirectory) copyFiles(appDirectory);
  else {
    await mkdirp(appName);
    copyFiles(appDirectory);
  }

  console.log(chalk.green('✔'), 'SETUP Backend and Frontend Architecture');
}


/**
 *  Copy Files
 *
 *  @param appDirectory
 */
function copyFiles(appDirectory) {
  ncp(sourcePath, appDirectory, errorHandler);
}


/**
 * Install dependencies
 */
async function installDependencies(type) {
  const status = spinner(`Installing ${type} dependencies`).start();
  const cmd = type === 'backend'
    ? 'npm install'
    : 'cd public/app && npm install';

  return await execPromise(`cd ${sourcePath} && ${cmd}`)
    .then(
      () => status.succeed(`INSTALLED ${type} dependencies`),
      errorHandler
    );
}


/**
 * Initialize Git
 */
async function initializeGit(appName) {
  await execPromise(`cd ${appName} && git init`, { silent: true, async: true })
    .then(
      () => console.log(chalk.green('✔'), 'INITIALIZED Git'),
      errorHandler
    );
}


/**
 * Error Exit
 */
function errorHandler(err) {
  console.error(chalk.red(err));
  process.exit(1);
}


/**
 * Success
 */
function done() {
  const styles = {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'green',
    align: 'center'
  };

  console.log(boxen(`${chalk.bold('NGX EXPRESS TYPESCRIPT STARTER')} \n ${chalk.green('Project Ready!')}`, styles));

  process.exit();
}


module.exports = init;
