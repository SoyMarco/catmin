import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";
import LogoWhiteTwittor from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";
import "./SignInSignUp.scss";

export default function SignInSignUp(props) {
  const { setRefreshCheckLogin } = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };

  return (
    //fluid ocupa toda la pagina
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent></LeftComponent>
          <RightComponent
            openModal={openModal}
            setShowModal={setShowModal}
            setRefreshCheckLogin={setRefreshCheckLogin}
          ></RightComponent>
        </Row>
      </Container>

      <BasicModal show={showModal} setShowModal={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={LogoTwittor} alt="Twittor" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Enterate de que está hablando la gente.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          únete a la conversación.
        </h2>
      </div>
    </Col>
    //<LeftComponent></LeftComponent>
  );
}

function RightComponent(props) {
  const { openModal, setShowModal, setRefreshCheckLogin } = props;
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoWhiteTwittor} alt="Twittor" />
        <h2>Mira lo que está sucediendo en el mundo en este momento.</h2>
        <h3>Únete a Twittor hoy mismo.</h3>
        <Button
          variant="primary"
          onClick={() =>
            openModal(<SignUpForm setShowModal={setShowModal}></SignUpForm>)
          }
        >
          Regístrate
        </Button>
        <Button
          variant="outline-primary"
          onClick={() =>
            openModal(
              <SignInForm
                setRefreshCheckLogin={setRefreshCheckLogin}
              ></SignInForm>
            )
          }
        >
          Iniciar sesión
        </Button>
      </div>
    </Col>
  );
}
