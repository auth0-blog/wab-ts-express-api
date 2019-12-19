# Use TypeScript to Create a Secure API with Node.js and Express

[Click here to read the full tutorial](https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-adding-authentication-authorization/)

Learn how to **build a feature-complete API using Node.js, Express, and TypeScript** that lets clients perform data operations on resources that describe a restaurant menu. Using TypeScript with Node.js gives you access to optional static type-checking along with robust tooling for large apps and the latest ECMAScript features.

Learn also how to **define data models, create a data service, and quickly build modular endpoints**. As an option, you can also learn how to **secure the API using Auth0**. To see your API in action, you’ll use a production client called “WHATABYTE Dashboard,” which is inspired by the [sleek web player from Spotify](https://open.spotify.com/search).

![WHATBYTE Dashboard menu item](https://cdn.auth0.com/blog/developing-a-secure-api-with-nestjs/whatabyte-dashboard-menu-item.png)

## Setup

- Clone repository:

```bash
git clone git@github.com:auth0-blog/wab-ts-express-api.git \
express-ts-api \
```

- Make the project folder your current directory:

```bash
cd express-ts-api
```

- Install the project dependencies:

```bash
npm i
```

- If you don't have set up any Auth0 applications, follow the steps from these tutorial sections to create them:

<a href="https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-adding-authentication-authorization/">Setting Up an Auth0 API</a>

<a href="https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-adding-authentication-authorization/#Creating-an-Auth0-Client-Application">Connecting a Client Application With Auth0</a>

- Create a `.env` hidden file:

```bash
touch .env
```

- Populate `.env` with this:

```bash
PORT=7000
AUTH0_DOMAIN="Your Auth0 domain"
AUTH0_AUDIENCE="Your Auth0 audience"
```

- Start webpack Hot-Module Replacement (HMR):

```bash
npm run webpack
```

- Start the Express server:

```bash
npm start
```

[Read on the complete tutorial](https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-adding-authentication-authorization/)

**If you have any questions or feedback, please [contact us through our Community Site for this tutorial](https://community.auth0.com/t/use-typescript-to-create-a-secure-api-with-node-js-and-express/35336).**

## About Auth0

Auth0, the identity platform for application builders, provides thousands of enterprise customers with a Universal Identity Platform for their web, mobile, IoT, and internal applications. Its extensible platform seamlessly authenticates and secures more than 2.5B logins per month, making it loved by developers and trusted by global enterprises. The company's U.S. headquarters in Bellevue, WA, and additional offices in Buenos Aires, London, Tokyo, Sydney, and Singapore, support its customers that are located in 70+ countries.

For more information, visit [https://auth0.com](https://auth0.com/) or follow [@auth0 on Twitter](https://twitter.com/auth0).
