import React, {useState, useEffect} from "react"
import "../Styles/Item1.css"
import { Icon } from "semantic-ui-react"
import Header from '../Components/Header.js'
import Footer from '../Components/Footer'
import {useDispatch} from "react-redux";
import {addToBasket} from "../slices/basketSlice";
import { useParams } from "react-router-dom"
function Item(){
    const dispatch = useDispatch();
    let {productId} = useParams()
    const [ product , setProduct] = useState({})
    useEffect(() => {
        fetch(`${process.env.REACT_APP_STORE}products/${productId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    }, [])
    const addItemToBasket = () => {
        const prod = {...product, quantity: 1}
        // sending the product as an action to the REDUX store.. the basket slice
        dispatch(addToBasket(prod))
        
    }
    return(
        <div className="item__page">
            <Header/>
            <div style={{display:'flex', flexDirection:'row', marginTop:100, height:'100%'}}>
                <div className="left__div" >
                    <img src={product.image} alt="product " />
                </div>
                <div className="right__div">
                    <div className="info__section">

                        <h2 className="product__title">{product.title}</h2>
                        <p className="product__description">{product.description}</p>
                        <div style={{paddingInline:20, display:'flex', alignItems:'center'}}>
                            <Icon name="rupee" size='big' className="rupee-icon"/> 
                            : 
                            <p style={{fontSize:20, fontWeight:'bold'}}>{product.price}</p> 
                        </div>
                        <div style={{paddingInline:20}}>
                            <div className="add__to__cart"  onClick={addItemToBasket} >
                                Add to Cart
                            </div>
                            <div className="buy__now" >
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Item

const styles = {
    button: {
        
    }
}