# simple-microservice
Microservice builded using node.

This's a small introduction to microservices and was build using node with express and request dependencies.

The functionality is really simple, there're only two tasks that this microservice can do.

1. Return some information from "package.json" and

2. Return distances existing between 2 ZIP codes from USA, using zipcodeapi.

to execute locally, first clone or download the repo and then execute:

  npm install
 
 and then start the node server using
  
  npm start
  
to access the first function listed above, navigate inside the browser to: 
 
  http://localhost:3000/about
 
to access the second function, navigate to:
 
  http://localhost:3000/distance/[USzipCode1]/[USzipCode2]
  
Where [USzipCode1] and [USzipCode2] must be valids ZIP codes from USA, you can find a oficial list of USA codes here: http://phaster.com/zip_code.html.
  
A valid request looks like this e.g: http://localhost:3000/distance/84010/97229
 
This will return the distance in miles by default or a error code/msg when a bad request or the api limit was reached.
 
