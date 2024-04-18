# Fantastic Film Finds

Welcome to Fantastic Film Finds! This React App is your ultimate destination for managing your film memorabilia inventory, discovering new gems, and connecting with fellow film enthusiasts. Whether you're a collector, a cinephile, or just someone who enjoys movies, Fantastic Film Finds has something for you.

## Getting Started

To get started with Fantastic Film Finds, follow these simple steps:

1. Clone [this repository](https://github.com/wrolson96/z-prefix) to your local machine.
2. Ensure **docker** is running on your local machine
3. Run `docker compose up` in the **z-prefix** directory
4. run in order in **api**:
   - `npx knex migrate:latest`
   - `npx knex seed:run`
5. Open your browser and navigate to http://localhost:3000 to access the app.

## If Things Aren't Working For `docker compose up` initially

1. run `npm install` in both **frontend** and **api**
2. run `docker compose up` in **z-prefix**

## Pages

### Current Inventory

Browse through all current inventory of film memorabilia. Both logged in and unregistered members may look through all current inventory posted from all users. Should a user wish to see more details about a certain item, simply click on the item box and you will be redirected to a page with more information on the item.

### Login

Existing users can log in [here](http://localhost:3000/login) to their accounts securely to access their inventory, profile, and create new inventory entries. Both username and password are required log in and if one or both categories fail the user will be propted to try again.

- Test Username: TheDude
- Test Password: 123

### Create Account

New to Fantastic Film Finds? Create your account [here](http://localhost:3000/createAccount) to start building your film memorabilia collection and sharing with the community. All categories are required to create an account.

### My Inventory

View and manage your personal film memorabilia inventory. Edit existing entries, delete old entries, and keep track of your collection.

### Create New

Contribute to the Fantastic Film Finds community by adding new film memorabilia to the database. Share your discoveries with others and expand our collective knowledge of cinematic treasures.

### Profile

View your profile information including your username and name.

### Logout

Safely log out of your Fantastic Film Finds account to protect your privacy and security.

## Technologies Used

- JavaScript - React
- HTML
- CSS - Styled Components

## Contributors

The one and only **Wade Olson**

## Feedback and Support

Have a suggestion, bug report, or need assistance? We'd love to hear from you! Reach out to us via email at [support@fantasticfilmfinds.com](support@fantasticfilmfinds.com). Don't actually email that, it doesn't exist.

## License

This project is licensed under the WRO License.
