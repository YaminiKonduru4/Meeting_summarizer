# 🧠 Meeting Summarizer

A full-stack AI-powered web app that records, transcribes, and summarizes meeting audio into structured notes, key points, and action items.

---

## 📁 Project Structure

```
Meeting_summarizer/
├── backend/        # Server-side APIs for transcription & summarization
├── frontend/       # React-based UI for uploading and displaying summaries
├── Demo_video.mp4  # Demonstration of the working project
└── README.md
```

---

## 🚀 Features

- 🎤 **Upload or Record Audio** from meetings  
- 🧾 **Automatic Transcription** using a speech-to-text model  
- ✍️ **AI-based Summarization** of key decisions and tasks  
- 📋 **Downloadable Notes** and transcripts  
- 🖥️ **Clean & Simple UI** for user interaction  

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, HTML, CSS, JavaScript |
| **Backend** | Node.js / Express (or Flask, depending on your implementation) |
| **AI/NLP** | OpenAI API / Whisper / Hugging Face Transformers |
| **Speech-to-Text** | Whisper / Google Cloud Speech / Azure Speech |
| **Deployment** | Localhost / Docker-ready (optional) |

---

## 🧩 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YaminiKonduru4/Meeting_summarizer.git
cd Meeting_summarizer
```

### 2️⃣ Setup Backend
```bash
cd backend
# Install dependencies
npm install       # or pip install -r requirements.txt if Python backend
# Run the server
npm start         # or python app.py
```

### 3️⃣ Setup Frontend
```bash
cd ../frontend
npm install
npm run dev       # or npm start
```

### 4️⃣ Access the App
Visit: **http://localhost:3000**

---

## 🧠 How It Works

1. **User uploads or records** an audio file.  
2. **Backend** processes audio → converts to text using a speech recognition model.  
3. **Summarization module** condenses transcript using a transformer model.  
4. **Frontend** displays the summary, transcript, and key points in an interactive format.

---

## 📜 Example Output

**Transcript:**
> “We’ll deploy version 2 next week and start collecting user feedback.”

**AI Summary:**
- Deployment of v2 scheduled for next week  
- Begin user feedback collection after release  

---

## 🔮 Future Enhancements

- Real-time meeting summarization  
- Speaker diarization (identify who said what)  
- Multi-language support  
- Integration with Google Meet / Zoom APIs  
- Persistent storage (MongoDB / Firebase)

---

## 📺 Demo

🎥 Check out the demo video: `Demo_video.mp4`

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork this repo  
2. Create a new branch  
3. Make your changes  
4. Submit a PR  

---

## 🧾 License

This project is licensed under the **MIT License**.

---

## 💬 Acknowledgements

- OpenAI Whisper / GPT models  
- React community  
- JavaScript ecosystem  

---

> Built with ❤️ by **[Yamini Konduru](https://github.com/YaminiKonduru4)**
