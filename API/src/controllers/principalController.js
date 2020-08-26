/** External Modules **/
const express = require("express");

/** Internal Modules **/
const { categoria, subcategoria, movimentacao, tipos_mov, sequelize, Sequelize  } = require("../models");

const router = express.Router();

/*
 * GET
 */

/** Dashboard **/
router.post("/dashboard-header", async (req, res) => {
  const { mes, ano } = req.body;

  if (typeof mes !== 'number') return res.status(400).send({error: 'Mês é obrigatório'});
  if (!ano) return res.status(400).send({error: 'Ano é obrigatório'});

  const dataInicio = new Date(ano, mes, 1);1
  const dataFim = new Date(ano, mes + 1, 1);

  try {
    let header = {
      entrada: 0,
      saida: 0,
      saldo: 0
    }
    const SomaEntrada = await movimentacao.findAll({
      attributes: [
        [sequelize.fn("sum", sequelize.col("valor")), "valor"],
      ],
      where: {
        createdAt: {
          [Sequelize.Op.gte]: dataInicio,
          [Sequelize.Op.lt]: dataFim,
        },
        tipo_movId: 1
      }
    });
    const SomaSaida = await movimentacao.findAll({
      attributes: [
        [sequelize.fn("sum", sequelize.col("valor")), "valor"],
      ],
      where: {
        createdAt: {
          [Sequelize.Op.gte]: dataInicio,
          [Sequelize.Op.lt]: dataFim,
        },
        tipo_movId: 2
      }
    });

    header.entrada = parseFloat(SomaEntrada[0].valor);
    header.saida = parseFloat(SomaSaida[0].valor);
    header.saldo = Round(header.entrada - header.saida);
    // const retorno = await categoria.findAll({
    //   attributes: ['id', 'nome'],
    //   include: [
    //     {
    //       attributes: [
    //         'id',
    //         'nome',
    //       ],
    //       model: subcategoria,
    //       required: false,
    //       include: [
    //         {
    //           attributes: ['id', 'desc', 'valor', 'tipo_movId'],
    //           model: movimentacao,
    //           required: false,
    //         }
    //       ]
    //     },
    //   ]
    // });
    res.status(200).send(header);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;


const Round = (decimal) => Math.round(decimal * 100) / 100