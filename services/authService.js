import Prisma from "@prisma/client";
import jsonwebtoken from "jsonwebtoken";
import _ from "lodash";


const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET_KEY;


const generateAccessToken = (username, id) => {
  if (!id) {id = 0;}
  return jsonwebtoken.sign(
    { username: username.toLowerCase(), id: id }, 
    secret, 
    { expiresIn: '365d' }
  )
}


const getTokenFromRequest = (request) => {
  const token = request.headers["x-access-token"];
  if (token) {return token;}
  return false;
}


const getUser = async (id) => {
  if (!id) { return defaultUser; }
  return await prisma.user.findUnique({ where: { id: id } });
}


const getUserFromToken = async (token) => {
  return jsonwebtoken.verify(token, secret, async (err, decoded) => {
    if (err) {
      console.error(err);
      return false;
    }
    const userId = decoded.id;
    const username = decoded.username;

    return await getUserFromName(username);
  });
}


const getUserFromName = async (username) => {
  if (!username) { return defaultUser; }
  return await prisma.user.findUnique({ where: { username: username } });
}


const verifyToken = async (req, res, next) => {
  const token = await getTokenFromRequest(req);
  let user;
  if (token) {
    user = await getUserFromToken(token);
  }
  if (user) {
    req.currentUser = user;
  }
  else {
    req.currentUser = { id: 0, userAccessLevel: 1 }
  }
  next();
};


export default {
  generateAccessToken,
  getTokenFromRequest,
  getUser,
  getUserFromToken,
  getUserFromName,
  verifyToken
}; 