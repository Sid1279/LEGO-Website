# DragonBricks LEGO Catalogue Website
Dragonbricks LEGO Catalogue is a web-based application built using JavaScript, React, Express, MongoDB, Firebase, GCP, and Figma. It provides an engaging and informative platform for exploring LEGO sets, minifigures, and parts.

## Features
- User sign-up & login with email and password, error handling for invalid credentials
- Secure user authentication and registration using OAuth via GCP (optional)
- Integration with the Rebrickable API catalogue, providing access to over 90k+ LEGO datapoints

## How it Works

### Homepage
This file contains the main component for the Dragonbricks LEGO Catalogue application. It sets up the overall structure of the application and includes components such as Header, Navbar, Brand, Introduction, Features, Possibility, CTA, Blog, and Footer.

### Register/Login
- The web application uses React for the frontend and communicates with a backend API for user authentication. The frontend components are built using functional components and utilize React hooks for managing state and handling form input.
- The Login component handles user login by making a POST request to the backend API with the user's email and password. If the login is successful, a JWT token is returned and stored in the browser's local storage. The user is then redirected to the homepage.
- The Signup component handles user registration by making a POST request to the backend API with the user's first name, last name, email, and password. If the registration is successful, the user is redirected to the login page.
- The optional feature of signing in with Google is commented out in the code but can be enabled by uncommenting the necessary code and providing a valid Google client ID. The responseGoogle function handles the Google sign-in process and makes a POST request to the backend API with the Google token ID. If the sign-in is successful, a JWT token is returned and stored in the browser's local storage. The user is then redirected to the homepage.

### Catalogue
The catalogue.js file implements the functionality for searching and displaying LEGO sets, minifigures, and parts. It includes code for filtering the data based on user preferences and implementing pagination. The file also contains commented-out code for different pagination implementations using a DataTable.

### Chat
The chat.js file provides the chat feature using Firebase for real-time messaging. It allows users to send and receive messages, and it includes authentication using Google Sign-In. Integrated ChatGPT API to enable real-time conversation.

## Installation and Usage
To run the Dragonbricks LEGO Catalogue application locally, follow these steps:
- Install the required dependencies by running `npm install` in the project directory.
- Set up a Firebase project and obtain the necessary configuration details.
- Replace the Firebase configuration in the chat.js file with your own Firebase project details.
- Set up a Rebrickable API account and obtain the API key.
- Replace the API key in the catalogue.js file with your own Rebrickable API key.
- Run the application using `npm start`.

## Link to Demo Video
[Demo Video](https://github.com/Sid1279/LEGO-Website/blob/main/Dragonbricks%20demo.mp4)
