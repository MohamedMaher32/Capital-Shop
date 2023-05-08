import { useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from "react-redux";
import customer from '../../image/customer.png'
import blog1 from '../../image/blog1.jpg'
import blog2 from '../../image/blog2.jpg'
import blog3 from '../../image/blog3.jpg'
import serv1 from '../../image/services1.svg'
import serv2 from '../../image/services2.svg'
import serv3 from '../../image/services3.svg'
import serv4 from '../../image/services4.svg'
import { getProductList, getSpecificCategoryList } from "../../Rduex/DataSlice";
export default function Home() {
  let responsive = { responsive: { 0: { items: 2 }, 770: { items: 3 }, 1000: { items: 4 } } }
  let { ProductList, loading } = useSelector((state) => state.ProductData)
  let { CategoryList } = useSelector((state) => state.CategoryData)
  console.log(CategoryList);
  let Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(getProductList());
    Dispatch(getSpecificCategoryList("mens-watches"))
  }, [])

  return (
    <div className="home">
      {loading ?
        <div className="loading">
          <span className="loader"></span>
        </div> 
        : <div>
        <div className="main">
          <div className="container">
            <div className="text col-md-6 col-sm-12 text-center">
              <span>Fashion Sale</span>
              <h1>Minimal Menz Style</h1>
              <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
              <Link to='/shop' className="btn py-2 px-4 rounded-2">SHOP NOW</Link>
            </div>
          </div>
        </div>
        <div className="container product my-5">
          <h2 className="text-center my-5">Trending This Week</h2>
          <OwlCarousel loop items={4} autoplay={true} autoplayTimeout={3000} dots={false} margin={10} className="owl-theme mb-5" {...responsive}>
            {ProductList.map((el) => {
              return <div className="item" key={el.id}>
                <Link to={"/dateiles/" + el.id}>
                  <img src={el.thumbnail} alt="product" className="w-100" />
                  <p>Discount:{el.discountPercentage}%</p>
                  <div className="layout">
                    <h3 className="mb-3 text-capitalize">{el.category}</h3>
                    <span className="rounded-2">Shop Now</span>
                  </div>
                </Link>
                <div className="info px-2 my-3">
                  <h5>{el.title?.split(" ").slice(0, 1).join(" ")}</h5>
                  <h6>{el.price}$</h6>
                </div>
              </div>
            })}
          </OwlCarousel>
        </div >
        <div className="customer text-center">
          <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h2>Customer Testimonial</h2>
                  <p className="mb-5">Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                  <img src={customer} alt="customer" className="mb-4" />
                  <h6>Mohamed Maher</h6>
                  <span>Frontend Developer(React)</span>
                </div>
                <div className="carousel-item">
                  <h2>Customer Testimonial</h2>
                  <p className="mb-5">Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                  <img src={customer} alt="customer" className="mb-4" />
                  <h6>Ahmed Youssef</h6>
                  <span>Backend Developer(.Net)</span>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container product my-5">
          <h2 className="text-center my-5">You May Like</h2>
          <OwlCarousel loop items={4} autoplay={true} autoplayTimeout={3000} dots={true} margin={10} className="owl-theme mb-5" {...responsive}>
            {CategoryList.map((el) => {
              return <div className="item" key={el.id}>
                <Link to={"/dateiles/" + el.id}>
                  <img src={el.thumbnail} alt="product" className="w-100" />
                  <p>Discount:{el.discountPercentage}%</p>
                  <div className="layout">
                    <h4 className="mb-3 text-capitalize">{el.category}</h4>
                    <span className="rounded-2">Shop Now</span>
                  </div>
                </Link>
                <div className="info px-2 my-3">
                  <h5>{el.title?.split(" ").slice(0, 1).join(" ")}</h5>
                  <h6>{el.price}$</h6>
                </div>
              </div>
            })}
          </OwlCarousel>
        </div >
        <div className="news">
          <div className="container pb-5 pt-4">
            <h2 className="text-center my-5">Latest News</h2>
            <div className="row g-4">
              <div className="col-md-4 col-sm-12 blog">
                <img src={blog1} alt="news" className=" w-100 mb-3" />
                <span>By Mohamed Maher May 3, 2023</span>
                <h5 className='my-3 header'>What Curling Irons Are The Best Ones</h5>
                <p className='text-muted'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus...</p>
                <strong>Read More</strong>
              </div>
              <div className="col-md-4 col-sm-12 blog">
                <img src={blog2} alt="news" className=" w-100 mb-3" />
                <span>By Mohamed Maher May 3, 2023</span>
                <h5 className='my-3 header'>Vogue's Ultimate Guide To Winter</h5>
                <p className='text-muted'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus...</p>
                <strong>Read More</strong>
              </div>
              <div className="col-md-4 col-sm-12 blog">
                <img src={blog3} alt="news" className=" w-100 mb-3" />
                <span>By Mohamed Maher May 3, 2023</span>
                <h5 className='my-3 header'>Winter-to-Spring Fashion Trends</h5>
                <p className='text-muted'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus...</p>
                <strong>Read More</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="container">
            <div className="row py-5 g-3">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="serv text-center shadow py-5 px-3 h-100">
                  <img src={serv1} alt="serv" className="mb-3" />
                  <h3>Fast & Free Delivery</h3>
                  <p>Free delivery on all orders</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="serv text-center shadow py-5 px-3 h-100">
                  <img src={serv2} alt="serv" className="mb-3" />
                  <h3>Secure Payment</h3>
                  <p>Free delivery on all orders</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="serv text-center shadow py-5 px-3 h-100">
                  <img src={serv3} alt="serv" className="mb-3" />
                  <h3>Money Back Guarantee</h3>
                  <p>Free delivery on all orders</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="serv text-center shadow py-5 px-3 h-100">
                  <img src={serv4} alt="serv" className="mb-3" />
                  <h3>Online Support</h3>
                  <p>Free delivery on all orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}