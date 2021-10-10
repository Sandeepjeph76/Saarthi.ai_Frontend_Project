/*eslint strict:0, no-console:0 */
'use strict';
import program from 'commander';
import packageInfo from '../../package.json';

// handle errors
process.on('uncaughtException', function (err) {
  console.error(err.toString());
});

program
  .version(`${packageInfo.name} version ${packageInfo.version}`, '-v, --version')
  .parse(process.argv);

