import React, { useState } from "react";
import { uploadAudio } from "../api";
import styled from "styled-components";
import { motion } from "framer-motion";

const Form = styled.form`
  margin: 28px 0 18px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Uploader = styled.label`
  cursor: pointer;
  padding: 15px 32px;
  border-radius: 32px;
  background-color: #1e232e;
  border: 2px dashed #7ac6e5;
  color: #7ac6e5;
  font-size: 1.08rem;
  transition: box-shadow 0.18s;
  margin-bottom: 13px;
  box-shadow: ${({ dragging }) =>
    dragging ? "0 0 18px 0 #7ac6e577" : "none"};
  text-align: center;
  width: 100%;
`;

const Button = styled(motion.button)`
  background: linear-gradient(90deg,#3d4d68 0%, #2a465c 100%);
  color: #e9e9ea;
  font-weight: 700;
  border: none;
  border-radius: 36px;
  font-size: 1.09rem;
  padding: 10px 38px;
  box-shadow: 0 2px 10px #1520332e;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.18s, transform 0.14s;
  &:hover {
    background: linear-gradient(90deg,#1e232e 0%, #7ac6e5 100%);
    color: #191e2a;
    transform: scale(1.03);
  }
  &:disabled {
    background: #3d4d68;
    color: #787e8e;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  border: 3px solid #24293a;
  border-top: 3px solid #7ac6e5;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 0.9s linear infinite;
  margin-left: 12px;
  display: inline-block;
  @keyframes spin {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
  }
`;

function UploadForm({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await uploadAudio(file);
      onResult(result);
    } catch (err) {
      alert("Upload failed: " + err.message);
    }
    setLoading(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) {
      setFile(e.dataTransfer.files[0]);
    }
  }

  function handleDrag(e, flag) {
    e.preventDefault();
    setDragging(flag);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Uploader
        dragging={dragging}
        onDragOver={e => handleDrag(e, true)}
        onDragLeave={e => handleDrag(e, false)}
        onDrop={handleDrop}
      >
        {file ? `Selected: ${file.name}` : "Drag or click to upload audio file"}
        <input
          type="file"
          accept="audio/*"
          style={{ display: "none" }}
          onChange={e => setFile(e.target.files[0])}
        />
      </Uploader>
      <Button
        type="submit"
        disabled={loading || !file}
        whileTap={{ scale: 0.96 }}
      >
        {loading ? <Spinner /> : "Upload & Summarize"}
      </Button>
    </Form>
  );
}
export default UploadForm;
