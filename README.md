# hypotenuse handmade backend training ground

## Motivation
First iteration toward a production server for a self-hosted small business web store. Prototype implementation includes MariaDB and phpMyAdmin running on a raspberry pi. Production is assumed to run on something other than ARM cpu, perhaps with MySQL instead of MariaDB.


### MVP
- [x] get knex, dependencies wired with mariadb
- [ ] get any machine on local network (my laptop) talking with db if running dev server (this repo)
- [ ] set up products tables
- [ ] get BTCPayServer wired

### After MVP
- [ ] investigate redis server for caching
- [ ] dockerize the whole set up
- [ ] investigate deployment on not-rpi

## Set Up

### This repo

- Create new .env, add the following:
  - PORT (eg PORT=9222)
  - NODE_ENV=development, change for production
  - HOST - host for db, localhost if on same machine, IP/hostname of server if not
  - HOST_PORT - port for db (3306 for mariadb default)
  - MARIADB_USER - user created during mariadb set up, can be global user or user just for a particular database. nb the host name on the user
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
- to enable developing on local device, will need a user set up with host name set up for device (or all host names). this can be done in phpmyadmin

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