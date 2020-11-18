const isAdmin = () => {
  return (req, res, next) => {
    if (!req.bikeshop.admin) {
      return res.status(401).json({ message: 'access denied' });
    }
    next();
  };
};

module.exports = isAdmin;
