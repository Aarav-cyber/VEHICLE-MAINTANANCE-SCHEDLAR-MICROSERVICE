# API Endpoints

## Health check

- `GET /`
- Response:

```json
{
  "success": true,
  "message": "server running"
}
```

## Users

- `GET /api/users`
- Response:

```json
{
  "success": true,
  "data": []
}
```

## Depot data

- `GET /api/depot`
- Fetches depots from the evaluation server.

## Vehicles

- `GET /api/vehicles`
- Fetches vehicles from the evaluation server.

## Schedule

- `GET /api/schedule/:id`
- Example: `GET /api/schedule/1`
- Response includes:
  - `depotId`
  - `mechanicHours`
  - `maxImpact`
  - `usedHours`
  - `selectedTasks`

## Notes

- `GET /api/depot`, `GET /api/vehicles`, and `GET /api/schedule/:id` require the evaluation server access token to work correctly.
