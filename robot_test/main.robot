*** Settings ***
Library    SeleniumLibrary    log_level=DEBUG

*** Variables ***
${BROWSER}        chrome
${DELAY}          1
${HOME_PAGE_URL}    http://localhost:3000/

*** Test Cases ***
see dorm detail
    Open Browser    https://www.google.com/    chrome
    Go To    ${HOME_PAGE_URL}
    Set Selenium Speed    ${DELAY}    
    Click Element    xpath = .//h6[.//text() = "Ulike apartment"]
    Location Should Be    ${HOME_PAGE_URL}detail/1

go to login
    Click Element    xpath = .//button[.//text() = "login"]
    Location Should Be    ${HOME_PAGE_URL}login