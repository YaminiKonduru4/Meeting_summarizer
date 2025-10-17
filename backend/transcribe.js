const fs = require("fs");
const { GoogleGenAI } = require("@google/genai");

async function transcribe(audioPath) {
    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    const base64AudioFile = fs.readFileSync(audioPath, { encoding: "base64" });
    const contents = [
        { text: "Generate a transcript of the speech." },
        {
            inlineData: {
                mimeType: "audio/mp3", 
                data: base64AudioFile
            }
        }
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents
    });

    return response.text;
}

module.exports = transcribe;
