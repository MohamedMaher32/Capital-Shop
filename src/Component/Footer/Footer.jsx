import { Link } from "react-router-dom";
import logo2 from "../../image/log02.png"
export default function Footer() {
    return (
        <div className="footer">
            <div className="container pt-5 pb-2">
                <div className="d-flex justify-content-center"><img src={logo2} alt="logo" /></div>
                <div className="row py-5 mt-5 g-3 border-bottom border-top text-center">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">CATEGORIES</h5>
                            <div className="categories mt-4">
                                <Link to='/shop'>Woman</Link>
                                <Link to='/shop'>Man</Link>
                                <Link to='/shop'>Jewelery</Link>
                                <Link to='/shop'>Electronics</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">FASHION</h5>
                            <div className="categories mt-4">
                                <Link to='/shop'>Clothing</Link>
                                <Link to='/shop'>Winter</Link>
                                <Link to='/shop'>Summer</Link>
                                <Link to='/shop'>Formal</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">HELP</h5>
                            <div className="categories mt-4">
                                <Link to='/shop'>Track Order</Link>
                                <Link to='/shop'>Returns</Link>
                                <Link to='/shop'>Shipping</Link>
                                <Link to='/shop'>FAQs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold mb-4">GET IN TOUCH</h5>
                            <p className=" text-muted">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className="social d-flex justify-content-center my-4">
                                <i className="fa-brands fa-facebook-f btn-bg"></i>
                                <i className="fa-brands fa-twitter  btn-bg"></i>
                                <i className="fa-brands fa-linkedin-in  btn-bg"></i>
                                <i className="fa-brands fa-github  btn-bg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3 text-white text-center">
                <h6>Copy Right 2023 © All Rights Reserved <i className="fa fa-heart color-danger text-danger"></i> By <span>Mohamed Maher</span></h6>

            </div>
        </div>
    )
}