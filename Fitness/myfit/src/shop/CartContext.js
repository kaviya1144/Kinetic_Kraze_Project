// import React, { createContext, useState, useEffect, useContext } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
//       if (existingProductIndex > -1) {
//         const newCart = [...prevCart];
//         newCart[existingProductIndex].count += product.count;
//         return newCart;
//       }
//       return [...prevCart, product];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const getCartCount = () => {
//     return cart.reduce((count, item) => count + item.count, 0);
//   };

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     cartCount: getCartCount(),
//     totalPrice
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// import React, { createContext, useState, useEffect, useContext } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
//       if (existingProductIndex > -1) {
//         const newCart = [...prevCart];
//         newCart[existingProductIndex].count += product.count;
//         return newCart;
//       }
//       return [...prevCart, product];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const getCartCount = () => {
//     return cart.reduce((count, item) => count + item.count, 0);
//   };

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

//   const fetchUserCart = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:3000/cart/${userId}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Failed to fetch user cart:', error);
//       throw error;
//     }
//   };

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     cartCount: getCartCount(),
//     totalPrice,
//     fetchUserCart // Include fetchUserCart in the context
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch user information
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserId(user.userId);
    } else {
      setUserId(null);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const savedCart = localStorage.getItem(`cart_${userId}`);
      setCart(savedCart ? JSON.parse(savedCart) : []);
    } else {
      setCart([]);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    }
  }, [cart, userId]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingProductIndex].count += product.count;
        return newCart;
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.count, 0);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    cartCount: getCartCount(),
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
