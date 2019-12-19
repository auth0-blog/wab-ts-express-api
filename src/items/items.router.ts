/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { Item } from "./item.interface";
import { Items } from "./items.interface";

import { checkJwt } from "../middleware/authz.middleware";
import { checkPermissions } from "../middleware/rbac.middleware";
import { ItemPermissions } from "./item-permissions";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items/

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Items = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);

    res.status(200).send(item);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// Mount authorization middleware

itemsRouter.use(checkJwt);

// POST items/

itemsRouter.post(
  "/",
  [checkJwt, checkPermissions(ItemPermissions.CreateItems)],
  async (req: Request, res: Response) => {
    try {
      const item: Item = req.body.item;

      await ItemService.create(item);

      res.sendStatus(201);
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
);

// PUT items/

itemsRouter.put(
  "/",
  [checkJwt, checkPermissions(ItemPermissions.UpdateItems)],
  async (req: Request, res: Response) => {
    try {
      const item: Item = req.body.item;

      await ItemService.update(item);

      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);

// DELETE items/:id

itemsRouter.delete(
  "/:id",
  [checkJwt, checkPermissions(ItemPermissions.DeleteItems)],
  async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await ItemService.remove(id);

      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);
