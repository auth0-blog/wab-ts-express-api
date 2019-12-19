/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import HttpException from "../common/http-exception";

dotenv.config();

/**
 * Custom Interfaces
 */

export interface User {
  iss: string;
  sub: string;
  aud: string[];
  iat: number;
  exp: number;
  azp: string;
  scope: string;
  permissions?: string[];
}

export interface IRequest extends Request {
  user?: User;
}

/**
 * Authorization Middleware Function
 */

/**
 * Authorization Middleware Function
 */

export const checkPermissions = (permissions: string | string[]) => {
  return (request: IRequest, response: Response, next: NextFunction) => {
    if (!permissions) {
      next();
    }

    const { user } = request;

    if (!user) {
      next(new HttpException(403, "Unauthorized"));
    }

    if (user) {
      if (!user.permissions) {
        next(new HttpException(403, "Unauthorized"));
      }

      const { permissions: userPermissions } = user;

      const userPermissionsSet = new Set(userPermissions);

      let endpointPermissionsSet = Array.isArray(permissions)
        ? new Set(permissions)
        : new Set([permissions]);

      if (endpointPermissionsSet.size > userPermissionsSet.size) {
        next(new HttpException(403, "Unauthorized"));
      }

      for (const perm of Array.from(endpointPermissionsSet)) {
        if (!userPermissionsSet.has(perm)) {
          next(new HttpException(403, "Unauthorized"));
        }
      }

      next();

    }
  };
};
