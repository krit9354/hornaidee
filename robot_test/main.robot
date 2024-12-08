*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}        chrome
${DELAY}          1
${HOME_PAGE_URL}    http://localhost:3000/

*** Test Cases ***
see dorm detail
    Set Selenium Speed    ${DELAY}
    Open Browser    ${HOME_PAGE_URL}    ${BROWSER}
    Click Element    xpath = .//h6[.//text() = "Ulike apartment"]
    Location Should Be    ${HOME_PAGE_URL}detail/1

go to login
    Click Element    xpath = .//button[.//text() = "login"]
    Location Should Be    ${HOME_PAGE_URL}login