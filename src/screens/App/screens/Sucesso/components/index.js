import { Link, useLocation } from "react-router-dom";
import H1 from "shared/components/H1";
import styled from "styled-components";

export default function Sucesso() {
  const { assentos, form, sessao } = useLocation().state;
  assentos.sort();

  console.log(assentos, form, sessao);

  return (
    <>
      <H1 color="#247A6B">Pedido feito com sucesso!</H1>
      <Container>
        <TextoWrapper data-identifier="movie-session-infos-reserve-finished">
          <H2>Filme e sessão</H2>
          <Paragrafo>{sessao.movie.title}</Paragrafo>
          <Paragrafo>
            {sessao.day.date} {sessao.name}
          </Paragrafo>
        </TextoWrapper>
        <TextoWrapper data-identifier="seat-infos-reserve-finished">
          <H2>Ingressos</H2>
          {assentos.map((assento) => {
            return (
              <Paragrafo>
                Assento {sessao.seats.find((x) => x.id === assento).name}
              </Paragrafo>
            );
          })}
        </TextoWrapper>
        <TextoWrapper data-identifier="buyer-infos-reserve-finished">
          <H2>Comprador</H2>
          <Paragrafo>Nome: {form.name}</Paragrafo>
          <Paragrafo>CPF: {form.cpf}</Paragrafo>
        </TextoWrapper>
        <Link to="/">
          <BtnWrapper>
            <Botao data-identifier="back-to-home-btn">Voltar para Home</Botao>
          </BtnWrapper>
        </Link>
      </Container>
    </>
  );
}

const H2 = styled.h2`
  color: #293845;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

const Paragrafo = styled.p`
  color: #293845;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
`;

const TextoWrapper = styled.div``;

const Container = styled.div`
  padding: 0 29px;
  display: flex;
  flex-direction: column;
  gap: 37px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Botao = styled.button`
  background: #e8833a;
  border-radius: 3px;
  color: white;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  width: 225px;
  height: 42px;
  border: none;
  margin-bottom: 20px;
`;
