import { addServices, getServices } from "../controllers/serviceController.js";
import express from "express";
const router = express.Router();

router.post("/addservice", addServices);
router.get("/getservices", getServices);

export default router;
