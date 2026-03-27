const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = "secreto_super_seguro";


// =====================
// REGISTER
// =====================

exports.register = async (req, res) => {

  try {

    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ message: "Usuario registrado" });

  } catch (error) {

    if(error.code === 11000){
      return res.status(400).json({
        message: "El usuario ya está registrado"
      });
    }

    res.status(500).json({ message: "Error al registrar usuario" });

  }

};


// =====================
// LOGIN
// =====================

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      SECRET,
      { expiresIn: "2h" }
    );

    res.json({ token });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


// =====================
// GET USERS (ADMIN)
// =====================

exports.getUsers = async (req, res) => {

  try {

    const users = await User.find().select("-password");

    res.json(users);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


// =====================
// UPDATE ROLE (ADMIN)
// =====================

exports.updateRole = async (req, res) => {

  try {

    const { id } = req.params;
    const { role } = req.body;

    if(!["user","admin"].includes(role)){
      return res.status(400).json({ message: "Rol inválido" });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    ).select("-password");

    res.json(user);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};