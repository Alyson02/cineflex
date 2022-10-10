import Descricao from "./Descricao";
import styled from "styled-components";
import Imagem from "./Imagem";

const Footer = styled.footer`
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  padding: 14px 10px;
  display: flex;
  gap: 14px;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 117px;
`;

Footer.Imagem = Imagem;
Footer.Descricao = Descricao;

export default Footer;
