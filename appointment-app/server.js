const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let appointments = [];

app.get('/appointments', (req, res) => {
    res.json(appointments);
});

app.post('/appointments', (req, res) => {
    const appointment = req.body;
    appointments.push(appointment);
    res.status(201).json(appointment);
});

app.delete('/appointments/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < appointments.length) {
        appointments.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Appointment not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
