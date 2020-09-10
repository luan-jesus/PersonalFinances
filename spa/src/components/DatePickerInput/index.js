import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Container, Title } from "./styles";

import "./styles.css";

function DatePickerInput({ selected = new Date(), onChange = (date) => {} }) {
  return (
    <Container>
      <Title>Data</Title>
      <DatePicker
        className="redBorder"
        selected={selected}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
      />
    </Container>
  );
}

export default DatePickerInput;
