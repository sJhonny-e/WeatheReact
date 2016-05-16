# WeatheReact
My first React app - displays weather in London

##General
The React client connects to a local server to obtain temperatures for today and the next three days, and also the average highs and lows for the last 28 days.  
The server uses a public weather API to obtain current and future weather, and gives fake average values.  
The client then displays the temperatures for the given days, and the difference from the average (if any).  

##Installation
**Prerequisites:** NodeJS (preferrably >= 4.4.0) and NPM installed.  
  
Both server and client projects are bundled together in the same repository, for convenience.  
Install by `cd`ing into each directory and running `npm install`.  

##Tests
Client-side tests can be run from the client directory with `npm test`.  
Unfortunately, due to time constraints, server tests were ommitted.  

##Running
**Server:** run `npm start` in the `server` directory to start the server (defaultly on port 3000).  
**Client:** run `npm start` in the `client` directory to start the webpack dev server with hot-module replacement (defaultly on port 8080).  

##About
###Client
This is a very simple React app based off of [Yet Another React Starter Kit](https://github.com/bradleyboy/yarsk).  
It uses Webpack for bundling and development server, babel for ES2015 transpilation, SASS compilation, Karma as a test runner, and Mocha, Enzyme and Chai for the tests themselves.  
You can find out more by looking at the YARSK Readme file, in the `client` directory.  
  
The main components are -  
* `Application`: Container that handles retrieving data from the server, and creates `DayForecast` children for each day's forecast.  
* `DayForecast`: Receives temperature information for a given day, and displays it, using the sub-component `Temperature` for displaying a single temperature line.  

###Server
A very simple NodeJS Express server, with just a single endpoint: `/api/weather/:location?daysAhead`, which allows the client to query an arbitrary location and receive averages for an arbitrary number of days.  

Nothing there, really - just an HTTP call to the weather API, receiving the returned XML, transforming it to JSON, and picking out the bits that are interesting for our application.  

Historical data is currently faked, but can easily be connected to some SQL database and queried from there (again, time constraints).  

##What can be improved?
In one word - a lot :).  
This is just a proof-of-concept little project; to scale it and make it more maintainable, you'd probably want to do the next steps:  
###General
* Seperate the two directories into separate repositories, OR, create a single npm script to install all dependencies and execute all processes necessary to run the application.  
* Introduce linting (i.e eslint) to both client and server code.  
* Proper error handling - currently both the server and the client don't implement any sort of error catching / handling. Each HTTP request / database access needs to anticipate failure and handle such cases.  

###Server
* Tests - add unit tests for the `WeatherService` and `WeatherRepository` (Mocha and Chai are already included as dependencies, just need to use them!)  
* Database - as mentioned, the fake history repository can be changed to access an actual DB.  

###Client
* Add the option for the user to choose a location and timeframe - this functionality is already implemented by the server; just need to add the options to choose locations and time frames on the client side.  
* Better way to mock dependencies - Currently there's an awkward and ugly way in which we mock the `WeatherRepository` when testing the `Application` component. This needs to change to a less intrusive way of mocking dependency modules.  
* Test the `WeatherRepository` by mocking `$.http`
