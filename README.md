# pure-Authentication-NodeJs-Application
# Read Me
## Steps to use this pure Authentication NodeJs Application


## Features
-No external Libraries,Just NodeJs and internal Node API's.<br/>
-SignUp And Login.<br/>
User Details Saved in .Json File.<br/>
Password is hashed [sha256]<br/>
Refactored Code.<br/>
ES6 Syntax used<br/>
Json file is used to login the user<br/>


## Installation

clone the app
//open in VS Code
cd {directory name}
code .

For production environments...

```sh
npm start
```

User Register payload
```sh
name:must be greater then 6 characters
email - email specified vadidaion (proper email should be used)
password - must be greater than 8 and less tha 32, must contain  least one digit,least one lowercase letter,least one uppercase letter.
```

User login payload
```sh
email - email specific vadidaion (proper email should be used)
password - must be greater than 8 and less tha 32, must contain  least one digit,least one lowercase letter,least one uppercase letter.
```
