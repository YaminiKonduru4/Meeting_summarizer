require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const transcribe = require('./transcribe');
const summarize = require('./summarize');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: path.join(__dirname, 'uploads/') });

app.post('/api/upload', upload.single('audio'), async (req, res) => {
    try {
        console.log('Received file:', req.file);
        const transcript = await transcribe(req.file.path);
        const summaryRes = await summarize(transcript);
        res.json({
            transcript,
            summary: summaryRes.summary,
            actionItems: summaryRes.actionItems
        });
    } catch (err) {
        console.error('Error in /api/upload:', err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
