function calculateCarbonFootprint(user) {
  const energyUsage = user.energyUsage || 0;
  const travelDistance = user.travelDistance || 0;
  
  return (energyUsage * 0.5) + (travelDistance * 0.3); 
}

module.exports = { calculateCarbonFootprint };
