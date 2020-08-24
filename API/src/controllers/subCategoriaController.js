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
    // const subCategoriasToReturn = await sub_categoria.findAll({
    //   attributes: ['id', 'nome', 'createdAt', 'updatedAt'],
    // });
    const subCategoriasToReturn = await subcategoria.findAll();
    res.status(200).send(subCategoriasToReturn);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

/** Selecionar subcategoria por id **/
router.get("/:categoriaId", async (req, res) => {
  const { categoriaId } = req.params;

  try {
    const categoriaToReturn = await categoria.findOne({
      where: { id: categoriaId },
    });
    return res.status(200).send(categoriaToReturn);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

/*
 * POST
 */

/** Cadastrar nova subcategoria **/
router.post("/", async (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).send({ error: "Nome é obrigatório" });
  }
  try {
    await categoria.create({ nome });
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
  const { id, nome } = req.body;

  if (!nome) return res.status(400).send({ error: "Nome é obrigatório" });

  if (!id) return res.status(400).send({ error: "Id é obrigatório" });

  try {
    const categoriaUpdate = await categoria.findOne({ where: { id } });

    if (!categoriaUpdate)
      return res
        .status(400)
        .send({ error: `Categoria de id=${id} inexistente` });

    await categoria.update(
      {
        nome,
      },
      {
        where: { id },
      }
    );

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
    const categoriaExcluir = await categoria.findOne({ where: { id } });

    if (!categoriaExcluir)
      return res
        .status(400)
        .send({ error: `Categoria de id=${id} inexistente` });

    await categoriaExcluir.destroy();

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
