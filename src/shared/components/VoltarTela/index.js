import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function VoltarTela() {
  const navigate = useNavigate();

  return (
    <BackIcon viewBox="0 0 24 24" onClick={() =>   navigate(-1)}>
      <path d="m13.75 22.987-7.99-9c-.51-.57-.76-1.28-.76-1.99s.25-1.42.74-1.98c.01 0 .01-.01.01-.01l.02-.02 7.98-8.98a3.007 3.007 0 0 1 4.242-.25c1.24 1.1 1.35 3 .25 4.23l-6.23 7.01 6.23 7.01c1.1 1.24.99 3.13-.25 4.24-1.24 1.1-3.13.98-4.24-.26z" />
    </BackIcon>
  );
}

const BackIcon = styled.svg`
  fill: #e8833a;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translate(0, -50%);
`;
