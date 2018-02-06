var webdriver = require('selenium-webdriver');
var $browser = new webdriver.Builder().forBrowser('chrome').build();
var $driver = webdriver;
var until = webdriver.until;
var assert = require('assert');
var By = $driver.By;
$browser.manage();

$browser.get('https://www.google.com').then(function(){
  return $browser.wait(100);
})
