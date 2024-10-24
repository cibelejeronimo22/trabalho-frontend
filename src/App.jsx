import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    title: "Smartphone",
    price: "R$ 1.500,00",
    image: "https://i.zst.com.br/thumbs/12/17/11/-1206835646.jpg"
  },
  {
    id: 2,
    title: "Notebook",
    price: "R$ 3.200,00",
    image:"https://i.zst.com.br/thumbs/12/3d/34/-1162794238.jpg"
  },
  {
    id: 3,
    title: "Fone de ouvido sem fio ",
    price: "R$ 200,00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZU9gAIvksHyaOugYwyPvx9uXPQzqbEYjnRQ&s"
  },
  {
    id: 3,
    title: "Tablet ",
    price: "R$ 2000,00",
    image: "https://fastshopbr.vtexassets.com/arquivos/ids/498713/0_SGSMP620CNZZF_PRD_1500_1.jpg?v=638617914171730000"
  }
  
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
