const { exec } = require('child_process');
const promisify = require('util').promisify;
const fs = require('fs');
const path = require('path');
const execPromise = promisify(exec);
const process = require('process');
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
async function init(appName, installDeps) {
  const useCurrentDirectory = appName === '';
  const appDirectory = useCurrentDirectory ? './' : await path.resolve(appName);

  appName = appName ? appName : currentDirectoryName;

  console.log(chalk.bold(`Generating app "${appName}"`));

  updateContents(appName);

  try {
    await copyDirectoryFiles(appName, useCurrentDirectory, appDirectory);
    await initializeGit(appName, useCurrentDirectory);

    if (installDeps) {
      await installDependencies('backend', appDirectory);
      await installDependencies('frontend', appDirectory);
    }

    done(appName);
  } catch(err) {
    errorHandler(err);
  }
}


/**
 * Update Contents
 */
function updateContents(name) {
  const data = JSON.parse(fs.readFileSync(`${sourcePath}/package.json`, 'utf-8'));
  const update = prettier.format(JSON.stringify({...data, name }), { parser: 'json' });

  fs.writeFileSync(`${sourcePath}/package.json`, update);
  console.log(chalk.green('✔'), `${chalk.green('UPDATE')} package.json`);

  fs.writeFileSync(`${sourcePath}/README.md`, `# ${name}`);
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
    await mkdirp(appName);
    await copyFiles(appDirectory);
  }

  status.succeed(`${chalk.green('SETUP')} Backend and Frontend Architecture`)
}


/**
 *  Copy Files
 *
 *  @param appDirectory
 */
async function copyFiles(appDirectory) {
  const copy = promisify(ncp);

  return await copy(sourcePath, appDirectory)
    .catch(err => errorHandler(err));
}


/**
 * Install dependencies
 */
async function installDependencies(type, appDirectory) {
  const status = spinner(`Installing ${type} dependencies`).start();
  const cmd = type === 'backend'
    ? 'npm install'
    : 'cd public/app && npm install';

  return await execPromise(`cd ${appDirectory} && ${cmd}`)
    .then(
      () => status.succeed(`${chalk.green('INSTALLED')} ${type} dependencies`),
      err => errorHandler(err)
    );
}


/**
 * Initialize Git
 */
async function initializeGit(appName, useCurrentDirectory) {
  const location = useCurrentDirectory ? './' : appName;

  await execPromise(`cd ${location} && git init`, { silent: true, async: true })
    .then(
      () => console.log(chalk.green('✔'), `${chalk.green('INITIALIZED')} Git`),
      err => errorHandler(err)
    );
}


/**
 * Error Exit
 */
function errorHandler(err) {
  console.error('\n', chalk.red(err));
  process.exit(1);
}


/**
 * Success
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
