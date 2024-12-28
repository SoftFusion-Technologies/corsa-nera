import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './FeaturedProducts'; // Importar los productos
import { CartContext } from '../Components/CartContext'; // Importa el contexto del carrito
import AddToCartButton from '../Config/AddToCartButton';

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const { addToCart } = useContext(CartContext); // Accedemos a la función para agregar al carrito

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);

    // Si se encuentra el producto, establecer la imagen inicial
    if (foundProduct) {
      setCurrentImage(foundProduct.imageFront);
    }
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-gray-600 text-lg mt-8">
        Producto no encontrado
      </p>
    );
  }

  return (
    <section className="product-detail py-16 px-4 sm:px-8 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        {/* Contenedor de miniaturas e imagen principal */}
        <div className="product-image flex flex-col md:flex-row-reverse flex-1 items-center">
          {/* Imagen principal */}
          <div className="w-3/4 md:w-full mb-4 md:mb-0">
            <img
              src={currentImage}
              alt={product.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Miniaturas */}
          <div className="thumbnails flex flex-row md:flex-col md:mr-4 space-x-4 md:space-x-0 md:space-y-4">
            <img
              src={product.imageFront}
              alt="Front"
              className={`w-20 h-20 object-cover cursor-pointer border-2 rounded-md ${
                currentImage === product.imageFront
                  ? 'border-blue-500'
                  : 'border-gray-300'
              }`}
              onClick={() => setCurrentImage(product.imageFront)}
            />
            <img
              src={product.imageBack}
              alt="Back"
              className={`w-20 h-20 object-cover cursor-pointer border-2 rounded-md ${
                currentImage === product.imageBack
                  ? 'border-blue-500'
                  : 'border-gray-300'
              }`}
              onClick={() => setCurrentImage(product.imageBack)}
            />
          </div>
        </div>

        {/* Información del producto */}
        <div className="product-info flex-1 mt-8 md:mt-0 md:ml-8">
          {/* Breadcrumb personalizado */}
          <nav className="text-sm text-gray-500 mb-4">
            <ul className="flex space-x-2">
              <li className="hover:text-blue-500 cursor-pointer">INICIO</li>
              <li>·</li>
              <li className="hover:text-blue-500 cursor-pointer">HOMBRE</li>
              <li>·</li>
              <li className="hover:text-blue-500 cursor-pointer">REMERAS</li>
              <li>·</li>
              <li className="hover:text-blue-500 cursor-pointer">OVERSIZE</li>
              <li>·</li>
              <li className="text-gray-800 font-bold">
                {product.title.toUpperCase()}
              </li>
            </ul>
          </nav>
          {/* Título del producto */}
          <h2 className="text-3xl font-extrabold mb-4 text-gray-800 font-bignoodle">
            {product.title}
          </h2>
          {/* Precio */}
          <p className="text-2xl text-pink-600 font-semibold mb-4">
            {product.price}
          </p>
          {/* Detalles del precio */}
          <p className="text-md text-gray-600 leading-relaxed">
            {product.priceDetails}
          </p>

          <h2 className="mt-5 text-2xl font-extrabold mb-4 text-gray-800 font-bignoodle">
            Descripción
          </h2>
          {/* Descripción del producto */}
          <div className="description text-gray-700 space-y-4">
            {product.description.split('\n').map((line, index) => (
              <p key={index} className="leading-relaxed">
                {line.trim()}
              </p>
            ))}
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
