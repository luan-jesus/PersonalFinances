/** External Modules **/
const express = require("express");

/** Internal Modules **/
const { categoria } = require("../models");

const router = express.Router();

/*
 * GET
 */

/** Get exemplo **/
router.get("/", async (req, res) => {
  const { userId } = req.params;

  try {
    res.status(201).send({
      this: "is",
      the: "body",
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
