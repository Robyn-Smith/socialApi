# socialApi

## Description
This API gives a social network web application functionality, allowing users to share their thoughts, react to friends’ thoughts, and create a friend list. Express.js was used for routing as well as a MongoDB database, and the Mongoose ODM. Seed data has not been added to this code, instead the user can enter their own data using Insomnia or Postman after installing the API.

## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation
To install this application please type the following demands in the terminal:
```md
npm i
```
```md
npm run start
```
Finally, the code can be tested and data can be created, read, updated and deleted with the use of applications such as Postman or Insomnia.

## Usage
Once the user has run the code in the terminal; they should then navigate to Postman or insomnia and search the following URL http://localhost:3001 and add the following routes in accordance with what data they would like to see or edit:
```
/api/users

/api/users/:id

/api/users/:id/friends/:friendId

/api/users/:id/friends/:friendId

/api/thoughts

/api/thoughts/:id

/api/thoughts/:thoughtId/reactions

/api/thoughts/:thoughtId/reactions/:reactionId
```
Then the user can use the GET method to read and recieve the data, the POST method to create data, the PUT method to update data and the DELETE method to remove data. Please watch the waalkthrough video below for more details.

# Walkthrough video
https://www.youtube.com/watch?v=kdA6gopW7AY
