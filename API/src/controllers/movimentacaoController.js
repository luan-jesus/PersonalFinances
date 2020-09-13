/** External Modules **/
const express = require("express");

/** Internal Modules **/
const { movimentacao, subcategoria, tipos_mov } = require("../models");

const router = express.Router();

/*
 * GET
 */

/** Selecionar todas movimentações por subcategoria **/
router.get("/subcategoria/:subcategoriaId", async (req, res) => {
  const { subcategoriaId } = req.params;

  try {
    const movimentos = await movimentacao.findAll({
      where: { subcategoriaId },
    });
    res.status(200).send(movimentos);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

/** 10 ultimas movimentações **/
router.get("/items=:items/offset=:offset/filter=:filter", async (req, res) => {
  const { items, offset, filter } = req.params;
  console.log(filter)

  if (parseInt(items) < 0){
    return res.status(400).json({ error: "Items não pode ser menor que 0" });
  }

  if (parseInt(offset) < 0){
    return res.status(400).json({ error: "Offset não pode ser menor que 0" });
  }

  try {
    const movimentos = await movimentacao.findAndCountAll({
      attributes: ['id', 'desc', 'valor', 'data', 'tipo_movId'],
      limit: parseInt(items),
      offset: parseInt(items) * parseInt(offset),
      order: [['id', 'desc']],
      include: [
        {
          model: subcategoria,
          attributes: ["nome"]
        },
        {
          model: tipos_mov,
          attributes: ['nome']
        }
      ]
    });
    res.status(200).send(movimentos);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

/*
 * POST
 */

/** Cadastrar nova movimentação **/
router.post("/", async (req, res) => {
  const { subcategoriaId, desc, valor, data, tipo_movId } = req.body;

  if (!subcategoriaId)
    return res.status(400).send({ error: "SubcategoriaId é obrigatório" });
  if (!desc) return res.status(400).send({ error: "Desc é obrigatório" });
  if (!valor) return res.status(400).send({ error: "Valor é obrigatório" });
  if (!data) return res.status(400).send({ error: "Data é obrigatória" });
  if (!tipo_movId)
    return res.status(400).send({ error: "Tipo_movId é obrigatório" });

  try {
    const subcategoriaReferencia = await subcategoria.findOne({
      where: { id: subcategoriaId },
    });
    const tipoMovReferencia = await tipos_mov.findOne({
      where: { id: tipo_movId },
    });

    if (!subcategoriaReferencia)
      return res.status(404).send({ error: "Subcategoria inexistente" });

    if (!tipoMovReferencia)
      return res.status(404).send({ error: "Tipo Movimento inexistente" });

    await movimentacao.create({
      subcategoriaId,
      desc,
      valor,
      data,
      tipo_movId,
    });
    return res.status(201).send();
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

/*
 * PUT
 */

/** Editar subcategoria **/
router.put("/", async (req, res) => {
  const { id, subcategoriaId, desc, valor, data, tipo_movId } = req.body;

  if (!id) return res.status(400).send({ error: "Id é obrigatório" });

  try {
    const movimentacaoUpdate = await movimentacao.findOne({
      attributes: ["subcategoriaId", "desc", "valor", "tipo_movId", "data"],
      where: { id },
    });
    const novaSubcategoria = await subcategoria.findOne({
      where: { id: subcategoriaId },
    });
    const novaTipoMov = await tipos_mov.findOne({
      where: { id: tipo_movId },
    });

    if (!movimentacaoUpdate)
      return res
        .status(400)
        .send({ error: `Movimentação de id=${id} inexistente` });

    if (!novaSubcategoria)
      return res
        .status(400)
        .send({ error: `Subcategoria de id=${subcategoriaId} inexistente` });

    if (!novaTipoMov)
      return res
        .status(400)
        .send({
          error: `Tipo de movimentação de id=${tipo_movId} inexistente`,
        });

    let movimentacaoAtualizada = movimentacaoUpdate.dataValues;

    if (subcategoriaId) movimentacaoAtualizada.subcategoriaId = subcategoriaId;
    if (desc) movimentacaoAtualizada.desc = desc;
    if (valor) movimentacaoAtualizada.valor = valor;
    if (tipo_movId) movimentacaoAtualizada.tipo_movId = tipo_movId;
    if (data) movimentacaoAtualizada.data = data;

    await movimentacao.update(movimentacaoAtualizada, {
      where: { id },
    });

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

/*
 * DELETE
 */

/** Excluir subcategoria **/
router.delete("/", async (req, res) => {
  const { id } = req.body;

  if (!id) return res.status(400).send({ error: "Id é obrigatório" });

  try {
    const movimentacaoExcluir = await movimentacao.findOne({ where: { id } });

    if (!movimentacaoExcluir)
      return res
        .status(400)
        .send({ error: `Movimentacao de id=${id} inexistente` });

    await movimentacaoExcluir.destroy();

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
