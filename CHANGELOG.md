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

### [2026-01-14] #29: feat(validation): introduce Joi schema validation for listing creation
- Defined strict Joi schema rules ensuring valid prices and required text fields.
- Timestamp: `2026-01-14 09:40:20`

### [2026-01-14] #30: feat(validation): introduce Joi schema validation for review submissions
- Enforced validation constraints on review comments and numeric ratings.
- Timestamp: `2026-01-14 13:15:45`

### [2026-01-14] #31: refactor(middleware): build validateListing and validateReview middleware
- Attached reusable Joi validation middleware to listing and review POST/PUT routes.
- Timestamp: `2026-01-14 17:30:10`

### [2026-01-15] #32: feat(auth): configure express-session and cookie security options
- Configured session secret, cookie expiration age, and HTTP-only cookie flags.
- Timestamp: `2026-01-15 10:05:30`

### [2026-01-15] #33: feat(auth): configure connect-flash for flash notifications
- Added flash middleware and exposed success/error messages to all view templates.
- Timestamp: `2026-01-15 14:25:15`

### [2026-01-15] #34: feat(models): create User schema with passport-local-mongoose plugin
- Implemented User model with automated salt, hash, and username uniqueness.
- Timestamp: `2026-01-15 18:40:50`

### [2026-01-16] #35: feat(auth): initialize Passport.js local strategy authentication
- Configured passport serialize and deserialize routines with local authentication.
- Timestamp: `2026-01-16 09:35:40`

### [2026-01-16] #36: feat(auth): implement user registration route with automatic login
- Created signup view and controller registering new user and opening session.
- Timestamp: `2026-01-16 13:20:15`

### [2026-01-16] #37: feat(auth): implement login and logout handlers with session invalidation
- Added login authentication route and logout redirect with flash feedback.
- Timestamp: `2026-01-16 17:55:30`

### [2026-01-17] #38: feat(middleware): implement isLoggedIn authentication route guard
- Restricted listing creation, editing, and deletion to authenticated users.
- Timestamp: `2026-01-17 10:10:25`

### [2026-01-17] #39: feat(models): link listing ownership to authenticated user
- Added owner ObjectId reference to Listing schema referencing User model.
- Timestamp: `2026-01-17 14:35:40`

### [2026-01-17] #40: feat(views): conditionally render listing action buttons based on session
- Hid edit and delete buttons from non-owners and unauthenticated visitors.
- Timestamp: `2026-01-17 18:15:10`

### [2026-01-18] #41: feat(middleware): create isOwner authorization check for listing modification
- Prevented unauthorized users from submitting PUT or DELETE requests on listings.
- Timestamp: `2026-01-18 09:45:20`

### [2026-01-18] #42: feat(middleware): implement isReviewAuthor check for review management
- Secured review delete route so only the original reviewer can remove comments.
- Timestamp: `2026-01-18 13:30:50`

### [2026-01-18] #43: refactor(routes): modularize routes into separate Express Router files
- Split monolithic route file into distinct listings, reviews, and users routers.
- Timestamp: `2026-01-18 17:40:15`

### [2026-01-19] #44: feat(controllers): extract listing route logic into MVC listing controller
- Moved listing handlers to controllers/listings.js for clean architecture separation.
- Timestamp: `2026-01-19 10:25:35`

### [2026-01-19] #45: feat(controllers): extract review route logic into MVC review controller
- Refactored review endpoints into controllers/reviews.js.
- Timestamp: `2026-01-19 14:10:20`

### [2026-01-19] #46: feat(controllers): extract authentication handlers into users controller
- Consolidated signup, login, and logout controller functions in controllers/users.js.
- Timestamp: `2026-01-19 18:30:45`

### [2026-01-20] #47: chore(config): configure Cloudinary storage and multer upload middleware
- Set up cloudConfig.js with Cloudinary API keys and multer file upload storage.
- Timestamp: `2026-01-20 09:15:30`

### [2026-01-20] #48: feat(upload): support image file upload on listing creation form
- Added multipart/form-data support and uploaded listing images to Cloudinary.
- Timestamp: `2026-01-20 12:40:50`

### [2026-01-20] #49: feat(upload): support image replacement when updating an existing listing
- Handled optional file upload in edit listing route and updated Cloudinary path.
- Timestamp: `2026-01-20 15:55:15`

### [2026-01-20] #50: refactor(models): store image URL and Cloudinary filename in Listing schema
- Updated listing image schema to store secure URL and public identifier.
- Timestamp: `2026-01-20 19:20:40`

### [2026-01-21] #51: feat(maps): integrate Mapbox GL JS SDK and geocoding services
- Imported Mapbox client library and configured public access token.
- Timestamp: `2026-01-21 10:35:10`

### [2026-01-21] #52: feat(geocoding): implement forward geocoding on listing creation
- Converted textual location queries into latitude and longitude coordinates.
- Timestamp: `2026-01-21 14:20:45`

### [2026-01-21] #53: feat(models): add GeoJSON Point geometry field to Listing schema
- Stored GeoJSON coordinates array with Point type for geospatial capabilities.
- Timestamp: `2026-01-21 18:05:30`

### [2026-01-22] #54: feat(views): embed interactive Mapbox map in listing show page
- Rendered Mapbox GL map instance centered at property geographical coordinates.
- Timestamp: `2026-01-22 09:50:25`

### [2026-01-22] #55: style(maps): add custom pin marker and popup card to location map
- Created red marker with interactive popup displaying property title and location.
- Timestamp: `2026-01-22 13:40:15`

### [2026-01-22] #56: fix(maps): handle fallback coordinates for ambiguous address entries
- Defaulted to city-level centroid when specific street geocoding yields low confidence.
- Timestamp: `2026-01-22 17:25:50`

### [2026-01-23] #57: feat(security): configure connect-mongo for persistent session store
- Integrated MongoStore to retain user sessions in MongoDB rather than memory.
- Timestamp: `2026-01-23 10:15:40`

### [2026-01-23] #58: feat(security): set secure cookie attributes and maxAge duration
- Enforced httpOnly, 7-day cookie expiration, and environment-aware secure flags.
- Timestamp: `2026-01-23 14:30:10`

### [2026-01-23] #59: feat(security): sanitize mongo queries against NoSQL injection attempts
- Added input sanitization to block malicious MongoDB query operator injections.
- Timestamp: `2026-01-23 18:45:25`

### [2026-01-24] #60: feat(search): implement search functionality by destination country or title
- Added search query filter to index route matching listing titles and countries.
- Timestamp: `2026-01-24 09:30:15`

### [2026-01-24] #61: feat(filters): add category filter pills for iconic cities, rooms, and mountains
- Implemented category navigation filters with responsive horizontal scrollbar.
- Timestamp: `2026-01-24 13:15:50`

### [2026-01-24] #62: style(ui): polish navbar responsiveness and active state highlights
- Refined navigation bar branding, search bar styling, and dropdown menus.
- Timestamp: `2026-01-24 17:50:35`

### [2026-01-25] #63: feat(tax): add interactive GST tax toggle switch to listing prices
- Created client-side JavaScript toggle calculating dynamic 18% tax on rates.
- Timestamp: `2026-01-25 10:20:30`

