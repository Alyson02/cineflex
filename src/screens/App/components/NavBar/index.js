import { useLocation } from "react-router-dom";
import VoltarTela from "shared/components/VoltarTela";

const { default: styled } = require("styled-components");

const NavBarWrapper = styled.h1`
  font-family: "Roboto";
  font-size: 34px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 67px;
  color: #e8833a;
  background: #c3cfd9;
  position: relative;
`;

export default function NavBar() {
  const pathName = useLocation().pathname;
  console.log(pathName);

  return (
    <NavBarWrapper>
      {pathName !== "/" && <VoltarTela />}
      CINEFLIX
    </NavBarWrapper>
  );
}
