import axios from "axios";

export async function uploadAudio(file) {
    const formData = new FormData();
    formData.append("audio", file);
    const response = await axios.post("http://localhost:8080/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
    });
    return response.data;
}
