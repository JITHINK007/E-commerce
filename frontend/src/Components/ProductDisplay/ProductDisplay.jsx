import React, {useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';




const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='Productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            

        </div>
        <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)
                </p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="right-discount">Rs {product.old_price}</div>
                <div className="productdisplay-right-price-new">Rs {product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Fan: Provide airflow for comfort.

Water Heaters: Heat water efficiently for diverse needs.

Stabilizers: Ensure stable voltage, protecting electronics.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Model</h1>
                <div className="productdisplay-right-sizes">
                    <div>600mm</div>
                    <div>400mm</div>
                    <div>600mm</div>
                </div>
            </div>
        
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Fans , Table Fan, small</p>
        <p className='productdisplay-right-category'><span>Tags :</span>New Model</p>
      
    </div>
    </div>
  )
}

export default ProductDisplay
