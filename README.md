# Installation

## Server
Navigate to server folder and install node modules first by using this command
```sh
npm install
```
Then configure `src/configs/db.config.json` with your MySQL database
```js
{
    "DB_HOST": "localhost",
    "DB_USER": "root", 
    "DB_PASSWORD": "your password",
    "DB_DATABASE": "database name"
}
```
configure `src/configs/auth.config.json` with Twitch app crendentials
```js
{
    "TWITCH_CLIENT_ID": "twitch app client id",
    "TWITCH_SECRET": "twitch app secret key",
    "SESSION_SECRET": "secret key for express session",
    "CALLBACK_URL": "http://localhost:8080/auth/callback",
    "REDIRECT_CLIENT_URL": "http://localhost:3000/callback" // frontend app url
}
```
