import styled from "styled-components";

const legendas = [
  {
    descricao: "Selecionado",
  },
  {
    descricao: "Disponível",
  },
  {
    descricao: "Indisponível",
  },
];

export default function Legenda() {
  return (
    <LegendaWrapper>
      {legendas.map((legenda, i) => (
        <ItemLegendaWrapper>
          <ItemLegenda tipo={legenda.descricao} />
          <p>{legenda.descricao}</p>
        </ItemLegendaWrapper>
      ))}
    </LegendaWrapper>
  );
}

const LegendaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemLegenda = styled.div`
  border-radius: 50%;
  background: ${({ tipo }) => handleItemLegendaColor(tipo).background};
  border: 1px solid ${({ tipo }) => handleItemLegendaColor(tipo).border};
  outline: none;
  width: 26px;
  height: 26px;
`;

const ItemLegendaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: #4e5a65;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
`;

function handleItemLegendaColor(tipo) {
  switch (tipo) {
    case "Selecionado":
      return {
        background: "#1AAE9E",
        border: "#0E7D71",
      };
    case "Disponível":
      return {
        background: "#C3CFD9",
        border: "#7B8B99",
      };
    default:
      return {
        background: "#FBE192",
        border: "#F7C52B",
      };
  }
}
