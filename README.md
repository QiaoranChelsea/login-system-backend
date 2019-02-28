# login-system-backend
A log-in system backend built with node.js and MongoDB (Support Sign up, Sign in, Log out, verify token/session).

## Prerequisite
   1. Npm
   2. NodeJS
   3. MongoDB
   
## Steps to use this backend 
   1. Add your own MongoDB infomation in `app.js` to make the database work.
   2. In root directory, run `npm install`
   3. start your server `node server.js`

## Guideline for using backend APIs
   * sign up
     * function: store the user's registration info into the database.
     * _METHOD_: POST
     * Request URL: 
     * _post data_ : 
     ```
     {
       "password": "passwordtest",
       "email": "test1@gmail.com",
       "firstName":"test1_firstname",
       "lastName":"test1_lastname"
     }
     ```
     * _server response_ : `{success: true, message:'sign up!}' when signUp success` 
   * sign in
     * function: check if the email and password users entered are consistent with records from database.
     * _METHOD_: POST
     * _post data_ : 
     ```
     {
       "password": "passwordtest",
       "email": "test1@gmail.com"
     }
     ```
     * _server response_ (when sign in success)  : 
     ```
     { "success": "true",
       "message":'valid sign in!',
       "token": "<a token id>" 
     }
     ```   
   * verify token/session
     * function: veryfy if the token is consistent with record form database and it's not deleted(log out) .
     * Request URL: http://localhost:8080/account/verify?=<token id>
     * _METHOD_: GET
     * _server response_(when verify success): 
     ```
     { 
      "success": "true",
      "message":'good',
     }
     ```  
   * Log out
     * function: log out from system
     * Request URL: http://localhost:8080/account/logout?=<token id>
     * _METHOD_: GET
     * _server response_(when log out success):
     ```
     { 
       "success": "true",
       "message":'log out successfully',
     }
     ```   
                           
                         
   
## Credit
   - Tutorial about creating REST API by [Academind](https://www.youtube.com/watch?v=WDrU305J1yw&list=PL3na9fqTo57-YCLaivCqWZFodzzothPBS&index=9&t=1030s)
   - Turorial about building log-in system by [Keith, the Coder](https://www.youtube.com/watch?v=s1swJLYxLAA&list=PL3na9fqTo57-YCLaivCqWZFodzzothPBS&index=7)
