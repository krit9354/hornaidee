*** Settings ***
Library    SeleniumLibrary
*** Variables ***
${BROWSER}        chrome
${DELAY}          1
${HOME_PAGE_URL}    http://localhost:3000/

*** Test Cases ***
open chrome
    Open Browser    https://www.google.com/    chrome
    Set Selenium Speed    ${DELAY}   

# see dorm detail
#     Go To    ${HOME_PAGE_URL}
#     Click Element    xpath = .//h6[.//text() = "Ulike apartment"]
#     Location Should Be    ${HOME_PAGE_URL}detail/1

# go to login
#     Click Element    xpath = .//button[.//text() = "login"]
#     Location Should Be    ${HOME_PAGE_URL}login