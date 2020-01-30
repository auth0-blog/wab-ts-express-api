import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import * as dotenv from "dotenv";

dotenv.config();

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_DOMAIN}.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `${process.env.AUTH0_DOMAIN}`,
  algorithms: ["RS256"]
});