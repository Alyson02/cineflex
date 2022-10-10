import styled from "styled-components";

export default function Dia({ assento, setAssento, assentosSelecionados }) {
  return (
    <DiaWrapper
      data-identifier="seat"
      onClick={() => setAssento(assento.id)}
      livre={assento.isAvailable}
      assentosSelecionados={assentosSelecionados}
      id={assento.id}
      disabled={assento.isAvailable === false ? true : false}
    >
      {assento.name}
    </DiaWrapper>
  );
}

const DiaWrapper = styled.button`
  border-radius: 50%;
  background: ${({ livre, assentosSelecionados, id }) =>
    ManipulaDiaColor(livre, assentosSelecionados, id).background};
  border: ${({ livre, assentosSelecionados, id }) =>
    ManipulaDiaColor(livre, assentosSelecionados, id).border};
  outline: none;
  width: 26px;
  height: 26px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  :disabled {
    filter: brightness(90%);
  }
`;

function ManipulaDiaColor(livre, assentosSelecionados, id) {
  const cores = {
    background: "#C3CFD9",
    border: "#7B8B99",
  };

  if (livre === false) {
    cores.background = "#FBE192";
    cores.border = "#F7C52B";
  }

  if (assentosSelecionados.includes(id)) {
    cores.background = "#1AAE9E";
    cores.border = "#0E7D71";
  }

  return cores;
}
