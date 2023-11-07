import React, { useContext } from "react";
import { Context } from "../store/appContext";
import home from "../../img/home.jpeg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="text-center "
      style={{ backgroundColor: "rgb(247,249,230)" }}
    >
      <h1 className="text-dark pt-4">Inicio</h1>
      <p>
        <img src={home} />
      </p>
      <div className="alert alert-info">{store.message}</div>
      <p></p>
    </div>
  );
};