[![Website memcode.com](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://memcode.com)
[![GitHub contributors](https://img.shields.io/github/contributors/lakesare/memcode)](https://GitHub.com/Naereen/lakesare/memcode/contributors/)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/lakesare/memcode)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/lakesare/memcode/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

<img width="1312" alt="image" src="https://user-images.githubusercontent.com/7578559/130649843-9703cd30-51fd-40ef-9249-9aaca869f8ca.png">

# Memcode

Flashcards: for coders, mathematicians, and physicists. Open-source, free for all.  
Made with love 💘


## Links

**Site ❤️**: www.memcode.com  
**Patreon**: www.patreon.com/memcode  
**Email**: [contact@memcode.com](mailto:contact@memcode.com)  
**Twitter**: https://twitter.com/memcodeapp  

**Alternative.to**: https://alternativeto.net/software/memcode/about   
**Slack**: please write to [contact@memcode.com](mailto:contact@memcode.com) to request access  


## Contributing

### Initial setup for development

Note: if you'd like to use online development environment, see https://github.com/lakesare/memcode/blob/master/Gitpod.md. Steps below are for local setup.

#### Create a database postgres user with a password.
1. Install PostgreSQL.
2. Go to postgres console: `psql postgres`.
3. Create a `postgres` user with password: `CREATE ROLE postgres WITH LOGIN PASSWORD postgres;`.
4. Give them a permission to create dbs, own all extensions etc.: `ALTER ROLE postgres with superuser;`.

#### Copypaste environment variables.
1. Ask someone for `env.js` file, put it in the root folder (next to package.json). Inside of `env.js`, change DB_USER and DB_PASSWORD to relevant values (your postgres's user and password).

#### Install needed libraries.
1. Install npm.


### How to run the site locally? 

#### Set up the database.
1. Create a new development database 'memcode': `make db-reset`.

#### Start code compilers and server.
1. Run `npm install`.
2. Run `make backend-webpack`, `make frontend-webpack`, `make start`. If you are on windows - you can use equivalent npm commands.

#### Optionally: populate database (please request access to heroku from the owner if you truly need access to production database for some reason).
1. Install heroku cli.
2. `heroku login`.
3. Make sure heroku knows about our app: `heroku git:remote -a memcode`.
4. Pull courses from the database with `make heroku-db-pull`.
