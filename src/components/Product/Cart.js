import React, { useState, useEffect } from 'react';

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    // Function to handle removal of items from cart
    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    // Function to calculate total price of items in cart
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += item.price * item.amount; // Assuming item.amount is the quantity
        });
        setPrice(totalPrice);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [cart]); // Recalculate total price whenever cart changes

    return (
        <article>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <div>
                        <img src={item.imageSrc} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, 1)}>+</button>
                        <button>{item.amount}</button> {/* Assuming item.amount is displayed here */}
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <div>
                        <span>${item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div>
                <h2>Total Price: ${price}</h2>
            </div>
        </article>
    );
};

export default Cart;
