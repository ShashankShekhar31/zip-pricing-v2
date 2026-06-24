export function calculatePrice(zipCode) {

  const zones = {
    "75028": {
      region: "Texas",
      surcharge: 0,
    },
    "10001": {
      region: "New York",
      surcharge: 200,
    },
    "90210": {
      region: "California",
      surcharge: 300,
    },
  };

  const basePrice = 1499;

  const zone = zones[zipCode];

  if (!zone) {
    return 1999;
  }

  return basePrice + zone.surcharge;
}