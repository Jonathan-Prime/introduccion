import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

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
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    // Extraer el token eliminando el prefijo "Bearer "
    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).send({ message: "Unauthorized" });

    // Verificar el token
    const decoded = await verify(token, process.env.JWT_SECRET as string);
    console.log(process.env.JWT_SECRET);

    // Asignar el usuario decodificado al objeto req
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
