const { default: styled } = require("styled-components");
const { default: Botao } = require("./Botao");
const { default: BotaoWrapper } = require("./BotaoWrapper");
const { default: Descricao } = require("./Descricao");

const Horarios = styled.div`
  margin-bottom: 23px;
`;

Horarios.BotaoWrapper = BotaoWrapper;
Horarios.Botao = Botao;
Horarios.Descricao = Descricao;

export default Horarios;
