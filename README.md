# Friendelodeon

Friendelodeon is a full-stack application that utilizes Node JS, MySQL and Express to match the user with a cartoon character friend, based off their answers to 10 survey questions.

## Getting Started

Want to try it out?
Just follow this link: [Friendelodeon](https://friendelodeon.herokuapp.com/)

You can click the "Go to survey" button to go straight to the survey. 

You can also check out the API data or the GitHub repo by clicking either of the links at the bottom of the page.

Fill out your answers as honestly as you can to get the best match for you!

## Challenges

A few challenges that I faced and solved when creating this application were:
* The matchmaking logic for determining which cartoon character would be the best match for the user, based on the question answers of both the cartoon and the user.
    * I accoplished this by looping through and summing up all of the scores for each cartoon and then comparing the sum of each cartoon score to the sum of the user's scores. Then the absolute value of the user's score minus the cartoon's score was taken and whichever cartoon had the least difference in total score, is the best match.
* Properly setting up the exports for each file and requiring the correct files. 

## Built With

* JavaScript
* Node JS
* Express
* MySQL 

## Authors

* Charlie Slone - [GitHub](https://github.com/ctslone) - [LinkedIn](https://www.linkedin.com/in/charlie-slone-704311a9/)