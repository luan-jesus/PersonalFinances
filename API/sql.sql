-- Entradas por Mês/Ano
select to_char(data,'Mon') as "month", extract(year from data) as year, sum(valor)
from movimentacao
where "tipo_movId" = 1
group by to_char(data,'Mon'), year

-- Saídas por Mês/Ano
select to_char(data,'Mon') as "month", extract(year from data) as year, sum(valor)
from movimentacao
where "tipo_movId" = 2
group by to_char(data,'Mon'), year

-- Investimentos por Mês/Ano
select to_char(data,'Mon') as "month", extract(year from data) as year, sum(valor)
from movimentacao
where "tipo_movId" = 3
group by to_char(data,'Mon'), year