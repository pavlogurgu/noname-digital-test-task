import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  let navigate = useNavigate();
  const [showAnimated3, setShowAnimated3] = useState(false);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <h2>Заглушка</h2>
      <section className="mb-3">
        <MDBNavbar dark bgColor="info">
          <MDBContainer fluid>
            <MDBNavbarToggler
              type="button"
              className="third-button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowAnimated3(!showAnimated3)}
            >
              <div className={`animated-icon3 ${showAnimated3 && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated3}>
          <div className="bg-light shadow-3 p-4">
            <MDBBtn block className="border-bottom m-0" color="link">
              <Link to='/users'>Редагування користувачів</Link>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Редагування поїздок
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 2
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>

      <button onClick={logout}>Log out</button>
    </>
  );
}
