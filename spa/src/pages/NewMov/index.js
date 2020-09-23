import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import {
  FaSortDown,
  FaSearch,
  FaBan,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";

import api from "../../services/api";

import TextInput from "../../components/TextInput";
import ComboBoxInput from "../../components/ComboBoxInput";
import DatePickerInput from "../../components/DatePickerInput";
import ButtonInput from "../../components/ButtonInput";
import Loading from "../../components/Loading";
import ErrorScreen from "../../components/ErrorScreen";

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
  TableFooterPagination,
  TableFooterPaginationIcon,
  TableFooterPaginationInput,
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
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(1);
  const [totalMovement, setTotalMovements] = useState(0);
  const [error, setError] = useState({
    show: false,
    status: 0,
    title: "",
    message: "",
  });

  const alert = useAlert();

  useEffect(() => {
    getAllMovements();
  }, [pageNumber]);

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

  const getAllMovements = async () => {
    console.log(
      "/movimentacao/items=15/offset=" +
        (pageNumber - 1) +
        "/filter=" +
        (filter || "nothing")
    );
    setLoading(true);
    await api
      .get(
        "/movimentacao/items=15/offset=" +
          (pageNumber - 1) +
          "/filter=" +
          (filter || "nothing")
      )
      .then((response) => {
        setMovimentos(response.data.rows);
        setTotalMovements(response.data.count);

        const totalPagesBroken = response.data.count / 15;
        const [number, decimal] = totalPagesBroken.toString().split(".");

        if (decimal) {
          setTotalPageNumber(parseInt(number) + 1);
        } else {
          setTotalPageNumber(number);
        }
      })
      .catch((err) => {
        setError({
          show: true,
          status: err?.response?.status,
          title: 'Something went wrong!',
          message: err.message
        })
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
        setError({
          show: true,
          status: err?.response?.status,
          title: 'Something went wrong!',
          message: err.message
        })
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
        setError({
          show: true,
          status: err?.response?.status,
          title: 'Something went wrong!',
          message: err.message
        })
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
        setError({
          show: true,
          status: err?.response?.status,
          title: 'Something went wrong!',
          message: err.message
        })
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
        getAllMovements();
      })
      .catch((err) => {
        if (err.response) {
          // Response status !== 2xx
          setError({
            show: true,
            status: err?.response?.status,
            title: 'Something went wrong!',
            message: err.response.data.error
          })
          setLoading(false);
        } else if (err.request) {
          setError({
            show: true,
            status: err?.response?.status,
            title: 'Something went wrong!',
            message: err.message
          })
          setLoading(false);
        } else {
          // Failed to call api
          setError({
            show: true,
            status: err?.response?.status,
            title: 'Something went wrong!',
            message: err.message
          })
          setLoading(false);
        }
      });
  };

  return (
    <Container>
      {error.show ? (
        <ErrorScreen status={error.status} title={error.title} message={error.message} />
      ) : (
        <>
      <Loading isLoading={loading} />
      <div>
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
      </div>
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
            <FaSearch color="#fff" size={14} />
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
            <TBody>
              <Tr>
                <Td
                  style={{
                    borderBottom: "1px solid #c4c4c4",
                    borderLeft: "none",
                    borderRight: "none",
                    padding: 3,
                  }}
                ></Td>
              </Tr>
              {movimentos?.map((mov) => {
                const date = new Date(mov.data)
                  .toLocaleString("pt-BR")
                  .split(" ")[0];
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
                    <Td style={{ width: "15%" }}>{date}</Td>
                    <Td style={{ width: "15%" }}>{mov.tipos_mov?.nome}</Td>
                  </Tr>
                );
              })}
            </TBody>
          </Table>
        </TableContainer>
        <TableFooter>
          <TableFooterMessages>
            Total de registros: {totalMovement}
          </TableFooterMessages>
          <TableFooterPagination>
            <TableFooterPaginationIcon
              onClick={() => {
                if (pageNumber - 1 > 0) {
                  setPageNumber(pageNumber - 1);
                }
              }}
            >
              <FaAngleLeft />
            </TableFooterPaginationIcon>
            Página
            <TableFooterPaginationInput
              value={pageNumber}
              onChange={(e) => setPageNumber(e.target.value)}
            />
            de {totalPageNumber}
            <TableFooterPaginationIcon
              onClick={() => {
                console.log(pageNumber);
                if (pageNumber + 1 <= totalPageNumber) {
                  setPageNumber(parseInt(pageNumber || 0) + 1);
                }
              }}
            >
              <FaAngleRight />
            </TableFooterPaginationIcon>
          </TableFooterPagination>
        </TableFooter>
      </BoxContainer>
      </>
      )}
    </Container>
  );
}

export default NewMov;
