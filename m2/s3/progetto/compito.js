// ProductAdmin.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    brand: '',
    imageUrl: '',
    price: 0,
  });
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const token = 'YOUR_AUTH_TOKEN'; 

  useEffect(() => {
ì    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Errore nel recupero dei prodotti:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async () => {
    try {
      // Invia la richiesta POST per aggiungere un nuovo prodotto
      await axios.post('https://striveschool-api.herokuapp.com/api/product/', newProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Aggiorna la lista dei prodotti
      fetchProducts();
      // Resetta il form
      resetForm();
    } catch (error) {
      console.error('Errore nell\'aggiunta del prodotto:', error);
    }
  };

  const editProduct = async () => {
    try {
      await axios.put(`https://striveschool-api.herokuapp.com/api/product/${editProductId}`, newProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Aggiorna la lista dei prodotti
      fetchProducts();
      // Resetta il form
      resetForm();
    } catch (error) {
      console.error('Errore nella modifica del prodotto:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts();
      // Resetta il form
      resetForm();
    } catch (error) {
      console.error('Errore nella cancellazione del prodotto:', error);
    }
  };

  const resetForm = () => {
    setNewProduct({
      name: '',
      description: '',
      brand: '',
      imageUrl: '',
      price: 0,
    });
    setEditMode(false);
    setEditProductId(null);
  };

  const setEditModeAndPopulateForm = (productId) => {
    const productToEdit = products.find((product) => product._id === productId);
    setEditMode(true);
    setEditProductId(productId);
    setNewProduct({
      name: productToEdit.name,
      description: productToEdit.description,
      brand: productToEdit.brand,
      imageUrl: productToEdit.imageUrl,
      price: productToEdit.price,
    });
  };

  return (
    <div>
      <h2>Back-Office Prodotti</h2>

      {/*modifica prodotto */}
      <div>
        <h3>{editMode ? 'Modifica Prodotto' : 'Aggiungi Nuovo Prodotto'}</h3>
        <label>Nome: </label>
        <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
        <label>Descrizione: </label>
        <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
        <label>Marca: </label>
        <input type="text" name="brand" value={newProduct.brand} onChange={handleInputChange} />
        <label>URL Immagine: </label>
        <input type="text" name="imageUrl" value={newProduct.imageUrl} onChange={handleInputChange} />
        <label>Prezzo: </label>
        <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
        {editMode ? (
          <button onClick={editProduct}>Modifica Prodotto</button>
        ) : (
          <button onClick={addProduct}>Aggiungi Prodotto</button>
        )}
        <button onClick={resetForm}>Resetta</button>
      </div>

      {/* Lista dei prodotti */}
      <div>
        <h3>Lista Prodotti</h3>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - {product.description} - {product.brand} - {product.price}
              <button onClick={() => setEditModeAndPopulateForm(product._id)}>Modifica</button>
              <button onClick={() => deleteProduct(product._id)}>Cancella</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductAdmin;
