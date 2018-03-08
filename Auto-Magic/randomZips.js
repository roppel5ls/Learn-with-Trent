//build
var webdriver = require('selenium-webdriver');
var $browser = new webdriver.Builder().forBrowser('chrome').build();
var $driver = webdriver;
var until = webdriver.until;
var assert = require('assert');
var By = $driver.By;
var Q = require('q');
$browser.manage().window().maximize();
//end build

//Helpers
var scrollTo = function(selector){
  var element = $browser.findElement(selector);
  $browser.executeScript("arguments[0].scrollIntoView()", element);
};
//end Helpers

//List of Zip Codes + Zip Code Randomizer!!

var zips = ["74820", "74868", "74572"];

//var randomZips = zips[Math.floor(Math.random() * zips.length) | 0];

//end Zip Codes + Randomizer
zips.forEach(function(zip){
  $browser.get('https://www.legalshield.com').then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return scrollTo(By.css('.media-container'));
}).then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.findElement(By.css('a.btn-row:nth-child(1)')).click();
}).then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.findElement(By.css('#find-associate-zip-code')).sendKeys(zip);
}).then(function(){
  return $browser.findElement(By.css('#find-associate-button')).click();
}).then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return console.log(zip);
})
})
