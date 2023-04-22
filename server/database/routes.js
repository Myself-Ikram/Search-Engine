import { Router } from "express";
import * as controller from "./controllers.js";
const router = Router();

router
  .route("/companies")
  .get(controller.getCompanies)
  .post(controller.insertCompanies)
  .delete(controller.deleteCompanies);

router
  .route("/ads")
  .get(controller.getAds)
  .post(controller.insertAds)
  .delete(controller.deleteAds);
export default router;
