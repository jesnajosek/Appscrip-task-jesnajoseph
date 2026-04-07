import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find(item => item.id === product.id);
            let newCart;
            if (existing) {
                newCart = prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            } else {
                newCart = [...prev, { ...product, quantity: 1 }];
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => {
            const newCart = prev.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    const updateQuantity = (id, delta) => {
        setCartItems((prev) => {
            const newCart = prev.map(item => {
                if (item.id === id) {
                    const newQ = item.quantity + delta;
                    return newQ > 0 ? { ...item, quantity: newQ } : item;
                }
                return item;
            });
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart");
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
}
