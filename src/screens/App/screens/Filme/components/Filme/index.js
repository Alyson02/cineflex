import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import H1 from "shared/components/H1";
import Loading from "shared/components/Loading";
import ReqErro from "shared/components/ReqErro";
import Container from "./Container";
import Footer from "../../../../../../shared/components/Footer";
import Horarios from "./Horarios";

function Filme() {
  const { idFilme } = useParams();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
      )
      .then((res) => setFilme(res.data))
      .catch(() => setErro(true));
  }, [idFilme]);

  if (erro) return <ReqErro />;

  if (filme === null) return <Loading />;

  return (
    <>
      <H1>Selecione o horário</H1>
      <Container>
        {filme.days.map((day) => (
          <Horarios key={day.id}>
            <Horarios.Descricao data-identifier="session-date">
              {day.weekday} - {day.date}
            </Horarios.Descricao>
            <Horarios.BotaoWrapper>
              {day.showtimes.map((showtime) => (
                <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                  <Horarios.Botao data-identifier="hour-minute-btn">
                    {showtime.name}
                  </Horarios.Botao>
                </Link>
              ))}
            </Horarios.BotaoWrapper>
          </Horarios>
        ))}
      </Container>
      <Footer>
        <Footer.Imagem
          src={filme.posterURL}
          data-identifier="movie-img-preview"
        />
        <Footer.Descricao data-identifier="movie-and-session-infos-preview">
          {filme.title}
        </Footer.Descricao>
      </Footer>
    </>
  );
}

export default Filme;
