var webdriver = require('selenium-webdriver');
var $browser = new webdriver.Builder().forBrowser('chrome').build();
var $driver = webdriver;
var until = webdriver.until;
var assert = require('assert');
var By = $driver.By;
$browser.manage().window().maximize();

//helpers

var scrollTo = function(selector){
  var element = $browser.findElement(selector);
  $browser.executeScript("arguments[0].scrollIntoView()", element);
};

//end helpers

$browser.get('https://www.legalshield.com').then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.findElement(By.linkText('Personal')).click();
}).then(function(){
  return scrollTo(By.css('.panel-info > h3:nth-child(1)'));
}).then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.quit();
});
