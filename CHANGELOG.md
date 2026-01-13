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

### [2026-01-08] #10: feat(listings): implement GET route to fetch and render all listings
- Created index route querying all listing documents and passing to view.
- Timestamp: `2026-01-08 09:20:40`

### [2026-01-08] #11: feat(views): design listing cards with price and image thumbnail preview
- Built responsive card grid displaying property images and formatted nightly rate.
- Timestamp: `2026-01-08 13:40:15`

### [2026-01-08] #12: style(listings): refine card hover transitions and typography
- Added smooth elevation hover effect and modern typography for listing titles.
- Timestamp: `2026-01-08 17:25:30`

### [2026-01-09] #13: feat(listings): build new listing form view with input constraints
- Created form inputs for title, description, image URL, price, country, and location.
- Timestamp: `2026-01-09 10:05:18`

### [2026-01-09] #14: feat(listings): implement POST handler to persist new property listings
- Handled listing submission route, parsed request body, and saved to database.
- Timestamp: `2026-01-09 14:30:45`

### [2026-01-09] #15: refactor(listings): sanitize user text inputs before database write
- Trimmed whitespace and normalized location strings during listing creation.
- Timestamp: `2026-01-09 18:15:22`

### [2026-01-10] #16: feat(listings): implement property details show page route and template
- Created show route fetching individual listing by ID with populated attributes.
- Timestamp: `2026-01-10 09:30:10`

### [2026-01-10] #17: feat(listings): create edit listing form and pre-fill current values
- Rendered edit form with existing listing parameters pre-populated in input fields.
- Timestamp: `2026-01-10 12:45:25`

### [2026-01-10] #18: feat(listings): implement PUT route to update existing listing properties
- Integrated method-override to support PUT request and updated MongoDB record.
- Timestamp: `2026-01-10 15:50:40`

### [2026-01-10] #19: feat(listings): implement DELETE route for removing property listings
- Added delete listing endpoint to remove documents from MongoDB by ID.
- Timestamp: `2026-01-10 19:10:15`

### [2026-01-11] #20: feat(models): create Review schema with rating and comment fields
- Defined Mongoose schema for customer reviews with 1-5 star constraints and timestamp.
- Timestamp: `2026-01-11 10:15:55`

### [2026-01-11] #21: refactor(models): associate reviews array reference in Listing schema
- Established one-to-many relationship linking Review ObjectIds in Listing model.
- Timestamp: `2026-01-11 14:00:30`

### [2026-01-11] #22: feat(views): add review submission form to listing details page
- Embedded comment textarea and rating selector within the listing show view.
- Timestamp: `2026-01-11 17:45:20`

### [2026-01-12] #23: feat(reviews): implement POST route to save reviews for a listing
- Created review creation handler that pushes new review ObjectId into listing.
- Timestamp: `2026-01-12 09:50:12`

### [2026-01-12] #24: feat(reviews): implement DELETE route with $pull operator from listing
- Configured review deletion route using Mongoose $pull to remove review reference.
- Timestamp: `2026-01-12 13:35:45`

### [2026-01-12] #25: style(reviews): style review cards with star ratings and author tags
- Used starability CSS styles and cards for clean review display.
- Timestamp: `2026-01-12 18:20:30`

### [2026-01-13] #26: feat(errors): implement ExpressError custom exception class
- Created reusable error class extending Error with statusCode and custom message.
- Timestamp: `2026-01-13 10:20:15`

### [2026-01-13] #27: feat(middleware): introduce catchAsync wrapper for asynchronous route handlers
- Eliminated redundant try-catch blocks across async route controllers.
- Timestamp: `2026-01-13 14:40:50`

### [2026-01-13] #28: feat(views): create dedicated error template for user-friendly error display
- Added error.ejs view with responsive alert layout and HTTP status code display.
- Timestamp: `2026-01-13 18:10:35`

