$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/login2.feature");
formatter.feature({
  "line": 1,
  "name": "Fb login Feature",
  "description": "",
  "id": "fb-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Fb login Test with Example",
  "description": "",
  "id": "fb-login-feature;fb-login-test-with-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
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
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "fb-login-feature;fb-login-test-with-example;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "fb-login-feature;fb-login-test-with-example;;1"
    },
    {
      "cells": [
        "7978662404",
        "7978662404"
      ],
      "line": 13,
      "id": "fb-login-feature;fb-login-test-with-example;;2"
    },
    {
      "cells": [
        "SAILENDRA",
        "WRONG PASSWORD"
      ],
      "line": 14,
      "id": "fb-login-feature;fb-login-test-with-example;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Fb login Test with Example",
  "description": "",
  "id": "fb-login-feature;fb-login-test-with-example;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"7978662404\" and \"7978662404\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 4436627600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.tittle_of_login_page_is_Facebook()"
});
formatter.result({
  "duration": 5011400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7978662404",
      "offset": 13
    },
    {
      "val": "7978662404",
      "offset": 30
    }
  ],
  "location": "LoginStepdefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 150823900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 53188800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 125660200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Fb login Test with Example",
  "description": "",
  "id": "fb-login-feature;fb-login-test-with-example;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"SAILENDRA\" and \"WRONG PASSWORD\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 3586350400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.tittle_of_login_page_is_Facebook()"
});
formatter.result({
  "duration": 6883000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SAILENDRA",
      "offset": 13
    },
    {
      "val": "WRONG PASSWORD",
      "offset": 29
    }
  ],
  "location": "LoginStepdefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 138161100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 49206700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 4075610100,
  "status": "passed"
});
});