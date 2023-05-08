import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from "react-redux";
import { getDetaliesInfo } from "../../Rduex/DataSlice";
import background from "../../image/header2.jpg"
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from "../../Rduex/CartSlice"
import CartMessage from "../CartMessage/CartMessage";
export default function Dateiles() {
  let { id } = useParams()
  const [quantity, setQuantity] = useState(1);
  let { detaliesInfo, loading } = useSelector((state) => state.DetaliesData)
  let cartMessageStatus = useSelector(getCartMessageStatus)
  let Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(getDetaliesInfo(`${id}`))
  }, [])
  useEffect(()=>{
    if (cartMessageStatus) {
      setTimeout(() => {
        Dispatch(setCartMessageOff())
      }, 1000)
    }
  },[cartMessageStatus])
  let increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > detaliesInfo?.stock) tempQty = detaliesInfo?.stock;
      return tempQty;
    })
  }
  let decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }
  let addToCartHandler = () => {
    let discountedPrice = (detaliesInfo?.price) - (detaliesInfo?.price * (detaliesInfo?.discountPercentage / 100));
    let totalPrice = quantity * discountedPrice;
    console.log(discountedPrice);
    console.log(totalPrice);
    Dispatch(addToCart({ ...detaliesInfo, quantity: quantity, totalPrice, discountedPrice }));
    Dispatch(setCartMessageOn(true));
  }
  return (
    <div className="detalies py-5">
      {loading ?
        <div className="loading">
          <span className="loader"></span>
        </div> :
        <>
          <div className="page-header" style={{ backgroundImage: `url(${background})` }}>
            <h2>#Product Detalies</h2>
            <p>Summer Collection New Modern Design !</p>
          </div>
          {detaliesInfo ?
            <div className="container mt-5 pt-5">
              <div className="row shadow py-5 align-items-center">
                <div className='col-lg-4 col-sm-12 mb-3 '>
                  <OwlCarousel className='owl-theme' loop items={1}>
                    {detaliesInfo.images?.map((el) => {
                      return <img src={el} alt="category" className='w-100' key={el} height={400} />
                    })}
                  </OwlCarousel>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="information px-3">
                    <h2 className='fw-bold mb-4'>{detaliesInfo.title}</h2>
                    <p className='text-muted'>{detaliesInfo.description}</p>
                    <div className='d-flex  my-4 '>
                      <strong className="ms-0">Category : <span className="text-capitalize">{detaliesInfo.category}</span></strong>
                      |
                      <strong>Brand : <span>{detaliesInfo.brand}</span></strong>
                      |
                      <strong>Rating : <span>{detaliesInfo.rating} / 5</span></strong>
                    </div>
                    <div className='d-flex my-4'>
                      <strong className="ms-0">Discount : <span>{detaliesInfo.discountPercentage} %</span></strong>
                      |
                      <strong>Price : <span className="text-decoration-line-through">{detaliesInfo.price}$</span> <i className="fa-solid fa-arrow-right"></i> <span>{(detaliesInfo.price - (detaliesInfo.price * (detaliesInfo.discountPercentage / 100)).toFixed(2))} $</span></strong>
                      |
                      <strong>Quantity : <span><button className="btn py-1 px-2 me-2" onClick={() => { decreaseQty() }}><i className="fa-solid fa-minus"></i></button> {quantity} <button className="btn py-1 px-2 ms-2" onClick={() => { increaseQty() }}><i className="fa-solid fa-plus"></i></button></span></strong>
                    </div>
                    <button className='btn' onClick={() => { addToCartHandler() }}><i className="fa-solid fa-cart-shopping"></i> Add Cart</button>
                    <Link to="/shop" className="btn ms-3">Show More Products</Link>
                  </div>
                </div>
              </div>
            </div>
            : ""}
            {cartMessageStatus && <CartMessage />}
        </>
      }
    </div>
  )
}