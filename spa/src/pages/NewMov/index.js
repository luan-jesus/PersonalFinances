import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";

import api from "../../services/api";

import TextInput from "../../components/TextInput";
import ComboBoxInput from "../../components/ComboBoxInput";
import DatePickerInput from "../../components/DatePickerInput";
import ButtonInput from "../../components/ButtonInput";
import Loading from "../../components/Loading";

import { Container, BoxContainer, Title, Table, THead, Tr, Td } from "./styles";

function NewMov() {
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movimento, setMovimento] = useState({
    tipo_movId: 2,
    data: new Date(),
    valor: 0,
    desc: "",
    subcategoriaId: 0,
  });

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
  }, []);

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
      <BoxContainer>
        <Title>Ultimas movimentações</Title>
        <Table cellSpacing={0}>
          <THead>
            <Tr>
              <Td>Nome</Td>
              <Td>Subcategoria</Td>
              <Td>Valor</Td>
              <Td>Data</Td>
              <Td>Tipo Movimento</Td>
            </Tr>
          </THead>
          <Tr>
            <Td>Zézinho</Td>
            <Td>subcategman</Td>
            <Td>R$ 12,34</Td>
            <Td>12/12/2020</Td>
            <Td>Entrada</Td>
          </Tr>
          <Tr>
            <Td>Zézinho</Td>
            <Td>subcategman</Td>
            <Td>R$ 12,34</Td>
            <Td>12/12/2020</Td>
            <Td>Entrada</Td>
          </Tr>
          <Tr>
            <Td>Zézinho</Td>
            <Td>subcategman</Td>
            <Td>R$ 12,34</Td>
            <Td>12/12/2020</Td>
            <Td>Entrada</Td>
          </Tr>
        </Table>
      </BoxContainer>
    </Container>
  );
}

export default NewMov;
