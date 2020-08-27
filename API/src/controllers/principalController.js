/** External Modules **/
const express = require("express");

/** Internal Modules **/
const { categoria, subcategoria, movimentacao, tipos_mov, sequelize, Sequelize  } = require("../models");

const router = express.Router();

/*
 * GET
 */

/** Dashboard Entradas **/
router.post("/dashboard-entrada", async (req, res) => {
  const { ano } = req.body;

  if (!ano) return res.status(400).send({error: 'Ano é obrigatório'});

  try {

    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;


const Round = (decimal) => Math.round(decimal * 100) / 100