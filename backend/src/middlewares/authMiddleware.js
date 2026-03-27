const jwt = require("jsonwebtoken");

const SECRET = "secreto_super_seguro";

module.exports = (req, res, next) => {

  console.log("HEADERS:", req.headers); // 👈 ACÁ

  const token = req.headers["authorization"];

  if (!token) {
    console.log("❌ NO HAY TOKEN");
    return res.status(401).json({ message: "No autorizado" });
  }

  try {

    const decoded = jwt.verify(token, SECRET);

    console.log("✔ TOKEN DECODIFICADO:", decoded); // 👈 EXTRA DEBUG

    req.user = decoded;

    next();

  } catch (error) {

    console.log("❌ TOKEN INVALIDO:", error.message); // 👈 EXTRA DEBUG

    res.status(401).json({ message: "Token inválido" });

  }

};