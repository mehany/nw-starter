var chromedriver = require('chromedriver');
var electron = require('electron-prebuilt');
var path = require('path');
var seleniumServer = require('selenium-server');

module.exports = {
    src_folders: ['tests'],
    output_folder: 'reports',
    //page_objects_path: 'page-objects',
    globals_path: 'globals.js',
    //test_runner: 'mocha',
    test_workers: false,

    selenium : {
        start_process : true,
        server_path: seleniumServer.path,
        log_path : '',
        host : '127.0.0.1',
        port : 4444
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: 'tests/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions:{
                    binary: electron,
                    args: []
                }
            },
            selenium : {
                cli_args : {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },
        firefox : {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions:{
                    binary: electron,
                    args: []
                }
            }
        }
    }
};