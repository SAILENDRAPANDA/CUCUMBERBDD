$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Fb login Feature",
  "description": "",
  "id": "fb-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Fb login Test",
  "description": "",
  "id": "fb-login-feature;fb-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on fb login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "tittle of login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefination.user_is_already_on_fb_login_page()"
});
formatter.result({
  "duration": 15084425500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.tittle_of_login_page_is_Facebook()"
});
formatter.result({
  "duration": 23022000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 679418100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 190558200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 238512200,
  "status": "passed"
});
});