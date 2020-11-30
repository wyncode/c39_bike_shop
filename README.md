# ![](https://imgur.com/4r2aJcP.png)  ![](https://imgur.com/HeP6HSL.png) 

## Intro

The Bike Shop is the most reliable place to track your bike repairs for both cyclist and bike shop owners by adding your zipcode, selecting your bike shop, choosing your repairs, and tracking them. The Bike Shop, made by the bike lover for the bike lover.

## Why?

Due to the pandemic and recent popularity of commuting on bike, many bike shops are swamped with large bike repair orders. At the same time, cyclists drop off their bikes for repairs with a wait time of over a week without knowing when their bike will be ready. This app will bridge the gap between both shop owners and cyclists for fast efficient communication. Along with The Bike Shop, cyclist will be able to see what is going on in the community, events, and local trails.er.

## APIs & Frameworks

We integrated several APIs and frameworks into our site:

- [Mapbox](https://www.mapbox.com/) for the geolocation map interface.
- [React-Chat-Widget](https://github.com/Wolox/react-chat-widget) for the chat bot functionality
- [Fullcalendar](https://fullcalendar.io/) as our calendar framework.
- [Sendgrid](https://sendgrid.com/) for our email functionality.
- [REACT-BOOTSTRAP](https://react-bootstrap.github.io/) for the front end components and design.
- [Cloudinary](https://cloudinary.com/) to upload and manage user images.
- [TrailFork](https://www.trailforks.com/widgets/) to render the trails and routes.

- To keep track of login information, we used JWT-based token authentication, bcrypt for password hashing, and Passport for user authentication.

<hr/>

## Status

The Bike Shop 1.0

## Screenshots

|                                             |                                        |
| -----------------------------------------   | -------------------------------------- |
| ![](https://i.imgur.com/UU6LzUj.jpg)        | ![](https://i.imgur.com/dd9BZuV.jpg)   |
| ![](https://i.imgur.com/ktl183B.jpeg)       | ![](https://i.imgur.com/g4yWi3F.jpeg)  |
| ![](https://imgur.com/whKI9ql.png)          | ![](https://imgur.com/cO6mNHp.png)     |
| ![](https://imgur.com/PoHCZKn.png)          | ![](https://imgur.com/7vnqPgh.png)     |

 

## Who are we?

We love working on web developement and riding our bikes. During our cohort, we found that riding our bikes was a great way to stay fit and mentally sharp!

**Traci L.** Full Stack Web Development student from Wyncode's Cohort 39. Traci is an avid passionate cyclist who enjoys long rides on
Pinetree Drive. She is passionate about web development and wants to create an app for all cyclist.! Find my GitHub profile [here](https://github.com/tracilevine)!

**Danny N.** Full Stack Web Development student from Wyncode's Cohort 39. As a Full-Stack Web Developer, Danny has been able to draw from his
background in Hospitality Management and his passion for cycling to help collaborate on an application to connect cyclists to repairs with an ease of access they never had before.. Find my GitHub profile [here](https://github.com/DNiev)!

**JP C.** Full Stack Web Development student from Wyncode's Cohort 39. JP is passionate about riding his bikes. He was once quoted, "the best code I've written, has come after a long bike ride.". Find my GitHub profile [here](https://github.com/jpcas)!

## Installation

Application uses ports localhost 3000 and 8080.
- `git clone` this repo [git@github.com:wyncode/c39_bike_shop.git](https://github.com/wyncode/c39_bike_shop)
- `cd` into it.
- `yarn install`
- `cd client && yarn install`

## Data

-We used the MERN stack for our app: MongoDB to store data, Express for our server, React for our front end and Node.js as our runtime.

- Used the MongoDB database to store our information. We have eight models/collections: users, cyclist, bikeshops, bicycles, orders, events, reviews, repairs. Users become cyclist when isAdmin is not in place. Cyclists can place order and leave reviews for bikeshops. Admins are bikeshops and have ability to create and edit their shops, repairs they offer, and update the progress of orders. We created our own event API to render local cycling events and group rides.

## Back End Usage

We have a seed file available in server/db/seeds/index.js for you to start up with faker-provided data.

<hr/>

## Dependencies

|        Client Side        |       Server Side       |   
| :-----------------------: | :---------------------: | 
|   @fullcalendar/daygrid   |     @sendgrid/mail      |     
| @fullcalendar/interaction |        bcryptjs         |     
|         bootstrap         |       cloudinary        |     
|       moment-range        |      concurrently       |     
|      react-bootstrap      |      cookie-parser      |    
|      react-scroll-to      |   express-file-upload   |     
|           axios           |          faker          |     
|     styled-components     |      jsonwebtoken       |     
|        sweetalert         |         mongodb         |    
|  react-paypal-button-v2   |        mongoose         |     
|           react           |    passport-facebook    |     
|         react-dom         |        passport         |     
|       react-map-jl        | passport-local-mongoose |    
|     react-router-dom      |      passport-jwt       |     
|       react-scripts       |     passport-local      |     
|        react-tabs         |        validator        |    
|      react-spinners       |         moment          |    
|          moment           |          cors           |     
|        Sweet Alert        |      jsonwebtoken       |     
|        React-Rater        |         mbreact         |     
|        React-Share        |         express         |     
|          moment           |                         |     
|     React-Chat-Widgit     |


## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

## Runs on Herkoku

https://thebikeshop305.herokuapp.com/


