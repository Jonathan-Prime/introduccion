import { generateJwtToken } from "../../utils";
import { asyncHandler, CustomError } from "../../utils/asynHandler";
import User from "../models/user";
import bcrypt from "bcryptjs";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomError({
      message: "Por favor, completa todos los campos",
      status: 400,
    });
  }

  const normalizedEmail = email.toLowerCase();

  let existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    throw new CustomError({ message: "El usuario ya existe", status: 400 });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email: normalizedEmail,
    password: hashPassword,
  });

  res.status(200).send({ message: "El usuario se ha creado exitosamente" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError({
      message: "Por favor, completa todos los campos.",
      status: 400,
    });
  }

  const normalizedEmail = email.toLowerCase();

  let user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    throw new CustomError({ message: "El usuario no existe.", status: 400 });
  }

  if (user.password) {
    let isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new CustomError({ message: "Contraseña incorrecta.", status: 400 });
    }
  }

  const token = generateJwtToken({
    _id: user._id,
    name: user.name,
    email: user.email,
  });

  res.status(200).send({ token });
});

const getUsers = asyncHandler(async (req, res) => {
  let users = await User.find({}, "name email");

  res.status(200).send(users);
});

export { getUsers, loginUser, registerUser };
