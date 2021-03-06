import React, {  useState } from 'react'
import Header from "../Components/Header"
import Image from "../Assets/EmptyCart.webp"
import "../Styles/Checkout.css"
import { Icon } from 'semantic-ui-react'
import CheckoutProduct from '../Components/CheckoutProduct'
import StripeContainer from '../Components/StripeContainer'
import {selectItems, selectTotal} from '../slices/basketSlice';
import {useSelector} from "react-redux";
function Checkout() {
    const items = useSelector(selectItems);
    const Total  = useSelector(selectTotal);
    const [buyItem,setBuyItem]=useState(false)
    
    return (
        buyItem ?<StripeContainer/>:
      <div className="checkout">
        <Header />
        {items.length === 0 ? (
          <div className="no__product">
            <img src={Image} alt="cart empty"/>
            <span>Your Cart is Empty</span>
          </div>
        ) : (
          <div className="products">
            {/* List of added products in the cart */}
            <div className="products__list">
              {items.map((product, index) => (
                <CheckoutProduct
                  product={product}
                  quantity={product.quantity}
                  // setQuantity={setQuantity}
                  key={index}
                />
              ))}
            </div>
            <div className="total__section">
              <div className="total__section__inner">
                <span
                  style={{
                    display: "flex",
                    fontSize: 16,
                    justifyContent: "center",
                    cursor: "default",
                    userSelect: "none",
                  }}
                >
                  <Icon name="check circle" color="green" />
                  Your Order is eligble for free delivery
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    height: 40,
                    marginBottom: 20,
                    marginTop: 20,
                    backgroundColor: "white",
                  }}
                >
                  <span
                    style={{ fontSize: 20, fontWeight: "600", marginLeft: 20 }}
                  >
                    Subtotal ({items.length}: item)
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon name="dollar" size="mini" className="rupee-icon" />
                    <span style={{ fontSize: 18, fontWeight: "600" }}>
                      {Total}
                    </span>
                  </div>
                </div>
                <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <div
                    className="checkout__btn"
                    onClick={() => setBuyItem(true)}
                  >
                    Proceed to Checkout
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Checkout
