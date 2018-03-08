//build
var webdriver = require('selenium-webdriver');
var $browser = new webdriver.Builder().forBrowser('chrome').build();
var $driver = webdriver;
var until = webdriver.until;
var By = $driver.By;
$browser.manage().window().maximize();
//end build

//Helpers
var scrollTo = function(selector){
  var element = $browser.findElement(selector);
  $browser.executeScript("arguments[0].scrollIntoView()", element);
};

var wait = function(time){
  $browser.sleep(time * 4000);
};
//end Helpers

//List of States + State Randomizer!!

var states = ["Oklahoma", "Texas", "Kansas", "Arkansas"];

randomState = states[Math.floor(Math.random() * states.length) | 0];

//end States + Randomizer


$browser.get('https://www.legalshield.com').then(function(){
return wait(1);
}).then(function(){
 return $browser.findElement(By.linkText('GET STARTED TODAY')).click();
}).then(function(){
 return wait(1);
}).then(function(){
  return $browser.findElement(By.css('#select_1')).sendKeys(randomState);
}).then(function(){
  return wait(1);
}).then(function(){
  return $browser.findElement(By.css('button.ge-btn--action:nth-child(2)')).click()
}).then(function(){
  return wait(1);
}).then(function(){
  return console.log(randomState);
});
