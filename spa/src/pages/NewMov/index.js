import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { FaSortDown, FaSortUp, FaSearch, FaRedo, FaBan } from "react-icons/fa";

import api from "../../services/api";

import TextInput from "../../components/TextInput";
import ComboBoxInput from "../../components/ComboBoxInput";
import DatePickerInput from "../../components/DatePickerInput";
import ButtonInput from "../../components/ButtonInput";
import Loading from "../../components/Loading";

import {
  Container,
  BoxContainer,
  Title,
  Table,
  THead,
  TBody,
  Tr,
  Td,
  TableContainer,
  SearchBox,
  SearchInput,
  SearchSubmit,
  TableFooter,
  TableFooterMessages,
  TableFooterLoadMore,
  ClearFilter,
} from "./styles";

function NewMov() {
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [movimento, setMovimento] = useState({
    tipo_movId: 2,
    data: new Date(),
    valor: 0,
    desc: "",
    subcategoriaId: 0,
  });
  const [movimentos, setMovimentos] = useState([]);
  const [movementsOffset, setMovementsOffset] = useState(0);
  const [movementsNumber, setMovementsNumber] = useState(0);

  const alert = useAlert();

  const tiposMov = [
    {
      id: 2,
      nome: "Saída",
    },
    {
      id: 3,
      nome: "Investimento",
    },
    {
      id: 1,
      nome: "Entrada",
    },
  ];

  useEffect(() => {
    getAllCategories();
    getAllMovements();
  }, []);

  const getAllMovements = async (idCall) => {
    console.log(
      "/movimentacao/items=15/offset=" +
        movementsOffset +
        "/filter=" +
        (filter || "nothing")
    );
    setLoading(true);
    await api
      .get(
        "/movimentacao/items=15/offset=" +
          movementsOffset +
          "/filter=" +
          (filter || "nothing")
      )
      .then((response) => {
        if (response.data.rows.length > 0) {
          if (!idCall) {

            setMovimentos([...movimentos, ...response.data.rows]);

            setMovementsOffset(movementsOffset + 1);

            if (movementsNumber + 15 < response.data.count) {
              setMovementsNumber(movementsNumber + 15);
            } else {
              setMovementsNumber(response.data.count);
            }
          } else {
            setMovimentos(response.data.rows);
          }
        }
      })
      .catch((err) => {
        alert.error(err.message);
      });

    setLoading(false);
  };

  const getAllCategories = async () => {
    await api
      .get("/categoria")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((err) => {
        alert.error(err.message);
      });

    await api
      .get("/subcategoria")
      .then((response) => {
        setSubcategorias(response.data);

        setMovimento({
          ...movimento,
          subcategoriaId: response.data[0].id,
        });

        setLoading(false);
      })
      .catch((err) => {
        alert.error(err.message);
      });
  };

  const handleCategoryChange = async (e) => {
    setLoading(true);
    await api
      .get("/categoria/subcategorias/" + e.target.value)
      .then((response) => {
        setSubcategorias(response.data);

        setMovimento({
          ...movimento,
          subcategoriaId: response.data[0]?.id,
        });

        console.log(response.data);

        setLoading(false);
      })
      .catch((err) => {
        alert.error(err.message);
      });
  };

  const sendRequest = async () => {
    setLoading(true);
    api
      .post("/movimentacao", movimento)
      .then((response) => {
        console.log("sucesso");
        setMovimento({
          tipo_movId: 2,
          data: new Date(),
          valor: 0,
          desc: "",
          subcategoriaId: 0,
        });
        alert.success("Sucesso");
        setLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          // Response status !== 2xx
          alert.error(err.response.data.error);
          setLoading(false);
        } else if (err.request) {
          alert.error(err.message);
          setLoading(false);
        } else {
          // Failed to call api
          alert.error(err.message);
          setLoading(false);
        }
      });
  };

  return (
    <Container>
      <Loading isLoading={loading} />
      <BoxContainer>
        <Title>Cadastrar nova movimentação</Title>
        <ComboBoxInput
          name="categoria"
          title="Categoria"
          data={categorias}
          onChange={handleCategoryChange}
        />
        <ComboBoxInput
          name="subcategoriaId"
          title="Subcategoria"
          data={subcategorias}
          onChange={(e) =>
            setMovimento({
              ...movimento,
              subcategoriaId: parseFloat(e.target.value),
            })
          }
        />
        <TextInput
          name="desc"
          title="Descrição:"
          onChange={(e) => setMovimento({ ...movimento, desc: e.target.value })}
        />
        <TextInput
          name="valor"
          title="Valor:"
          onChange={(e) =>
            setMovimento({
              ...movimento,
              valor: parseFloat(e.target.value.replace(/\,/g, ".")),
            })
          }
        />
        <ComboBoxInput
          name="tipo_movId"
          title="Tipo movimento"
          data={tiposMov}
          onChange={(e) =>
            setMovimento({
              ...movimento,
              tipo_movId: parseFloat(e.target.value),
            })
          }
        />
        <DatePickerInput
          selected={movimento.data}
          onChange={(date) => setMovimento({ ...movimento, data: date })}
        />
        <ButtonInput onClick={sendRequest} />
      </BoxContainer>
      <BoxContainer style={{ marginLeft: 0 }}>
        <Title>Ultimas movimentações</Title>
        <SearchBox>
          <SearchInput
            name="search"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <SearchSubmit onClick={() => getAllMovements(1323)}>
            <FaSearch color="#3D3D3D" size={22} />
          </SearchSubmit>
        </SearchBox>
        <ClearFilter>
          <FaBan />
          {" "}Limpar filtros e ordenação
        </ClearFilter>
        <TableContainer>
          <Table cellSpacing={0}>
            <THead>
              <Tr>
                <Td style={{ width: "40%" }}>
                  Nome
                  <FaSortDown />
                </Td>
                <Td style={{ width: "15%" }}>Subcategoria</Td>
                <Td style={{ width: "15%" }}>Valor</Td>
                <Td style={{ width: "15%" }}>Data</Td>
                <Td style={{ width: "15%" }}>Tipo Movimento</Td>
              </Tr>
            </THead>
            <Tr>
              <Td></Td>
            </Tr>
            <TBody>
              {movimentos?.map((mov) => {
                const x = new Date(mov.data)
                  .toLocaleString("pt-BR")
                  .split(" ")[0];
                const [day, month, year] = x.split(/-/g);
                return (
                  <Tr key={mov.id}>
                    <Td style={{ width: "40%" }}>{mov.desc}</Td>
                    <Td style={{ width: "15%" }}>{mov.subcategoria?.nome}</Td>
                    <Td style={{ width: "15%" }}>
                      R${" "}
                      {parseFloat(mov.valor)
                        .toFixed(2)
                        .toString()
                        .replace(/\./g, ",")}
                    </Td>
                    {/* <Td>{`${day}/${month}/${year}`}</Td> */}
                    <Td style={{ width: "15%" }}>{x}</Td>
                    <Td style={{ width: "15%" }}>{mov.tipos_mov?.nome}</Td>
                  </Tr>
                );
              })}
            </TBody>
          </Table>
        </TableContainer>
        <TableFooter>
          <TableFooterMessages>{movementsNumber} registros</TableFooterMessages>
          <TableFooterLoadMore onClick={getAllMovements}>
            Carregar mais {" "}
            <FaRedo />
          </TableFooterLoadMore>
        </TableFooter>
      </BoxContainer>
    </Container>
  );
}

export default NewMov;
