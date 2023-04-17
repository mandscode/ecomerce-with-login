import { Box, Button, Grid, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartProducts, deleteProduct } from "../Redux/Actions/Action";
import { AddCircleOutline, AddIcCallOutlined, RemoveCircleOutline } from "@mui/icons-material";




const ProductsSection = () => {
    const [products, setProducts] = React.useState('');
    const [index, setIndex] = React.useState('');

    React.useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setProducts(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const cartItems = useSelector(
        state => state.cartItems.cartItems
    );

    const [count, setCount] = useState(1);
    const IncNum = () => {
        setCount(count + 1);
    };
    const DecNum = () => {
        if (count > 0) setCount(count - 1);
        else {
        setCount(0);
        alert("min limit reached");
        }
    };

    const dispatch = useDispatch();

    // function cartEvent (i, product) {
    //     setIndex(product.id)
    // }

    const cartEvent = (i, product) => {
        const handleAddToCart = () => {
            dispatch(CartProducts(product))
        };
        const isInCart = cartItems.find((item) => item.id === product.id);
      return (
        <button onClick={handleAddToCart} disabled={isInCart}>
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      );
    };

    return (
        <>
            <section className="_products__section">
                <div className="container">
                    <div className="wrapper _products__section__wrapper">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} rowGap={6}>
                                {products && products.map((product, i)=>(
                                    <Grid item xs={6} md={2} key={i}>
                                        <div className="_products__section__item">
                                            <img src={product.image} alt="" />
                                            <span>{product.title.substring(0,20)}</span>
                                            <button className="addtocart">
                                                {/* {index === product.id ? */}
                                                    {/* <deleteEvent/> */}
                                                    
                                                    {cartEvent(i, product)}
                                            </button>
                                        </div>
                                    </Grid>
                                ))}
                                {/* <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image02.png" alt="" />
                                        <span>Brakes & Rotor</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image03.png" alt="" />
                                        <span>Exhaust Systems</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image03.png" alt="" />
                                        <span>Exhaust Systems</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image04.png" alt="" />
                                        <span> Air Intake Systems</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image04.png" alt="" />
                                        <span> Air Intake Systems</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image05.png" alt="" />
                                        <span>Performance Chips</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image06.png" alt="" />
                                        <span>Engine Components</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image07.png" alt="" />
                                        <span>Transmission</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image07.png" alt="" />
                                        <span>Transmission</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image08.png" alt="" />
                                        <span>Cooling Systems</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <div className="_products__section__item">
                                        <img src="/assets/images/image08.png" alt="" />
                                        <span>Cooling Systems</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Link href="" className="_products__section__link">
                                        See all subcategories
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.9165 9.129L10.9395 5.106L12 6.1665L6.1665 12L0.333 6.1665L1.3935 5.106L5.4165 9.129L5.4165 0L6.9165 0L6.9165 9.129Z" fill="#212F63"/>
                                            </svg>
                                        </span>
                                    </Link>
                                </Grid> */}
                            </Grid>
                        </Box>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ProductsSection;