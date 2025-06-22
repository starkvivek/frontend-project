

Functionality

The application simulates a task generator based on a topic, similar to Google Gemini API. It allows users to:

1. Generate tasks from a topic
2. Save tasks to a database (in-memory)
3. Retrieve all tasks
4. Update a task
5. Delete a task

API Endpoints

The application exposes the following API endpoints:

1. POST /api/generate: Generates tasks from a topic and returns them in JSON format.
2. POST /api/tasks: Saves a task to the database and returns the saved task in JSON format.
3. GET /api/tasks: Retrieves all tasks from the database and returns them in JSON format.
4. PUT /api/tasks/:id: Updates a task with the specified ID and returns a success response in JSON format.
5. DELETE /api/tasks/:id: Deletes a task with the specified ID and returns a success response in JSON format.

Implementation

The application uses:

1. Express.js as the web framework
2. CORS middleware to enable cross-origin resource sharing
3. Body-parser middleware to parse JSON requests
4. An in-memory database to store tasks

