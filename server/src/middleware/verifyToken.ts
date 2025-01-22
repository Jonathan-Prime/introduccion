import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import mongoose from "mongoose";
const { ObjectId } = require('mongoose');

type User = {
  _id: string;
  name: string;
  email: string;
};

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token: string | string[] | undefined = req?.headers?.token;

    if (Array.isArray(token)) {
      token = token[0];
    }

    if (!token) {
      req.user = { _id: new mongoose.Types.ObjectId().toHexString(), name: 'Visitante', email: 'guest@example.com' };
      return next();
    }

    let decoded = await verify(token, process.env.JWT_SECRET as string);
    console.log('decodificado', decoded)
    req.user = decoded as User;
    next();
  } catch (error: any) {
    console.log(error);
    if (error.message === "jwt expired") {
      return res.status(401).send({ message: "Unauthorized" });
    }

    res.status(400).send({ message: "Error" });
  }
};

export default verifyToken;
