# Mushroom Server

An open-source alternative to Firebase, witch goal is to make it easy for people to set up and start developing their dream app.

This is my first open-source project so be nice!

## Run Locally

Clone the project

```bash
  git clone https://github.com/VpgMackan/mushroom-server
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. Theas are temporary and will be modifyed in the future with email smtp config and more.

`DB_USER`
`DB_HOST`
`DB_DATABASE`
`DB_PASSWORD`
`DB_PORT`

`JWT_SECRET`

## Todo

- Make a api request that the user can submit a js file and it stores it in the db and starts a cronjob with that file
- Set up Testing function
- More to come

## API Reference

There are no real API request but will be added in the future.

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

## License

[LGPL](https://choosealicense.com/licenses/lgpl-3.0/)
