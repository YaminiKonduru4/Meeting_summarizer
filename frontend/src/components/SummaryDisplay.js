import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  margin-bottom: 22px;
  background: #23283c;
  padding: 18px 20px;
  border-radius: 14px;
  box-shadow: 0 2px 8px #181f2477;
  color: #e9e9ea;
  word-break: break-word;
  overflow-x: auto;
  max-width: 520px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.23rem;
  color: #7ac6e5;
  margin-bottom: 7px;
  letter-spacing: 0.5px;
`;

const Pre = styled.pre`
  background: none;
  margin: 0;
  font-family: inherit;
  font-size: 1rem;
  color: #e9e9ea;
  white-space: pre-wrap;
  word-break: break-word;
`;

const Ul = styled.ul`
  margin: 7px 0 0 12px;
  color: #a6dbe6;
`;

export default function SummaryDisplay({ transcript, summary, actionItems }) {
  return (
    <>
      <Section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.43, delay: 0.1 }}
      >
        <Title>Transcript</Title>
        <Pre>{transcript}</Pre>
      </Section>
      <Section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.43, delay: 0.16 }}
      >
        <Title>Summary</Title>
        <Pre>{summary}</Pre>
      </Section>
      <Section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.43, delay: 0.22 }}
      >
        <Title>Action Items</Title>
        <Ul>
          {actionItems && actionItems.length > 0
            ? actionItems.map((item, i) => <li key={i}>{item}</li>)
            : <li>No action items found.</li>
          }
        </Ul>
      </Section>
    </>
  );
}
