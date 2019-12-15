const identity = a => a;


exports.validateParam = function (param, cb = identity) {
  return function (req, res, next) {
    const value = req.params[param];

    if (!cb(value)) {
      return res.status(400).send(`Param ${param} is required`);
    }

    next();
  }
};
