import { Customer } from "../models/customer.js";
import { matchedData, validationResult } from "express-validator";
import { hashPassword } from "../utils/helpers.js";

export const registerCustomerController = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() });
  }
  const data = matchedData(req);
  console.log(data);
  //TODO: Save the customer in database
};
