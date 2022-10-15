/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

//Allure report integration
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};


// Visual testing with Cypress plugin
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  initPlugin(on, config);
  on("task", {
   // percyHealthCheck: percyHealthCheck,
    noparam: noparam,
    singleParam: singleParam,
    multipleParam: multipleParam,
    generateJSONFromExcel: generateJSONFromExcel,
    getDBDataSync: getDBDataSync,
    getDBDataAsync: getDBDataAsync,
  });
  return config;
};

// Task with no params
function noparam() {
  console.log("No Params");
  return "OK";
}

// With Param - Single Arg
function singleParam(message) {
  console.log(message);
  return "OK";
}

// With Param - Multiple Args
function multipleParam(obj) {
  console.log(`Hello ${obj.name}, you are ${obj.age} years old`);
  return "OK";
}

// Excel To JSON
function generateJSONFromExcel(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
  const ws = wb.Sheets[agrs.sheetName];
  return xlsx.utils.sheet_to_json(ws, { raw: false });
}

function getDBDataSync() {
  const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "node-conn",
  };
  const query = "select * from users";
  return syncSql.mysql(config, query).data.rows;
}

function getDBDataAsync() {
  const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "node-conn",
  };
  const query = "select * from users";
  let con = mysql.createConnection(config);
  return new Promise((resolve, reject) => {
    con.connect(function(err) {
      if (err) throw err;
      con.query(query, (err, result) => {
        con.end();
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  });
}