import styled from "styled-components";

export default function Formulario({ manipulaForm, form, finalizarForm }) {
  console.log(form);

  return (
    <Form onSubmit={finalizarForm}>
      <fieldset>
        <Label>Nome do comprador</Label>
        <Input
          data-identifier="buyer-name-input"
          required
          type="text"
          placeholder="Digite seu nome..."
          name="name"
          onChange={manipulaForm}
          value={form.name}
        />
      </fieldset>
      <fieldset>
        <Label>CPF do comprador</Label>
        <Input
          data-identifier="buyer-cpf-input"
          required
          type="text"
          placeholder="Digite seu CPF..."
          name="cpf"
          onChange={manipulaForm}
          value={form.cpf}
        />
      </fieldset>
      <Botao data-identifier="reservation-btn" type="submit">
        Reservar assento(s)
      </Botao>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #293845;
`;

const Input = styled.input`
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  width: 100%;
  height: 50px;

  ::placeholder {
    color: #afafaf;
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
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
  margin: 57px auto 20px auto;
`;
