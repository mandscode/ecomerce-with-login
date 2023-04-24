import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../Redux/Reducers/cartSlice";

const Cart = () => {
    const [items, setItems] = React.useState();
    const [total, setTotal] = React.useState();
    
    const cartItems = useSelector(
        state => state.cart
    );

    console.log(cartItems)
        
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    function deleteEvent (i, product) {
        dispatch(removeItem(product))
    }
    
    function sum (a, b) {
        return a+b
    };
    
    React.useEffect(()=>{
        const price = cartItems.map((e)=>e.price)
        console.log(price.length)
        if (price.length > 0) {
            setTotal(price.reduce(sum))
            Math.trunc(total)
        }
        else if (price.length === 0 ){
            setTotal(0)
        }
    }, [cartItems, total, sum])


    return (
        <>
        <div className="cart">
            <div className="Cart-Container">
                <div className="Header">
                    <h3 className="Heading">Shopping Cart</h3>
                    {/* <h5 className="Action">Remove all</h5> */}
                </div>
                <Grid container rowGap={4}>
                {cartItems && cartItems.map((e, i)=>(
                    <Grid container item className="Cart-Items">
                        <Grid item md={3} xl={3} className="image-box">
                            <img src={e.image} style={{ height: '120px' }} />
                        </Grid>
                        <Grid item md={3} xl={3} className="about">
                            <h1 className="title">{e.title.substring(0, 20)}</h1>
                            <h3 className="subtitle">250ml</h3>
                        </Grid>
                        <Grid item md={3} xl={1.5} className="counter">
                            {/* <div className="btn" onClick={() => dispatch(addQuantity(e))}>+</div>
                            <div className="count">{counter}</div>
                            <div className="btn" onClick={() => dispatch(decrement())}>-</div> */}
                        </Grid>
                        <Grid item md={3} xl={4} className="prices">
                            <div className="amount">{`$${e.price}`}</div>
                            <div className="remove" onClick={()=>{deleteEvent(i, e)}}><u>Remove</u></div>                            
                        </Grid>
                    </Grid>
                ))}
                </Grid>
                <hr/> 
                <div className="checkout">
                    <div className="total">
                        <div>
                            <div className="Subtotal">Sub-Total</div>
                            <div className="items">{cartItems ? cartItems.length : 0} Items</div>
                        </div>
                        <div className="total-amount">{total ? Math.trunc(total) : 0}</div>
                    </div>
                    <button className="button">Checkout</button>
                </div>
            </div>
            </div>
        </>
    );
}
 
export default Cart;