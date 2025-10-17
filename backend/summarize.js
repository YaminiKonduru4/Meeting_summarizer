const { GoogleGenAI } = require("@google/genai");

async function summarize(transcript) {
    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    const prompt = `
Summarize this meeting transcript. Provide:
1. A concise paragraph of summary.
2. A bullet list of key decisions.
3. A bullet list of action items.
Transcript:
${transcript}
    `;
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ text: prompt }]
    });
    const fullText = response.text;
    // Basic line parsing for action items
    const actionItems = fullText.split('\n').filter(
        (line) => line.trim().startsWith('-') && line.toLowerCase().includes('action')
    );
    return {
        summary: fullText,
        actionItems
    };
}

module.exports = summarize;
