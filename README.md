# socialApi



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
