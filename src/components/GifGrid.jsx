import { GifItems } from "./GifItems";
import { useFechGifs } from "../Hooks/useFechGifs";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFechGifs(category);

 
  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
          {
            images.map(( image ) => (
                <GifItems 
                    key={ image.id }
                    // title={ image.title }
                    // url={ image.url }
                    { ...image} // este codigo con el operador ... spret 
                                 //sirve para exparsir todas las properties 
                                 // que tiene el objeto image en el GifItems.
                />
            ))
          }
      </div>
    </>
  );
};





