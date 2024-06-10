import { Router } from "express";
import { registerCustomerController } from "../controllers/auth.js";
import { checkSchema } from "express-validator";
import { registerCustomerValidationSchema } from "../utils/validationSchema.js";

const router = Router();

router.post(
  "/registercustomer",
  checkSchema(registerCustomerValidationSchema),
  registerCustomerController
);

export default router;
