import { useState } from "react"; 
import { AddCategory, GifGrid } from "./components"



export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["yellow"]); 
  
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    
    setCategories([newCategory, ...categories]);
  };
  
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
        ))}
    </>
  );
};

// los Hooks para poder utilizarlos siempre tienen que ser importados de 'react'

//rafc tab, crea un funcional components

// para crear una nueva api en la terminal escribir: create yarn vite
// en la terminal el comando: yarn instala los modulos de node
// en la terminal el comando; yarn dev ejecuta nuestra aplicacion

// onst [categories, setCategories] = useState(["Grogu"]);  [categories, setCategories] Esto es una desestructurizacion de un arreglo //
  // hook,  categories, es un valor, setCategories es una funcion que sirve para cambiar el valor del useState (estado inicial) // esto son los valores de inicializacion //
