## Explanation about the code:

This piece of library create a http server and check if there are any "quotes" keyword in request URL.
If its present then its return Success code 200 and a JSON response message "Yes, this URL contains a word quotes".
If not then return Error code 404 and a JSON response message "404 Error, Sorry Page not found!!!".

## Implementation:

Here I have used the Inversion of Control container to injecting the 2 different classes when its required.
Thats called IoC container. And created classes are injectable so this is called DI (Dependency Injection).

## Execution:

1. Compilation of code using -> tsc -w
2. Executing the code using -> node build/main.js
   Now http server created and listens at port 3000.

## Test cases
Jest is the best usage for unit testing.

Test Case#1
Request URL -> http://localhost:3000/quotes
Response code -> 200
Response message -> [{"Message":"Yes, this URL contains a word qoutes"}]

Test Case#2
Request URL -> http://localhost:3000/hello
Response code -> 404
Response message -> 404 Error, Sorry Page not found!!!

Test Case#3
Request URL -> http://localhost:3000/
Response code -> 404
Response message -> 404 Error, Sorry Page not found!!!

Test Case#4
Usecase - When server is not running.
Request URL -> http://localhost:3000/quotes
Outcome - This site can’t be reached

