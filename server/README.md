# NashRealt_Server

## Description

NashRealt_Server is the backend part of the real estate management application. The application is built on Node.js using Express.js and MongoDB.

## Installation

Clone the repository:

   git clone https://github.com/maksimSlizh/nashRealt.git
   cd nashRealt/server

Install dependencies:

npm install

Configuration
Creating the config/default.json file:
At the top level of the project, create a folder named config, and within it, a file named default.json. Example content:

{
  "serverPort": "3000",
  "SECRET_KEY": "your_secret_key",
  "MONGO_URI": "your_mongo_uri"
}

Creating the .env file:
Create a .env file in the root directory of the server folder with the following content:

SECRET_KEY=your_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Scripts
Start the application:

npm start

Start the application in development mode (using nodemon):

npm run dev

License

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0). For details, see the LICENSE file.

Author

maksimSlizh
