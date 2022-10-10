import { Link } from "react-router-dom";
import H1 from "shared/components/H1";
import Loading from "shared/components/Loading";
import ReqErro from "shared/components/ReqErro";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");
const { default: Filme } = require("./Filme");
const { default: Imagem } = require("./Filme/Imagem");
const { default: FilmeWrapper } = require("./FilmeWrapper");

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
      .then((res) => setFilmes(res.data))
      .catch(() => setErro(true));
  }, []);

  if (erro) return <ReqErro />;

  if (filmes.length === 0) return <Loading />;

  return (
    <>
      <H1>Selecione o filme</H1>
      <FilmeWrapper>
        {filmes.map((filme) => (
          <Link key={filme.id} to={`/sessao/${filme.id}`}>
            <Filme data-identifier="movie-outdoor">
              <Imagem src={filme.posterURL} />
            </Filme>
          </Link>
        ))}
      </FilmeWrapper>
    </>
  );
}

export default Home;
