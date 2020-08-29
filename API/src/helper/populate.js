const { tipos_mov, categoria, subcategoria, movimentacao } = require("../models");

const add = async () => {
  const movEntrada = await tipos_mov.findOne({ where: { nome: "Entrada" } });
  const movSaida = await tipos_mov.findOne({ where: { nome: "Saída" } });
  const Investimento = await tipos_mov.findOne({where: { nome: "Investimento" } });
  
  if (!movEntrada) {
    await tipos_mov.create({ nome: "Entrada" });
    console.log("tipos_mov: Entrada. Created");
  }
  if (!movSaida) {
    await tipos_mov.create({ nome: "Saída" });
    console.log("tipos_mov: Saída. Created");
  }
  if (!Investimento) {
    await tipos_mov.create({ nome: "Investimento" });
    console.log("tipos_mov: Investimento. Created");
  }

  categoria.bulkCreate([
    {
      nome: 'Receitas',
    },
    {
      nome: 'Investimentos',
    },
    {
      nome: 'Fixas',
    },
    {
      nome: 'Variáveis',
    },
    {
      nome: 'Extras',
    },
    {
      nome: 'Adicionais',
    },
  ])
  // const todasCategorias = await categoria.findAll({ attributes: ["id"] });

  // todasCategorias.map(async (categoria) => {
  //   const id = categoria.id;

  //   for (let x = 0; x < 3; x++) {
  //     await subcategoria.create({
  //       categoriaId: id,
  //       nome: `subcategoria ${x} categoria ${id}`
  //     });
  //   }
  // });

  // for (i = 1; i <= 3; i++) {

  //   for (let x = 0; x < 10; x++) {
  //     try {
  //       await movimentacao.create({
  //         subcategoriaId: x,
  //         desc: `Tipo: ${i}, subcategoria: ${x}`,
  //         valor: Math.round((Math.random() * (Math.floor(Math.random() * 100) + 1)) * 100) / 100,
  //         data: new Date(2020, Math.floor(Math.random() * 11 ), Math.floor(Math.random() * 28) + 1),
  //         tipo_movId: i,
  //       });
  //     } catch(e) {
  //       console.log(`Subcategoria inexistente: ${x}`)
  //     }
  //   }
  // }
};

add();
