import {
  addServices,
  getServices,
  getsingleservice,
  updateService,
  deleteService
} from "../controllers/services.controller.js";
import express from "express";
const router = express.Router();

router.post("/addservice", addServices);
router.get("/getservices", getServices);
router.get("/getsingleservice/:id", getsingleservice);
router.put("/updateservice/:id", updateService);
router.delete("/deleteservice/:id", deleteService);

export default router;
