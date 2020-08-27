/** External Modules **/
const express = require("express");

/** Internal Modules **/
const { categoria, subcategoria } = require("../models");

const router = express.Router();

/*
 * GET
 */

/** Selecionar todas subcategorias **/
router.get("/", async (req, res) => {
  try {
    const subcategoriasToReturn = await subcategoria.findAll();
    res.status(200).send(subcategoriasToReturn);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

/** Selecionar subcategoria por id **/
router.get("/:subcategoriaId", async (req, res) => {
  const { subcategoriaId } = req.params;

  try {
    const subcategoriaToReturn = await subcategoria.findOne({
      where: { id: subcategoriaId },
    });
    return res.status(200).send(subcategoriaToReturn);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

/*
 * POST
 */

/** Cadastrar nova subcategoria **/
router.post("/", async (req, res) => {
  const { nome, categoriaId } = req.body;

  if (!nome) return res.status(400).send({ error: "Nome é obrigatório" });
  if (!categoriaId)
    return res.status(400).send({ error: "categoriaId é obrigatório" });

  try {
    const categoriaReferencia = await categoria.findOne({
      where: { id: categoriaId },
    });

    if (!categoriaReferencia)
      return res.status(404).send({ error: "Categoria inexistente" });

    await subcategoria.create({ categoriaId: categoriaId, nome });
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
  const { id, nome, categoriaId } = req.body;

  if (!id) return res.status(400).send({ error: "Id é obrigatório" });

  try {
    const subcategoriaUpdate = await subcategoria.findOne({
      attributes: ["nome", "categoriaId"],
      where: { id },
    });

    if (categoriaId) {
      const novaCategoria = await categoria.findOne({
        where: { id: categoriaId },
      });
      
      if (!novaCategoria)
      return res
        .status(400)
        .send({ error: `Categoria de id=${categoriaId} inexistente` });
    }
    if (!subcategoriaUpdate)
      return res
        .status(400)
        .send({ error: `Subcategoria de id=${id} inexistente` });

    var subcategoriaAtualizada = subcategoriaUpdate.dataValues;

    if (nome) subcategoriaAtualizada.nome = nome;

    if (categoriaId) subcategoriaAtualizada.categoriaId = categoriaId;

    await subcategoria.update(subcategoriaAtualizada, {
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
    const subcategoriaExcluir = await subcategoria.findOne({ where: { id } });

    if (!subcategoriaExcluir)
      return res
        .status(400)
        .send({ error: `Subcategoria de id=${id} inexistente` });

    await subcategoriaExcluir.destroy();

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
