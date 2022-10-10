import styled from "styled-components";
import Dia from "./Assento";
import Legenda from "./Legenda";

export default function Calendario({ assentos, setAssento, assentosSelecionados }) {
  console.log(assentos)
  return (
    <>
      <ContainerCalendario>
        {assentos.map((assento) => (
          <Dia
            assento={assento}
            setAssento={setAssento}
            assentosSelecionados={assentosSelecionados}
          />
        ))}
      </ContainerCalendario>
      <Legenda/>
    </>
  );
}

const ContainerCalendario = styled.div`
  display: flex;
  gap: 7px 18px;
  flex-wrap: wrap;
  justify-content: start;
`;
