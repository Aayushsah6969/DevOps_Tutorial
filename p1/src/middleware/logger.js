const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const log = {
      level: "info",
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      responseTime: `${Date.now() - start}ms`,
      timestamp: new Date().toISOString()
    };

    console.log(JSON.stringify(log));
  });

  next();
};

module.exports = logger;