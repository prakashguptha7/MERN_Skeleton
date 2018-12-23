import User from "../models/user.model";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import config from "../../config/config";

const Signin = (req, res) => {
  User.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      if (err || !user) {
        return res.status(401).json({
          error: "User not found"
        });
      }
      if (!user.authenticate(req.body.password)) {
        return res.status(401).send({
          error: "Email and password don't match"
        });
      }
      const token = jwt.sign(
        {
          _id: user._id
        },
        config.jwtSecret
      );

      res.cookie("t", token, {
        expire: new Date() + 9999
      });
      return res.json({
        token,
        user: { _id: user._id, name: user.name, email: user.email }
      });
    }
  );
};

const Signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({
    message: "signed out"
  });
};

const RequireSignIn = expressJwt({
  secret: config.jwtSecret,
  userProperty: "auth"
});

const HasAuthorized = (req, res, next) => {
  const authroized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authroized) {
    return res.statu(403).json({
      error: "User is not Authorized"
    });
  }
  next();
};

export default { Signin, Signout, RequireSignIn, HasAuthorized };
