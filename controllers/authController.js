import bcrypt from 'bcrypt';
import authService from "../services/authService.js";

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await authService.getUserFromName(username);
  if (user) {
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      const token = authService.generateAccessToken(user.username, user.id);
      return res.json({ accessToken: token, user: { id: user.id, username: user.username } });
    }
  }
  return res.json({ message: "Username and/or Password is incorrect." });
}

const attachCurrentUser = async (req, res, next) => {
  try {
    const user = await getUserFromToken(getTokenFromRequest(req));
    if (!user) {
      return res.status(403).send({ message: "User does not exist." });
    }
    req.currentUser = user;
    return next();
  } catch(e) {
    return res.json(e).status(500);
  }
}

export default {
  login,
  attachCurrentUser
}