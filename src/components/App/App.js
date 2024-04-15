import logo from "../../logo.svg";
import "../App/App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegisterModal = () => {
    setActiveModal("register");
    console.log(activeModal);
  };

  const handleLoginModal = () => {
    setActiveModal("signin");
    console.log(activeModal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
    // setSelectedCard({});
  };

  function handleAltModal(alt) {
    handleCloseModal();
    setActiveModal(alt);
  }

  function handleRegistration(request) {
    //placeholder until signup request can be done
    setIsLoading(true);
    console.log("registering");
    // signUp(request) goes here
    setIsLoggedIn(true);
    handleCloseModal(true);
    setIsLoading(false);
  }

  function handleLogin(request) {
    //placeholder until signin request can be done
    setIsLoading(true);
    console.log("logging in");
    // signIn(request) goes here
    setIsLoggedIn(true);
    handleCloseModal(true);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal
    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  return (
    <div className="page">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header
              onRegisterModal={handleRegisterModal}
              onLoginModal={handleLoginModal}
              isLoggedIn={isLoggedIn}
            />
            <Main />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "register" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            onRegistration={handleRegistration}
            isOpen={activeModal === "register"}
            isLoading={isLoading}
            onAltClick={handleAltModal}
          />
        )}
        {activeModal === "signin" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            onLogin={handleLogin}
            isOpen={activeModal === "signin"}
            isLoading={isLoading}
            onAltClick={handleAltModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
