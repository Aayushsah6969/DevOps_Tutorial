const getProducts = (req, res) => {
  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 }
  ];

  res.status(200).json({
    data: products,
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getProducts
};