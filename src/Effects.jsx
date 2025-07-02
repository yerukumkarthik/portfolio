import React from "react";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AskKarthikAI() {
  const [question, setQuestion] = useState('');
  const [booting, setBooting] = useState(false);
  const [response, setResponse] = useState(null);

  
  const handleAsk = async () => {
    if (!question.trim()) return;
    setBooting(true);
    setResponse(null);

    try {
      const res = await fetch('https://portfolio-server-vwqv.onrender.com/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setResponse({ text: data.answer });
    } catch (err) {
      setResponse({ text: 'Something went wrong. Please try again later.' });
    }

    setBooting(false);
  };

  return (
    <div className="builder-container" id="about">
      <h1 className="builder-title">🧠 Ask Me Anything (Powered by AI)</h1>
      <p className="subtext">Ask anything about my dev experience, projects, or skills</p>
      <input
        className="idea-input"
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button className="launch-btn" onClick={handleAsk} disabled={booting}>
        Ask
      </button>

      {booting && <p className="loading-text">🤖 Thinking...</p>}

      {response && (
        <motion.div
          className="system-box"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>{response.text}</p>
        </motion.div>
      )}
    </div>
  );
}
