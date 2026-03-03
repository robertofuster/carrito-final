module.exports = (req, res, next) => {
  const adminKey = req.headers['x-admin-key'];

  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(403).json({
      message: 'Acceso denegado - Se requiere clave de administrador'
    });
  }

  next();
};