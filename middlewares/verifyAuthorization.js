module.exports = async (req, res, next) => {
  const authenticatedUserId = res.locals.user.id;
  const userIdInparams = req.params.user_id;

  if (authenticatedUserId === userIdInparams) {
    next();
  } else {
    res.status(403).send({
      authorization: false,
      error: {
        status: res.statusCode,
        message: 'User is not authorized',
      },
    });
  }
};
