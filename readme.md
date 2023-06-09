<h1 style="text-align: center; font-weight: bold;">Gym Pass Api</h1>

---
## About the project

Gym Pass is an REST API project, using SOLID principles, that simulate the [GymPassApp](https://gympass.com/en-us), where you can authenticate, create Gyms, fetch nearby Gyms, make a check-in in a specific Gym, validate a check-in, get user metrics and other funcionalities.
It also has Unit Tests and E2E tests.

### 🛠 Technologies

- [Node.JS](https://nodejs.org/en)
- [Fastify](https://www.fastify.io/docs/latest/)
- [Prisma](https://www.prisma.io/)
- [bcryptjs](https://www.npmjs.com/package/bcrypt)
- [DayJS](https://day.js.org/)
- [DotEnv](https://axios-http.com/ptbr/docs/intro)
- [Zod](https://www.npmjs.com/package/json-server)
- [Vitest](https://www.npmjs.com/package/json-server)
- [SuperTest](https://www.npmjs.com/package/json-server)
---

### 🎲 Run

```bash
# Clone this repository
$ git clone https://github.com/NaathanFerreira/GymPassApi.git
# Access the project folder on terminal/cmd
$ cd gympassapi
# Install dependencies
$ yarn
# or
$ npm install
# Start the application
$ yarn start
# or
$ npm start
```

### 📍 Routes
## USERS
# Register [POST]
- /users
# Authenticate [POST]
- /sessions
# Refresh Token [PATCH]
- /token/refresh
# Get User Profile [GET]
- /me

## GYMS
# Search a Gym [GET]
- /gyms/search
# Search a Nearby Gym [GET]
- /gyms/nearby
# Create Gym [POST]
- /gyms

## CHECK-INS
# Get Check-Ins history [GET]
- /check-ins/history
# Get User Check-Ins metrics [GET]
- /check-ins/metrics
# Create Check-In [POST]
- /gyms/:gymId/check-ins
# Validate Check-In [PATCH]
- /check-ins/:checkInId/validate


