import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import SummaryDisplay from "./components/SummaryDisplay";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #181F24 0%, #21282e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`;

const Card = styled(motion.div)`
  background: #23283c;
  border-radius: 20px;
  box-shadow: 0 4px 18px rgba(8, 16, 40, 0.18);
  padding: 38px 30px;
  margin-top: 64px;
  min-width: 360px;
  max-width: 590px;
  color: #e9e9ea;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.3rem;
  font-weight: 900;
  letter-spacing: 1.5px;
  color: #7ac6e5;
  margin-bottom: 12px;
`;

function App() {
  const [result, setResult] = useState();

  return (
    <Container>
      <Card
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Heading>Meeting Summarizer</Heading>
        <UploadForm onResult={setResult} />
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <SummaryDisplay {...result} />
          </motion.div>
        )}
      </Card>
    </Container>
  );
}
export default App;
