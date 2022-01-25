# hypotenuse handmade backend

## Motivation
A prototype for a production server for a self-hosted small business web store. Prototype implementation includes MariaDB and phpMyAdmin running on a raspberry pi. Production is assumed to run on something other than ARM cpu, perhaps with MySQL instead of MariaDB.


### MVP
- [x] get knex, dependencies wired with mariadb
- [ ] get remote machine (my laptop) talking with db
- [ ] get BTCPayServer wired
- [ ] set up products database

### After MVP
- [ ] dockerize the whole set up
- [ ] investigate deployment on not-rpi

## Set Up

### This repo

- Create new .env, add the following:
  - PORT (eg PORT=9000)
  - NODE_ENV=development - this is for db-config file (investigate how this all pipes together)
  - HOST - localhost if on same machine/IP of server
  - PORT (PORT=3306 for mariadb default) 
  - MARIADB_USER - this is the user created during mariadb set up
  - MARIADB_PASSWORD - password set during mariadb set up (this is actually phpmyadmin password.. why?)
  - MARIADB_DB_DEV - name of dev db
  - MARIADB_DB_TESTING - name of testing db
  - JWT_SECRET (eg JWT_SECRET=secret)
  - BCRYPT_ROUNDS (eg BCRYPT_ROUNDS=10)

- Useful scripts:
  - npx knex migrate:make migration-name
  - npx knex seed:make 00-seed-name
  - see package.json for more custom scripts

### Additional set up on server:
- set up of MariaDB
- set up of phpMyAdmin

</br>

## Public Endpoints (non-restricted)

### Register/Login

#### [POST] /auth/register

- Register a new user
  - username required (unique)
  - password required
  - first_name required

_What you send:_

```json
{
  "username": "luvs2run",
  "password": "randompassword",
  "first_name": "madonna"
}
```

_What you receive:_

```json
{
  "username": "luvs2run",
  "first_name": "madonna"
}
```

#### [POST] /auth/login

- Log in with existing user
  - username and password required
  - returns user object with welcome message and token

_What you send:_

```json
{
  "username": "luvs2run",
  "password": "randompassword"
}
```

_What you receive:_

```json
{
  "username": "luvs2run",
  "first_name": "madonna",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlhbWF1c2VyIiwiaWF0IjoxNjM2ODYyMDY5LCJleHAiOjE2MzY5NDg0Njl9.fhVnkCzPDA5kubS1fo3mj57AEZcon267qH7dQ5Rk7rU"
}
```

### More Endpoints

#### [GET] /api/ 

- Endpoint info here
  - more info here

_What you send:_

```json
{
  
}
```

_What you receive:_

```json
{
  
}
```

## Restricted Endpoints - must be logged in user

#### Account

### [GET] /api/account

- Gets logged in user's account information

_What you send:_

```json
{
  
}
```

_What you receive:_

```json
{
  
}
```