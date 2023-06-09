import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios("/main")
      .then((res) => setMessage(res.data))
  }, [])

  return (
    <div>
      <h1>Hi</h1>
      <ul>
        {
          message.map((text, index) => <li key={index}>{text}</li>)
        }
      </ul>
    </div>
  );
};

export default App;