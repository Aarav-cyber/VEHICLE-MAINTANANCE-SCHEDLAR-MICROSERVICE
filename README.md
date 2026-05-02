# Backend Assignment

Minimal Node.js Express backend for vehicle maintenance scheduling.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

or

```bash
node src/server.js
```

## Config

Create `.env` in the project root with:

```env
PORT=3000
ACCESS_TOKEN=
```

`ACCESS_TOKEN` is required for the endpoints that fetch data from the evaluation server.

## API Endpoints

### Health check

- `GET /`
- Returns server status.

### Users

- `GET /api/users`
- Returns an empty user list.

### Depot data

- `GET /api/depot`
- Fetches depot list from the evaluation server.

### Vehicles

- `GET /api/vehicles`
- Fetches vehicle list from the evaluation server.

### Schedule

- `GET /api/schedule/:id`
- Builds a schedule for the requested depot.
- Response includes `depotId`, `mechanicHours`, `maxImpact`, `usedHours`, and `selectedTasks`.

## Registration

Run this helper to register and retrieve client credentials:

```bash
node src/service/registerService.js
```
