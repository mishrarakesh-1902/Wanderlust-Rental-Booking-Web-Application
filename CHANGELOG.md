# Project Changelog & Activity Log

All notable improvements and development milestones for Wanderlust.

### [2026-01-05] #01: docs: document initial setup and environment variables
- Added system prerequisites, Node.js runtime details, and sample .env parameters.
- Timestamp: `2026-01-05 10:15:20`

### [2026-01-05] #02: feat(server): initialize Express server application and middleware setup
- Configured Express app with URL encoding, JSON parsing, and static directory serving.
- Timestamp: `2026-01-05 14:20:45`

### [2026-01-05] #03: chore: configure npm scripts and development nodemon runner
- Set up package.json start and dev scripts with proper environment flags.
- Timestamp: `2026-01-05 18:35:10`

### [2026-01-06] #04: feat(db): establish MongoDB connection with Mongoose client
- Created database connection helper with connection string fallback and error handling.
- Timestamp: `2026-01-06 09:45:30`

### [2026-01-06] #05: feat(models): define initial Listing schema structure
- Added schema definition for property title, description, price, location, and country.
- Timestamp: `2026-01-06 13:10:15`

### [2026-01-06] #06: test(db): verify Mongoose connection handling and error events
- Added connection event listeners to log database status and reconnect on failure.
- Timestamp: `2026-01-06 17:50:40`

### [2026-01-07] #07: feat(views): configure ejs-mate templating engine and layout boilerplate
- Set up ejs-mate for modular layout rendering and partial view composition.
- Timestamp: `2026-01-07 10:30:25`

### [2026-01-07] #08: style(ui): integrate Bootstrap 5 framework and FontAwesome icons
- Added Bootstrap 5 stylesheet CDN and FontAwesome vector iconography.
- Timestamp: `2026-01-07 14:15:50`

### [2026-01-07] #09: feat(views): create initial boilerplate layout and responsive navigation shell
- Implemented base boilerplate layout with sticky header and mobile toggle.
- Timestamp: `2026-01-07 18:05:12`

