const requestData = (req, res, next) => {
  req.all = () => Object.assign({}, req.params, req.body, req.query);
  next();
};

module.exports = requestData;
