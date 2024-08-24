import React, { useState } from "react"
import './App.css';

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App(){
  let [ipText,setIpText] = useState('');
  let [suggestedText,setSugText] = useState('')

  const handleInputChange = (e) => {
    const text = e.target.value;
    setIpText(e.target.value);

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSugText(firstCorrection || "" );
  };
  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={ipText}
          onChange={(e)=>handleInputChange(e)}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
    </div>
  );
}

export default App;
