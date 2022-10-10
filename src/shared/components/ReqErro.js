const { default: styled } = require("styled-components");

const Alert = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin: 1rem;

  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;

export default function ReqErro(){
    return(
        <Alert>
            Erro de conexão, recarregue a página e tente novamente
        </Alert>
    )
}
