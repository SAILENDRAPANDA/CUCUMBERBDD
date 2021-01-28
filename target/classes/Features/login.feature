Feature: Fb login Feature

Scenario: Fb login Test

Given user is already on fb login page
When tittle of login page is Facebook
Then user enters username and password
Then user click on login button
Then user is on homepage