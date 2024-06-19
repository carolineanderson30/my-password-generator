import React, { useState } from 'react';
import './App.css';

function PasswordGenerator() 
{
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => 
  {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let allChars = '';
    if (includeUppercase) allChars += upper;
    if (includeLowercase) allChars += lower;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) 
    {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>
          Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min="8"
            max="128"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Include Lowercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <h2>Generated Password:</h2>
        <p>{password}</p>
      </div>
    </div>
  );
}

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Password Generator</h1>
      </header>
      <PasswordGenerator />
    </div>
  );
}

export default App;
