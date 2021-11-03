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

## Client
Navigate to client folder and install node modules first
```sh
npm install
```

## Mysql
import the database using this command
```sh
mysqldump -u mysql_user -p DATABASE_NAME < dump.sql
```

# Running the application
## Server
First start the server using this command
```sh
npm run start
```

The Server will run at this port http://localhost:8080

## Client
Then start the client using this command
```sh
npm run start
```

The client will run at this port http://localhost:3000

## Cron
We can schedule a node-cron to fetch and update the database with new streams using this command in server
```sh
npm run cron
```
> With current implementation accessToken needs to be configured in the `streamsProcessor.js` file manually then only this database update will work.


# Screenshots
![Screenshot](https://raw.githubusercontent.com/sukruthmk/twitch-binoculars/main/screenshots/1.png)
![Screenshot](https://raw.githubusercontent.com/sukruthmk/twitch-binoculars/main/screenshots/2.png)
![Screenshot](https://raw.githubusercontent.com/sukruthmk/twitch-binoculars/main/screenshots/3.png)
![Screenshot](https://raw.githubusercontent.com/sukruthmk/twitch-binoculars/main/screenshots/3.png)
