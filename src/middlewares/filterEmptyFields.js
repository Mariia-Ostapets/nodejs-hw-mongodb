export const filterEmptyFields = (req, res, next) => {
  Object.keys(req.body).forEach((key) => {
    if (
      req.body[key] === '' ||
      req.body[key] === null ||
      req.body[key] === undefined
    ) {
      delete req.body[key];
    }
  });
  next();
};
