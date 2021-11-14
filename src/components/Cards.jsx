import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);

  const [input, setInput] = useState("");

  const peticion = () => {
    fetch(
      "https://api.unsplash.com/photos?client_id=tY5VgiKj5tUmOT-4zS3QNMQ6nPXFKMBElK86691EhRQ"
    )
      .then((res) => res.json())
      .then((res) => setImages(res));
  };

  useEffect(() => {
    peticion();
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Buscar: <input type="text" name="input text" />{""}
        </label>
      </form>
      <hr/>
      {images.map((img) => {
        return <Card key={img.id} img={img.urls.regular} />;
      })}
    </>
  );
};

export default Cards;
