Feature: Fb login Feature

Scenario Outline: Fb login Test with Example

Given user is already on fb login page
When tittle of login page is Facebook
Then user enters "<username>" and "<password>"
Then user click on login button
Then user is on homepage

Examples:
| username | password |
| 7978662404 | 7978662404 |
| SAILENDRA | WRONG PASSWORD |
