// import logo from "../../logo.svg";
import "../App/App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import SlaylistModal from "../SlaylistModal/SlaylistModal";
// import SlaylistCard from "../SlaylistCard/SlaylistCard";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Dashboard from "../Dashboard/Dashboard";
import NewSlaylist from "../NewSlaylist/NewSlaylist";
import LogoutConfirmationModal from "../LogoutConfirmationModal/LogoutConfirmationModal";
import LoginAlertModal from "../LoginAlertModal/LoginAlertModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { UserContext } from "../../contexts/UserContext";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSlaylistCard, setSelectedSlaylistCard] = useState({});
  const [isSlaylistLiked, setIsSlaylistLiked] = useState(false);
  const [likeButtonOrigin, setLikeButtonOrigin] = useState("");
  const [currentScreenWidth, setCurrentScreenWidth] = useState(
    window.innerWidth
  );
  const [currentScreenHeight, setCurrentScreenHeight] = useState(
    window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setCurrentScreenWidth(window.innerWidth);
      setCurrentScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // console.log("width", currentScreenWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentScreenWidth, currentScreenHeight]);

  const history = useHistory();

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

  const handleSelectedSlaylistCard = (card, isLiked) => {
    // console.log("selecting card");
    // console.log(card);
    setSelectedSlaylistCard(card);
    setActiveModal("slaylist");
    setIsSlaylistLiked(isLiked);
    // console.log(activeModal);
  };

  function handleAltModal(alt) {
    handleCloseModal();
    setActiveModal(alt);
  }

  function handleSlaylistSubmit(request) {
    request.preventDefault();
    setIsLoading(true);
    console.log("submitting slaylist");
    setIsLoading(false);
    history.push("/dashboard");

    const tempSlaylistCardDataObj = {
      title: request.target.title.value,
      tagline: request.target.tagline.value,
      category: request.target.category.value,
      date_created: new Date().toISOString().split("T")[0],
      date_last_modified: new Date().toISOString().split("T")[0],
      owner_id: "ampersand",
      _id: "12345",
      likes: 0,
      slaylets: [],
    };
    console.log(tempSlaylistCardDataObj);

    setSelectedSlaylistCard(tempSlaylistCardDataObj);

    setActiveModal("slaylist");
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

  function handleClickLogout(request) {
    request.preventDefault();
    //placeholder until signOut request can be done
    setActiveModal("logout-confirm");
  }

  function handleConfirmLogout(request) {
    request.preventDefault();
    console.log("logging out");
    history.push("/");
    handleCloseModal();
    // signOut(request) goes here
    setIsLoggedIn(false);
  }

  function handleIsNotLoggedIn(likeButtonClassName, isLoggedInProp) {
    // just added isLoggedIn as an arg
    // request.preventDefault();
    console.log("handleIsNotLoggedIn function", isLoggedInProp);
    setLikeButtonOrigin(likeButtonClassName);
    // console.log("likeButtonClassName", likeButtonClassName);
    if (!isLoggedInProp && !isLoggedIn) {
      setActiveModal("login-alert");
    }
  }

  function handleLoginAlert(request) {
    request.preventDefault();
    // console.log(request);
    // setActiveModal("login-alert");
    setActiveModal("signin");
    console.log("login alert modal action");
    // history.push("/");
    // handleCloseModal();
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
      // console.log(e.target.classList.value);
      if (
        // clicking outside the modal content will close the modal
        e.target.classList.contains("modal") ||
        e.target.classList.value.endsWith("-modal")
      ) {
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
    <CurrentScreenSizeContext.Provider
      value={{ currentScreenWidth, currentScreenHeight }}
    >
      <div className="page">
        <div className="App">
          <Header
            onRegisterModal={handleRegisterModal}
            onLoginModal={handleLoginModal}
            isLoggedIn={isLoggedIn}
            onClickLogout={handleClickLogout}
          />
          <Switch>
            <Route exact path="/">
              <Main
                onSelectedSlaylistCard={handleSelectedSlaylistCard}
                isLoggedin={isLoggedIn}
                onNotLoggedIn={handleIsNotLoggedIn}
              />
            </Route>
            <ProtectedRoute path="/dashboard" loggedIn={isLoggedIn}>
              <Dashboard
                onSelectedSlaylistCard={handleSelectedSlaylistCard}
                isLoggedin={isLoggedIn}
                onNotLoggedIn={handleIsNotLoggedIn}
              />
            </ProtectedRoute>
            <ProtectedRoute path="/new-slaylist" loggedIn={isLoggedIn}>
              <NewSlaylist onSubmit={handleSlaylistSubmit} />
            </ProtectedRoute>
            <Route>
              <PageNotFound />
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
          {activeModal === "slaylist" && (
            <SlaylistModal
              handleCloseModal={handleCloseModal}
              // onLogin={handleLogin}
              isOpen={activeModal === "slaylist"}
              selectedSlaylistCard={selectedSlaylistCard}
              isLiked={isSlaylistLiked}
              onClose={handleCloseModal}
              isLoggedIn={isLoggedIn}
              onNotLoggedIn={handleIsNotLoggedIn}
            />
          )}
          {activeModal === "logout-confirm" && (
            <LogoutConfirmationModal
              handleCloseModal={handleCloseModal}
              // onLogin={handleLogin}
              isOpen={activeModal === "logout-confirm"}
              onLogoutConfirmation={handleConfirmLogout}
              onAltClick={handleAltModal}
              // selectedSlaylistCard={selectedSlaylistCard}
              onClose={handleCloseModal}
            />
          )}
          {activeModal === "login-alert" && (
            <LoginAlertModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login-alert"}
              onLoginAlert={handleLoginAlert}
              onAltClick={handleAltModal}
              onLogin={handleLoginModal}
              onClose={handleCloseModal}
              // onCloseFromSlaylistModal={handleCloseLoginAlertModal}
              likeButtonOrigin={likeButtonOrigin}
            />
          )}
        </div>
      </div>
    </CurrentScreenSizeContext.Provider>
  );
}

export default App;
