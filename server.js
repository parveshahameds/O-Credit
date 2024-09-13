const express = require('express');
const bodyParser = require('body-parser');
const { calculateCarbonFootprint } = require('./carbonCalculator');
const { issueTokens, getTokenBalance } = require('./blockchainService');

const app = express();
app.use(bodyParser.json());

app.get('/api/user-data', (req, res) => {
  const userCarbonFootprint = calculateCarbonFootprint(req.user);
  const userTokenBalance = getTokenBalance(req.user);
  
  res.json({
    carbonFootprint: userCarbonFootprint,
    tokenBalance: userTokenBalance
  });
});

app.post('/api/redeem-tokens', (req, res) => {
  issueTokens(req.user, -10); 
  res.json({ message: 'Tokens redeemed successfully!' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
