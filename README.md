# Welcome to the Prisma2 starter

### Tech stack
- Prisma 2
- Postgres
- React (hooks)
- Graphql (Nexus typesafety)
- Apollo Server
- Next.js


#### Note: This project is meant to be scarce. Feel free to add more.

## Getting started

1. Create a database

Follow the steps listed here: https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1

2. Create a .env file
Prisma needs to know where your database resides. Create a `.env` file in `/prisma`. It should look something like this:
```
DATABASE_URL="postgres://xxx:xxx:5432/xxx"
```
3. Add some data into your database.
If you look through the `schema.prisma`, we are defining a "messages" table. Our recommendation is to use "Postico" as a GUI to connect to your newly created heroku db. https://eggerapps.at/postico/
Add a "Messages" table with 2 columns: `id` and `message`. You can create these manually or use this DDL:
```
CREATE TABLE "Message" (
    id integer NOT NULL DEFAULT nextval('messages_id_seq'::regclass) UNIQUE,
    message text NOT NULL
);
```
4. Start the app!
```
$ yarn
```
```
$ yarn dev
```

#### Useful commands
`yarn run generate` will update your nexus schema and regenerate your prisma sdl.
