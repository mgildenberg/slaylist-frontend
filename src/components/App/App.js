import logo from "../../logo.svg";
import "../App/App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import SlaylistModal from "../SlaylistModal/SlaylistModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Dashboard from "../Dashboard/Dashboard";
import NewSlaylist from "../NewSlaylist/NewSlaylist";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedSlaylistCard, setSelectedSlaylistCard] = useState({});

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

  const handleSelectedSlaylistCard = (card) => {
    // console.log("selecting card");
    // console.log(card);
    setSelectedSlaylistCard(card);
    setActiveModal("slaylist");
    // console.log(activeModal);
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

    const handleClickAway = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickAway);
    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickAway);
    };
  }, [activeModal]); // watch activeModal here

  return (
    <div className="page">
      <div className="App">
        <Header
          onRegisterModal={handleRegisterModal}
          onLoginModal={handleLoginModal}
          isLoggedIn={isLoggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main onSelectedSlaylistCard={handleSelectedSlaylistCard} />
          </Route>
          <ProtectedRoute path="/dashboard" loggedIn={isLoggedIn}>
            <Dashboard onSelectedSlaylistCard={handleSelectedSlaylistCard} />
          </ProtectedRoute>
          <ProtectedRoute path="/new-slaylist" loggedIn={isLoggedIn}>
            <NewSlaylist />
          </ProtectedRoute>
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
        {activeModal === "slaylist" && (
          <SlaylistModal
            handleCloseModal={handleCloseModal}
            // onLogin={handleLogin}
            isOpen={activeModal === "slaylist"}
            selectedSlaylistCard={selectedSlaylistCard}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
