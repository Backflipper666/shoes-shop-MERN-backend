module.exports = (req, res, next) => {
  res.header('Content-Range', 'shoes 0-10/10'); // Replace 'shoes' and '10' with the appropriate values for your response

  next();
};
