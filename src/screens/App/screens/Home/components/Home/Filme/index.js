import Imagem from "./Imagem";

const { default: styled } = require("styled-components");

const Filme = styled.div`
  display: inline-block;
  width: 145px;
  height: 209px;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

Filme.Imagem = Imagem;

export default Filme;
