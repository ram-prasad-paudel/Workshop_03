// Task 1 – Create Express App & Define Port
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Task 2 – Serve Static Files (HTML, CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
// Task 3 – Add Route Handlers for Pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Task 4 – Create API Endpoint
app.get('/api/time', (req, res) => {
    res.json({
        currentTime: new Date().toISOString(),
        timestamp: Date.now()
    });
});
// Task 5 – Error Handling Middleware
// 404 Not Found Middleware (must be placed after all routes)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// 500 Server Error Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});