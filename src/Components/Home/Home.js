import React from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import useTShirts from '../../hooks/useTshirts';
import { useEffect, useState } from "react"
const Home = () => {
    const [tShirts, setTshirts] = useTShirts();
    const [cart, setCart] = useState([])
    const handleAddToCart = (selected) => {
        const exists = cart.find(tShirt => tShirt._id === selected._id);
        if (!exists) {
            const newCart = [...cart, selected];
            setCart(newCart);
        }
        else {
            alert('item already added');
        }
    }
    const handleRemoveFromCart = (selected) => {
        const rest = cart.filter(tShirt => tShirt._id !== selected._id)
        setCart(rest);
    }
    return (
        <div className="Home_container">
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <Tshirt
                        key={ tShirt._id }
                        tShirt={ tShirt }
                        handleAddToCart={ handleAddToCart }
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={ cart }
                    handleRemoveFromCart={ handleRemoveFromCart }></Cart>
            </div>
        </div>
    );
};

export default Home;