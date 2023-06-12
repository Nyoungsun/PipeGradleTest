import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from './img.jpg'

const App = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios("/main")
      .then((res) => setMessage(res.data))
  }, [])

  return (
    <div>
      <h1>Hello Hi</h1>
      <img src={img} alt='img'/>
      <ul>
        {
          message.map((text, index) => <li key={index}>{text}</li>)
        }
      </ul>
    </div>
  );
};

export default App;