# Backend Assignment

## Overview

This repository contains a Node.js Express backend for a vehicle maintenance scheduling microservice. It fetches depot and vehicle data from an evaluation server, generates a schedule for a selected depot, and logs request activity.

## Project structure

- `src/server.js` — starts the Express server
- `src/app.js` — configures middleware and routes
- `src/route/userRoute.js` — user endpoint
- `src/route/vehicleRoute.js` — depot, vehicles, and schedule endpoints
- `src/controller/vehicleController.js` — controller logic for vehicle routing
- `src/service/vehicleService.js` — external data calls and schedule generation
- `src/service/registerService.js` — registration script for evaluation server
- `src/middleware/loggerMiddleware.js` — request logging middleware
- `src/middleware/errorMiddleware.js` — generic error handler
- `src/logger/logger.js` — sends logs to the evaluation server

## Prerequisites

- Node.js installed
- Internet access to reach the evaluation server
- `npm` package manager

## Install

```bash
npm install
```

## Run

Start the app with nodemon for development:

```bash
npm run dev
```

Or run directly:

```bash
node src/server.js
```

## Environment variables

Create a `.env` file in the project root with these values:

```env
PORT=3000
BASE_URL=https://example.com
CLIENT_ID=
CLIENT_SECRET=
ACCESS_TOKEN=
```

### Required value

- `ACCESS_TOKEN` — used to authenticate requests to the evaluation server for depots, vehicles, and logs.

## Registration

To register with the evaluation server and retrieve `clientID` / `clientSecret`, run:

```bash
node src/service/registerService.js
```

This script sends a POST request to the evaluation server registration endpoint with your details.

## API Endpoints

### Health check

- `GET /`
- Response:

```json
{
  "success": true,
  "message": "server running"
}
```

### Users

- `GET /api/users`
- Response:

```json
{
  "success": true,
  "data": []
}
```

### Depot data

- `GET /api/depot`
- Fetches depots from the evaluation server using `ACCESS_TOKEN`.
- Example response: depot list JSON.

### Vehicles

- `GET /api/vehicles`
- Fetches vehicles from the evaluation server using `ACCESS_TOKEN`.

### Schedule

- `GET /api/schedule/:id`
- Example: `GET /api/schedule/1`
- Generates a schedule for the depot with the given `id` using vehicle duration and impact.
- Example response:

```json
{
  "depotId": 1,
  "mechanicHours": 10,
  "maxImpact": 42,
  "usedHours": 9,
  "selectedTasks": [ ... ]
}
```

## Evaluation server endpoints used by the service

- `POST http://20.207.122.201/evaluation-service/register` — registration
- `GET http://20.207.122.201/evaluation-service/depots` — depot data
- `GET http://20.207.122.201/evaluation-service/vehicles` — vehicle data
- `POST http://20.207.122.201/evaluation-service/logs` — logging

## Screenshots

To add screenshots to this README:

1. Create a `screenshots/` folder at the project root.
2. Save screenshots inside that folder, for example `screenshots/health-check.png`.
3. Reference them in Markdown:

```md
![Health check screenshot](screenshots/health-check.png)
```

### Example

```md
![API endpoints screenshot](screenshots/api-endpoints.png)
```

## Notes

- `ACCESS_TOKEN` is required to use `/api/depot`, `/api/vehicles`, and `/api/schedule/:id`.
- If the server fails, the error middleware returns a 500 response with:

```json
{
  "success": false,
  "message": "internal server error"
}
```
