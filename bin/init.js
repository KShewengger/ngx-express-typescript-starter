const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const ncp = require('ncp').ncp;

const sourcePath = path.join(__dirname, '..', 'source');


/**
 * Initialize Generation of Directories and Files
 */
async function init(appName, useCurrentDirectory) {
  console.log(chalk.bgYellow.whiteBright(`Generating App "${appName}..."`));

  updateContents(appName);
  await generateDirectoryFiles(appName, useCurrentDirectory);
}

/**
 * Update Contents
 */
function updateContents(name) {
  const data = JSON.parse(fs.readFileSync(`${sourcePath}/package.json`, 'utf-8'));
  const update = JSON.stringify({...data, name });

  fs.writeFileSync(`${sourcePath}/package.json`, update);
  fs.writeFileSync(`${sourcePath}/README.md`, `# ${name}`);
}

/**
 * Generate Directory and Files
 *
 * @param appName
 * @param useCurrentDirectory
 * @returns {Promise<void>}
 */
async function generateDirectoryFiles(appName, useCurrentDirectory) {
  const appDirectory = useCurrentDirectory ? './' : await path.resolve(appName);

  if (useCurrentDirectory) copyFiles(appDirectory);
  else {
    await mkdirp(appName);
    copyFiles(appDirectory);
  }
}

/**
 *  Copy Files
 *
 *  @param appDirectory
 */
function copyFiles(appDirectory) {
  ncp(sourcePath, appDirectory, err => {
    if (err) console.error(chalk.bgRed.whiteBright(err));
    else console.log(chalk.bgGreen.whiteBright('Done!'));
  });
}



module.exports = init;
