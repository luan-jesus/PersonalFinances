-- Entradas por Mês/Ano
select to_char(data,'Mon') as "month", sum(valor)
from movimentacao
where "tipo_movId" = 1 and extract(year from data) = 2020
group by to_char(data,'Mon')

-- Saídas por Mês/Ano
select to_char(data,'Mon') as "month", sum(valor)
from movimentacao
where "tipo_movId" = 2 and extract(year from data) = 2020
group by to_char(data,'Mon')

-- Investimentos por Mês/Ano
select to_char(data,'Mon') as "month", sum(valor)
from movimentacao
where "tipo_movId" = 3 and extract(year from data) = 2020
group by to_char(data,'Mon')