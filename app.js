import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);

  
  useEffect(() => {
    axios.get('/api/user-data')
      .then(response => {
        setCarbonFootprint(response.data.carbonFootprint);
        setTokenBalance(response.data.tokenBalance);
      });
  }, []);

  return (
    <div>
      <h1>EcoVision Dashboard</h1>
      <p>Your Carbon Footprint: {carbonFootprint} kg CO2</p>
      <p>Your Token Balance: {tokenBalance} Green Tokens</p>
      <button onClick={() => axios.post('/api/redeem-tokens')}>Redeem Tokens</button>
    </div>
  );
}
export default App;
