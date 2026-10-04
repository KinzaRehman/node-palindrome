/* person needs check for plaindrome 
https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript

// Import the built-in HTTP module
const http = require('http');

// Define the server logic
const server = http.createServer((req, res) => {
    // Set the response status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response text
    res.end('Hello, World!\n');
});

// Specify the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

*/ 

const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
//line 10 is not my code i was getting a outdated error and i googled and they reocmmended this
  const myURL = new URL(req.url, `http://${req.headers.host}`)

  const page = myURL.pathname
  const params = Object.fromEntries(myURL.searchParams)

  console.log(page)

  if (page == '/') {

    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })

  } else if (page == '/js/main.js') {

    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })
  
   } else if (page == '/css/style.css') {

     fs.readFile('css/style.css', function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/css'})
       res.write(data)
       res.end()
   })

  } else if (page == '/api') {

    if ('palindrome' in params) {

      const userInput = params['palindrome']
      //this is from stack overflow 
      function palindrome(str) {
       /* remove special characters, spaces and make lowercase*/
      var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

     /* reverse removeChar for comparison*/
      var checkPalindrome = removeChar.split('').reverse().join('');

      /* Check to see if str is a Palindrome*/
      if  (removeChar === checkPalindrome) {
        return `${userInput} is a palindrome`
      }else {
        return `${userInput} isn't a palindrome`
      }
      }
      const result = palindrome(userInput)

      const objToJson = {
        answer: result 
          }
      
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(objToJson))
    }
  }
})

server.listen(8000)


//http://localhost:8000/



