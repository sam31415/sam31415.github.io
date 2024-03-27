import { gameLoop, drawBackground } from '../../../js/cellular-automatons/gameFunctions.js';

console.log("Starting server setup...");

const express = require('express');
console.log("Express required");

const app = express();
console.log("App created");

app.use(express.json());
console.log("Middleware added");

// Serialize the grid data into JSON
app.get('/grid', (req, res) => {
    // Run the game loop and update the grid
    gameLoop();

    // Send the grid data to the client
    res.json(globalData.grid);
});

app.post('/grid-received', (req, res) => {
    // The client has received the grid data, you can now send the next one
    console.log('Grid data received by the client');
    res.sendStatus(200);
});  

// Start the server
console.log("Starting server...");
const port = 3000;  // Change this to your desired port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});