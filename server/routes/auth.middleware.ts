module.exports = (req, res, next) => {
  try {
    console.log(req.headers.authentication);
    const token = req.headers.authentication;
    if (token === 'very-good-authentication') {
      next();
    } else {
      throw 'Unauthorized';
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error,
      message: 'Du har inte det hemliga lösenordet'
    });
  }
};
