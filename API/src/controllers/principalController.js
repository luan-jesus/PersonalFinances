/** External Modules **/
const express = require("express");

/** Internal Modules **/
const {
  categoria,
  subcategoria,
  movimentacao,
  tipos_mov,
  sequelize,
  Sequelize,
} = require("../models");

const router = express.Router();

/*
 * GET
 */

/** Dashboard Entradas **/
router.post("/dashboard", async (req, res) => {
  const { ano } = req.body;

  if (!ano) return res.status(400).send({ error: "Ano é obrigatório" });

  try {
    const entradaSql = `
      select to_char(data,'Mon') as "month", sum(valor) as "total", subcategoria.nome as "subcategoria"
      from movimentacao
      join subcategoria on "subcategoriaId" = subcategoria.id
      where "tipo_movId" = 1 and extract(year from data) = ${ano}
      group by to_char(data,'Mon'), "subcategoriaId", subcategoria
    `;

    const entradas = await sequelize.query(entradaSql, {
      raw: true,
      type: Sequelize.QueryTypes.SELECT,
    });

    const entradaTotalSql = `
      select to_char(data,'Mon') as "month", sum(valor) as "total"
      from movimentacao
      where "tipo_movId" = 1 and extract(year from data) = ${ano}
      group by to_char(data,'Mon')
    `;

    const entradasTotal = await sequelize.query(entradaTotalSql, {
      raw: true,
      type: Sequelize.QueryTypes.SELECT,
    });

    const saidaSql = `
      select to_char(data,'Mon') as "month", sum(valor) as "total", subcategoria.nome as "subcategoria"
      from movimentacao
      join subcategoria on "subcategoriaId" = subcategoria.id
      where "tipo_movId" = 2 and extract(year from data) = ${ano}
      group by to_char(data,'Mon'), "subcategoriaId", subcategoria
    `;

    const saidas = await sequelize.query(saidaSql, {
      raw: true,
      type: Sequelize.QueryTypes.SELECT,
    });

    const saidasTotalSql = `
    select to_char(data,'Mon') as "month", sum(valor) as "total"
    from movimentacao
    where "tipo_movId" = 2 and extract(year from data) = ${ano}
    group by to_char(data,'Mon')
  `;

    const saidasTotal = await sequelize.query(saidasTotalSql, {
      raw: true,
      type: Sequelize.QueryTypes.SELECT,
    });

    const investimentoSql = `
      select to_char(data,'Mon') as "month", sum(valor) as "total", subcategoria.nome as "subcategoria"
      from movimentacao
      join subcategoria on "subcategoriaId" = subcategoria.id
      where "tipo_movId" = 3 and extract(year from data) = ${ano}
      group by to_char(data,'Mon'), "subcategoriaId", subcategoria
    `;

    const investimentos = await sequelize.query(investimentoSql, {
      raw: true,
      type: Sequelize.QueryTypes.SELECT,
    });

    const investimentosTotalSql = `
    select to_char(data,'Mon') as "month", sum(valor) as "total"
    from movimentacao
    where "tipo_movId" = 3 and extract(year from data) = ${ano}
    group by to_char(data,'Mon')
  `;

    const investimentosTotal = await sequelize.query(investimentosTotalSql, {
      raw: true,
      type: Sequelize.QueryTypes.SELECT,
    });

    const entradaToReturn = formatData(entradas, entradasTotal);
    const saidasToReturn = formatData(saidas, saidasTotal);
    const investimentosToReturn = formatData(investimentos, investimentosTotal);

    const entradaTotalAnualSql = `
      select sum(valor) from movimentacao
      where "tipo_movId" = 1 and extract(year from data) = ${ano}
    `;

    const entradaTotalAnual = await sequelize.query(entradaTotalAnualSql, {
      raw: true,
      type: Sequelize.QueryTypes.SELECT,
    });

    const saidaTotalAnualSql = `
      select sum(valor) from movimentacao
      where "tipo_movId" = 2 and extract(year from data) = ${ano}
    `;

    const saidaTotalAnual = await sequelize.query(saidaTotalAnualSql, {
      raw: true,
      type: Sequelize.QueryTypes.SELECT,
    });

    const investimentoTotalAnualSql = `
      select sum(valor) from movimentacao
      where "tipo_movId" = 3 and extract(year from data) = ${ano}
    `;

    const investimentoTotalAnual = await sequelize.query(
      investimentoTotalAnualSql,
      {
        raw: true,
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    res.status(200).send({
      totalAnual: {
        entradas: entradaTotalAnual[0]["sum"] || "0",
        investimentos: investimentoTotalAnual[0]["sum"] || "0",
        saidas: saidaTotalAnual[0]["sum"] || "0",
        saldo: (
          Math.floor(
            (parseFloat(entradaTotalAnual[0]["sum"] || "0") -
              parseFloat(investimentoTotalAnual[0]["sum"] || "0") -
              parseFloat(saidaTotalAnual[0]["sum"] || "0")) *
              100
          ) / 100
        ).toString(),
      },
      entradas: entradaToReturn,
      investimentos: investimentosToReturn,
      saidas: saidasToReturn,
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;

const formatData = (data, dataTotal) => {
  return {
    Jan: {
      total: getMonthTotal(dataTotal, "Jan"),
      values: data.filter((row) => row.month === "Jan"),
    },
    Feb: {
      total: getMonthTotal(dataTotal, "Feb"),
      values: data.filter((row) => row.month === "Feb"),
    },
    Mar: {
      total: getMonthTotal(dataTotal, "Mar"),
      values: data.filter((row) => row.month === "Mar"),
    },
    Apr: {
      total: getMonthTotal(dataTotal, "Apr"),
      values: data.filter((row) => row.month === "Apr"),
    },
    May: {
      total: getMonthTotal(dataTotal, "May"),
      values: data.filter((row) => row.month === "May"),
    },
    Jun: {
      total: getMonthTotal(dataTotal, "Jun"),
      values: data.filter((row) => row.month === "Jun"),
    },
    Jul: {
      total: getMonthTotal(dataTotal, "Jul"),
      values: data.filter((row) => row.month === "Jul"),
    },
    Aug: {
      total: getMonthTotal(dataTotal, "Aug"),
      values: data.filter((row) => row.month === "Aug"),
    },
    Sep: {
      total: getMonthTotal(dataTotal, "Sep"),
      values: data.filter((row) => row.month === "Sep"),
    },
    Oct: {
      total: getMonthTotal(dataTotal, "Oct"),
      values: data.filter((row) => row.month === "Oct"),
    },
    Nov: {
      total: getMonthTotal(dataTotal, "Nov"),
      values: data.filter((row) => row.month === "Nov"),
    },
    Dec: {
      total: getMonthTotal(dataTotal, "Dec"),
      values: data.filter((row) => row.month === "Dec"),
    },
  };
};

const getMonthTotal = (dataTotal, month) => {
  const _ = dataTotal.filter((row) => row.month === month)[0];
  if (_) return _.total;
  else return "0";
};
