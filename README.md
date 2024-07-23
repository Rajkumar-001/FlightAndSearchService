# Welcome to the Flight Service

## Project setup
    -Clone the project on your local
    -Execute 'npm install'on the same path as of your root directory of the downloaded project
    -Create a `.env ` file in the root directory and add the following environment variables

    - `PORT =3000`

    -inside the `src/config` folder create a new file `config.json` and then add the following piece of Json


<

{
  "development": {
    "username": "root",
    "password": <Your Db Password>,
    "database": <Your Db  name>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

}

>

<Once you have added your db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`>



