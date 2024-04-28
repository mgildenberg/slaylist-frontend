import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found__background">
        <h1 className="page-not-found__title">404 - Page Not Found</h1>
        <p className="page-not-found__text">Tragic. The page does not exist.</p>
        <p className="page-not-found__text">Contact the site owner for help.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
