/**
 * 
 */
//An example configuration file.
var Jasmine2HtmlReporter = require('C:\\Users\\TEMP.TRNROOM10-04.000\\AppData\\Roaming\\npm\\node_modules\\protractor-jasmine2-html-reporter');
exports.config = {
		//seleniumAddress: 'http://127.0.0.1:4444/wd/hub',    // for this, execute "webdriver-manager start" to start selenium server. Reqd for IE
//		SELENIUM_PROMISE_MANAGER: true, //for Non-angular apps or for Angular apps when using async and await, disable the deprecated Selenium promise manager 
		directConnect: true,

		// Capabilities to be passed to the webdriver instance.		
		capabilities: {
			'browserName': 'chrome',
			'platform': 'ANY',
			'version': '77',
		},
		/*capabilities:	{
			'browserName': 'firefox',
			'platform': 'ANY',
			'version': '69',
		},*/
/*		capabilities: {
			'browserName': 'internet explorer',
			'platform': 'ANY',
			'version': '11'
		},*/

		//parallel execution on same browser on same m/c
		/*capabilities: {
			'browserName': 'chrome',
			'platform': 'ANY',
			'version': '77',
			'shardTestFiles': true,
			'maxInstances': 2
		},*/


		// Framework to use. Jasmine is recommended.
		framework: 'jasmine',

//		 Spec patterns are relative to the current working directory when protractor is called.
//		specs: ['NonAngularApps/javadocs_spec.js','NonAngularApps/userActions_spec.js'],
//		specs:['AngularApps/autosuggest_spec.js','AngularApps/dataDriven_spec.js','AngularApps/example_spec.js'],
//		specs: ['AngularApps/autoSuggest_spec.js','AngularApps/dataDriven_spec.js'],
//		specs:['NonAngularApps/userActions_spec.js'],
//		specs:['AngularApps/demo_spec.js'],
//		specs:['AngularApps/autoSuggest_spec.js'],
//		specs:['AngularApps/dataDriven_spec.js'],
//		specs:['AngularApps/falsePromise_spec.js'],
		specs:['PageObjects/demo_spec.js'],
//		specs:['NonAngularApps/nonAngularDemo_spec.js'],
//		specs:['PageObjects/testRun.js'],
//		specs:['Jetblue/Booking_spec.js'],

		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			showColors: true,
			defaultTimeoutInterval: 90000 // for 'it' blocks , defaults to 30secs
		},
		allScriptsTimeout: 90000, // default 11 secs
		getPageTimeout: 90000, // default 10 secs
		// from https://www.npmjs.com/package/protractor-jasmine2-html-reporter
		onPrepare: function() {
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						fileName: 'TestReport', //Default is htmlReport
						savePath: './Reports/',
						screenshotsFolder: 'screenshots',
						takeScreenshots: true,  // default true
						takeScreenshotsOnlyOnFailures: false,  // generate screenshot for failed cases,(default false)
						fixedScreenshotName: true,  //default false
						fileNamePrefix: '',
						fileNameSuffix: '',
						fileNameDateSuffix: true, // The format is: YYYYMMDD HHMMSS,MILL   , default false
						cleanDestination: true  //will delete the reports or screenshots before each test run, default true						
					})
			);
		}
};
