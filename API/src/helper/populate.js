const { tipos_mov } = require("../models");

const add = async () => {
  const movEntrada = await tipos_mov.findOne({ where: { nome: "Entrada" } });
  const movSaida = await tipos_mov.findOne({ where: { nome: "Saída" } });
  if (!movEntrada) {
    await tipos_mov.create({ nome: "Entrada" });
    console.log("tipos_mov: Entrada. Created");
  }
  if (!movSaida) {
    await tipos_mov.create({ nome: "Saída" });
    console.log("tipos_mov: Saída. Created");
  }
};

add();