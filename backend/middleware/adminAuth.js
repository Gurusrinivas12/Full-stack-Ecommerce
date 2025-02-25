import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
      const { token } = req.headers;
      console.log("Token received:", token); // Debugging line
      if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again" });
      }
      const token_decode = jwt.verify(token, process.env.JWT_SECRET);
      if (token_decode.email !== process.env.ADMIN_EMAIL) {
        return res.json({ success: false, message: "Not Authorized. Login Again" });
      }
      next();
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Invalid token" });
    }
  };
export default adminAuth  