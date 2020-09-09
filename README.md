
## SpaceX Command Center
[https://spacex-command-center.netlify.app/](https://spacex-command-center.netlify.app/)  
A SpaceX info site built with Command Center UI style. More development will come in the future.

## Motivation
Made for a technical interview. I also really like to try out some of the APIs and have a single pages with loads of APIs. An API fest if you will. I also want to practice with Thunk and Redux.

## Getting Started
These instructions will guild you through the inital setting up process and 
highlight what the apps can do for you to explore on your own.  


## Notable feature
- Tons of APIs: weather, stocks, job, SpaceX info, geocoding, video, social media. 
- SpaceX API
- Stock API (coming soon)
- Weather API
- Job API - adzula
- Arcgis API
- Youtube API
- Quiz API 
- Reddit API
- Twitter API (coming soon)


## Prequesite
Nodejs installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  
Netlify set up if you would like to continuous deploy and host your own client side app
check out Netlify instruction [here](https://www.netlify.com/)  
Or you use any other hostin site, including github page (the site is static anyway)


## Installing and Running
Clone the repo
```
$ git clone https://github.com/zahego/Covid-Tracker-19.git
```
Run Node command to create node_modules folder from the information in package.json, which hold all the necessary dependencies
```
$ npm install
```
Run Node command for local testing
```
$ npm start
```

## Deploying on Netlify
access the client folder  
create a prouction build of the app
```
$ yarn build
```
install Netlify on your local repo
```
$ npm install netlify-cli -g
```
login to your Netlify account
```
$ netlify login
```
start the deploy process
```
$ netlify deploy
```
choose the option to Create and Config a new site  
change the site name to your preference  
set the deploy path to   
```
$ ./build
```



## What you can do
- Check out the countdown and info of the upcoming launch
- Search for SpaceX launches and rockets
- Search for more SpaceX info (coming soon)
- Watch video about SpaceX
- Check SpaceX stocks
- Look for some job at spaceX
- Play around with the map and geocoding
- Read some social media content
- Answer some quiz (coming soon)
- Read Blogs (coming soon)

## Future Content
- More sections (each API content will have a section)
- Better UI rendering
- Firebase incorporation
- Medical API perhaps? Also insurance and plane API
- Music auto play upon opening the page
- Testing


## Technologies stack
- [React](https://reactjs.org/) - framework
- [react-redux](https://react-redux.js.org/) - state management with flux design pattern
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - help reducer stay as a pure function and do side effect logic from outside
- [Material-UI] - a react framework that provides beautiful components
- [firebase](https://firebase.google.com/docs) -handling back end and authentication(coming soon)
- [mocha-chai] -testing framework (coming soon)


## Contributors
Minh Tran 


## License
This project is licensed under the MIT License

## Challenges and resolutions
- Hosting on netlify. For some reason, all my warning is turned into error and to run this, no warning must exist.
- SpaceX API doesnt provide search function so I work around this by using normal HTTP get command and compare the searched term with data from get. Not too optimize but it works :))
- Thunk gives me a lot of issues. But at least I'm more used to redux and thunk now.
- Page loaded over HTTPS but requested an insecure XMLHttpRequest endpoint. I haven't resolved this but I'm thinking of using firebase. 
