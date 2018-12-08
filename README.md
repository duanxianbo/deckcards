# deckCards

this project use react + redux + material-ui to build a pure ui one page web application

the project is deployed on https://deck-cards.herokuapp.com/

the user can shuffle all cards or deal one card

the developer can do 'npm run' with fowllowing commands:
  * test: test the application
  * test:debug: debug the test
  * start: launch the application in production mode
  * start:dev: develop the application with a webpack dev server
  * build: build the application

## project structures(src)
* \__tests__: all test files
  * snapshots: test snapshots files to compare with the next test execution
* actions: redux actions, including action types
* cards: all components related to cards
* reducers: redux reducers
* App: layout component
* config: constant variables
* index.html: the html template
* index.js: entry of the project
* service.js: core service to shuffle or deal one cardsDeck
* setupTest: config file to set up the jest with enzyme
* store.js: create store
