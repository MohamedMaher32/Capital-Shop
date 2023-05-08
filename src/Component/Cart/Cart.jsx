import { useDispatch, useSelector } from "react-redux";
import { getAllCarts, removeFromCart, toggleCartQty, clearCart } from "../../Rduex/CartSlice";
import emptyCart from '../../image/emptycart.png'
import { Link } from "react-router-dom";
import background from "../../image/header6.jpg"
export default function Cart() {
  let Dispatch = useDispatch();
  let carts = useSelector(getAllCarts);
  let { itemsCount, totalAmount } = useSelector((state) => state.cart);
  console.log(itemsCount, totalAmount);
  if (carts.length === 0) {
    return (
      <div className="emptyCart py-5">
        <div className='container mt-5 '>
          <div className=' d-flex justify-content-center align-items-center flex-column'>
            <img src={emptyCart} alt="empty" className="w-50" />
            <h2 className='fw-bold '>Your shopping cart is empty.</h2>
            <Link to="/shop" className='btn mt-4 fw-bold'>Go shopping Now</Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="cart py-5">
      <div className="page-header" style={{ backgroundImage: `url(${background})` }}>
        <h2>#Cart Detalies</h2>
        <p>Summer Collection New Modern Design !</p>
      </div>
      <div className="container mt-5">
        <div className="table-responsive">
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <table className='table text-center fw-bold' style={{ verticalAlign: 'middle' }}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((el, index) => {
                  return <tr key={index}>
                    <td><img src={el.thumbnail} alt="product" className="w-50" height={100} /></td>
                    <td>{el.title?.split(" ").slice(0, 2).join(" ")}</td>
                    <td >
                      <button className='btn btn-danger p-1 py-0 d-block w-50 mx-auto rounded-0' onClick={() => Dispatch(toggleCartQty({ id: el?.id, type: "DEC" }))}>
                        <i className="fa-solid fa-minus"></i></button>
                      <span className='mx-1 d-block'>{el?.quantity}</span>
                      <button className='btn btn-success px-1 py-0 d-block w-50  mx-auto rounded-0' onClick={() => Dispatch(toggleCartQty({ id: el?.id, type: "INC" }))}><i className="fa-solid fa-plus"></i></button>
                    </td>
                    <td className="price">{el?.totalPrice.toFixed(2)}$</td>
                    <td><i className="fa-solid fa-trash text-danger fs-5 cusror" onClick={() => Dispatch(removeFromCart(el?.id))}></i></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4 ">
          <button className="btn btn-warning  fw-bold text-uppercase rounded-0" onClick={() => Dispatch(clearCart())}>Clear Cart Items</button>
          <div className="total d-flex justify-content-center align-items-center flex-column">
            <strong>Total Price : <span> {totalAmount.toFixed(2)} $</span></strong>
            <Link to='/' className="btn w-100 rounded-0 mt-2 fw-bold text-uppercase" onClick={() => Dispatch(clearCart())}>Check Out</Link>
          </div>
        </div>

      </div>
    </div>
  )
}