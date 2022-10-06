const { default: axios } = require("axios");
const { useState, useEffect } = require("react");
const { default: Filme } = require("./Filme");
const { default: Imagem } = require("./Filme/Imagem");
const { default: FilmeWrapper } = require("./FilmeWrapper");
const { default: Indicacao } = require("./Indicacao");

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
      .then((res) => setFilmes(res.data))
      .catch((erro) => setErro(true));
  }, []);

  return (
    <>
      <Indicacao>Selecione o filme</Indicacao>
      <FilmeWrapper>
        {filmes.map((filme) => (
          <Filme key={filme.id}>
            <Imagem src={filme.posterURL} />
          </Filme>
        ))}
      </FilmeWrapper>
    </>
  );
}

export default Home;
