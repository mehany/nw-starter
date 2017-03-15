# nw-starter


{
  "name": "AutomatedTesting",
  "private": true,
  "version": "1.0.0",
  "description": "Automated Testing for TS",
  "keywords": [],
  "repository": "https://github.com/nightwatchjs/nightwatch",
  "author": "emehany",
  "dependencies": {
    "chromedriver": "^2.23.1",
    "deepmerge": "^1.1.0",
    "directory-tree": "^1.1.1",
    "easyimage": "^2.1.0",
    "electron-prebuilt": "^1.3.4",
    "exec": "^0.2.1",
    "fs-extra": "^0.30.0",
    "http-server": "^0.6.1",
    "merge": "^1.2.0",
    "moment": "^2.15.1",
    "mustache": "^2.2.1",
    "mysql": "github:mysqljs/mysql",
    "ncp": "^2.0.0",
    "nightwatch": "^0.9.8",
    "nightwatch-custom-commands-assertions": "^1.0.5",
    "node-simple-router": "^0.10.0",
    "node-static": "^0.7.8",
    "nodemailer": "^2.6.4",
    "pagination": "^0.4.4",
    "path": "^0.12.7",
    "phantomjs": "^2.1.3",
    "require-all": "^2.0.0",
    "require-directory": "^2.0.0",
    "sails": "^0.12.4",
    "selenium-server": "^2.53.1",
    "sessionstorage": "0.0.1",
    "sqlite3": "^3.1.4",
    "testarmada-nightwatch-extra": "^2.0.0",
    "underscore": "^1.8.3",
    "yargs": "1.3.2"
  },
  "devDependencies": {
    "iedriver": "^2.53.1"
  },
  "scripts": {
    "postinstall": "cp -r ./node_modules/nightwatch-custom-commands-assertions/js/* ./tests/commands && cp -r ./tests/commands/custom/* ./tests/commands/commands/"
  }
}
