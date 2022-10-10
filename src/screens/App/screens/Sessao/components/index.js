/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "shared/components/Footer";
import H1 from "shared/components/H1";
import Loading from "shared/components/Loading";
import ReqErro from "shared/components/ReqErro";
import styled from "styled-components";
import Calendario from "./Mapa";
import Formulario from "./Formulario";

export default function Sessao() {
  const [sessao, setSessao] = useState(null);
  const { idSessao } = useParams();
  const [erro, setErro] = useState(false);
  const [assentos, setAssentos] = useState([]);
  const [form, setForm] = useState({
    ids: [],
    name: "",
    cpf: "",
  });
  const navigate = useNavigate();

  function finalizarForm(e) {
    e.preventDefault();

    console.log("Form", form);
    console.log("Assentos", assentos);

    const novoForm = { ...form, ids: assentos };

    setForm(novoForm);
    axios
      .post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        novoForm
      )
      .then((res) => {
        console.log(res);
        navigate("/sucesso", {
          state: { form: form, sessao: sessao, assentos: assentos },
        });
      })
      .catch(() => setErro(true));
  }

  function manipulaAssentos(id) {
    if (assentos.includes(id)) {
      const idsFiltrados = assentos.filter((x) => x !== id);
      setAssentos(idsFiltrados);
    } else {
      setAssentos([...assentos, id]);
    }
  }

  function manipulaForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
      )
      .then((res) => setSessao(res.data))
      .catch(() => setErro(true));
  }, []);

  if (erro) return <ReqErro />;

  if (sessao === null) return <Loading />;

  return (
    <SessaoWrapper>
      <H1>Selecione o(s) assento(s)</H1>
      <Calendario
        assentos={sessao.seats}
        setAssento={manipulaAssentos}
        assentosSelecionados={assentos}
      />
      <Formulario
        manipulaForm={manipulaForm}
        finalizarForm={finalizarForm}
        form={form}
      />
      <Footer>
        <Footer.Imagem src={sessao.movie.posterURL} data-identifier="movie-img-preview"/>
        <Footer.Descricao data-identifier="movie-and-session-infos-preview">
          {sessao.movie.title}
          <br />
          {sessao.day.weekday} - {sessao.name}
        </Footer.Descricao>
      </Footer>
    </SessaoWrapper>
  );
}

const SessaoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 117px 20px;
`;
