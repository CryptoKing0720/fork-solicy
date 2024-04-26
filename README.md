# Blockchain

A MERN fullstack application for blockchaining.

You can view the [Live App](https://cartedo.netlify.app/) with either new user or an existing dummy user with below credentials.

`username` : test <br />
`password` : password


## Features ⭐


⚡️ Authentication which involves login and registration\
⚡️ Includes MongoDB CRUD Operations\
⚡️ RESTful API for login,signup, accessing and creating blockhain\
⚡️ Modern UI Design


## Folder Structure :file_folder:
```
App
├── client
├── server

```

```
client
├── public
│   └── index.html
├── src
│   └── components
│   |     └── style
│   |     └── Blockchain.js
│   |     └── Landing.js
│   |     └── Login.js
│   |     └── Signup.js
│   └── utils
│   |     └── hashGen.js
│   └── authContext.js
│   └── App.js
│   └── index.js
```
The file `index.js` which executes when our client side application is ran
We have a `components` folder for our different components.

```
server
├── model
│   └── blocks.js
│   └── users.js
├── routes
│   └── blocks.js
│   └── users.js
├── config.env
│   
└── app.js
```
In the above folder structure, we have our main file `app.js` which executes when our server side application is ran
We have a `model` folder for our database and a `routes` folder for user and blocks routes.


## Design :triangular_ruler:

We have two collections named `blocks` and `users` in the model folder.
User can be created by passing User Name and Password in the Request Body obtained from the client side.

`POST`- /signup

Then there's the login feature, which allows users to log in using their email address and password.

`POST`- /login

We can read all blocks for the uer with which you logged in

`GET`- /blockchain <br />

Finally, we also have end-point to create a block.

`POST`- /blockchain <br />

On the react side, we have created different components such as login, signup, blockchain etc and also util folder to handle certain utility functions.
In the react we have used `React Hooks` such as `useContext`, `useState`, `useEffect` and also used `Context API`.
`React Router` incuded to handle the different routes.

## Technologies used 🛠️

- [Node](https://nodejs.org/en/) - JavaScript Runtime
- [React](https://reactjs.org/) - JavaScript Library
- [Express](https://expressjs.com/) - Node.js Framework
- [MongoDB](https://www.mongodb.com/) - NoSQL Database

## Deployment 📦

I used [heroku](https://dashboard.heroku.com/apps) to deploy API's and [netlify](https://www.netlify.com/) to host the react app
