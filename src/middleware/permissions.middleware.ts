const jwtAuthz = require("express-jwt-authz");

export const checkPermissions = (permissions: string | string[]) => {
  return jwtAuthz([permissions], {
    customScopeKey: "permissions",
    checkAllScopes: true,
    failWithError: true
  });
};