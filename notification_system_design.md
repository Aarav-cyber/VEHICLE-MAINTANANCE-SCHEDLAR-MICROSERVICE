# Notification System Design

## Purpose

The notification system is intended to alert stakeholders when important scheduling events occur in the vehicle maintenance microservice. It should support delivery of notifications for schedule generation, depot status changes, and maintenance tasks.

## Goals

- Deliver notifications reliably for key workflow events.
- Support multiple channels such as email and console/log output.
- Keep the system simple and decoupled from core request handling.
- Allow future expansion to SMS or push notifications.

## Components

### 1. Event Producer

The core service emits events when important actions happen:

- schedule created for a depot
- depot not found
- vehicle or schedule data fetch fails
- registration success/failure

### 2. Notification Service

A separate module handles the notification workflow. Responsibilities:

- format notification messages
- choose delivery channel(s)
- retry on transient failures
- record notification status

### 3. Transport Layer

Channels for delivering notifications:

- email service (SMTP or external provider)
- logs / console output for local development
- placeholder for SMS or push channels

## Data Model

### Notification payload

- `eventType` - `schedule_created`, `error`, `registration_complete`, etc.
- `timestamp` - event time
- `subject` - short description
- `message` - detailed message body
- `recipient` - target address or identifier
- `status` - `pending`, `sent`, `failed`

## Flow

1. Controller or service emits an event after important work completes.
2. Notification service receives the payload.
3. The service formats the message and sends it through configured transports.
4. Success or failure is logged.

## API / Integration

The system can expose a simple internal API such as:

- `notify(event)` — send a notification for a given event payload.

Example usage:

```js
const notify = require("./notificationService");

notify({
  eventType: "schedule_created",
  subject: "Schedule generated",
  message: "Depot 1 schedule generated successfully.",
  recipient: "ops@example.com",
});
```

## Deployment and Configuration

Configuration should be stored in `.env` or config files:

- `NOTIFICATION_EMAIL_FROM`
- `NOTIFICATION_EMAIL_TO`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`

## Failure handling

- Log failures in the evaluation/notification logger.
- Retry transient transport errors once or twice.
- Do not block the main request flow on notification failures.

## Future improvements

- add persistence for notification history
- support subscriber preferences and multiple recipients
- add a UI or management dashboard
- add SMS or push notification support
