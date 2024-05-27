Feature: Login Action
    Description: This feature will test a LogIn and LogOut functionality

  Scenario: Login with valid Credentials
    Given User enters sauce website <URL>
    When User navigate to Login Page
    Then User enters "<username>" and "<password>"
    And User Clicks on Login button
    Then Home page is displayed Successfully

    Examples:
      | username      | password | URL                        |
      | abc@gmail.com |    12345 | https://www.saucedemo.com/ |
