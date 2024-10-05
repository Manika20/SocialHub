module.exports.setFlash = function (req, res, next) {
  //console.log("middleware", req.flash("success"));
  res.locals.flash = {
    success: req.flash("success"),
    error: req.flash("error"),
  };
  next();
};
