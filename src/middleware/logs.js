const logRequest = (req, res, next) => {
  console.log("Middleware Success", req.Path);
  next();
};

module.exports = logRequest;
