// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Mock Gemini task generator (simulate Google Gemini API)
function mockGeminiTasks(topic) {
  return [
    Watch an intro video on ${topic},
    Read a beginner guide about ${topic},
    Try a hands-on project with ${topic},
    Join a community/forum for ${topic},
    Review your progress and revisit tough areas in ${topic}
  ];
}

let tasksDB = []; // In-memory DB
let taskId = 1;

app.use(cors());
app.use(bodyParser.json());

// Generate tasks from topic
app.post('/api/generate', (req, res) => {
  const { topic } = req.body;
  const tasks = mockGeminiTasks(topic).map(text => ({
    id: taskId++,
    text,
    completed: false
  }));
  res.json(tasks);
});

// Save task to DB
app.post('/api/tasks', (req, res) => {
  const task = { id: taskId++, ...req.body };
  tasksDB.push(task);
  res.json(task);
});

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasksDB);
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const updated = req.body;
  tasksDB = tasksDB.map(t => t.id == id ? { ...t, ...updated } : t);
  res.json({ success: true });
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasksDB = tasksDB.filter(t => t.id != id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT});
});