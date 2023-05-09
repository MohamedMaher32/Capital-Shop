import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getSearchList } from "../../Rduex/DataSlice"
import background from "../../image/header6.jpg"
export default function Search() {
    let { searchTerm } = useParams()
    let { searchList, loading } = useSelector((state) => state.SearchData)
    console.log(searchList);
    let Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(getSearchList(`${searchTerm}`))
    }, [searchTerm])
    return (
        <div className="home py-5">
            {loading ?
                <div className="loading">
                    <span className="loader"></span>
                </div>
                :
                <>
                    <div className="page-header" style={{ backgroundImage: `url(${background})` }}>
                        <h3>#Products Search</h3>
                        <p>Save more with coupons & up to 70% off !</p>
                    </div>
                    <div className="container product mt-5 pt-5">
                        {(searchList.length != 0) ?
                            <div className="row g-4">
                                {searchList.map((el) => {
                                    return <div className="col-lg-3 col-md-4 col-sm-6 " key={el.id}>
                                        <div className="item shadow">
                                            <Link to={"/dateiles/" + el.id}>
                                                <img src={el.thumbnail} alt="product" className="w-100" />
                                                <p>Discount:{el.discountPercentage}%</p>
                                                <div className="layout">
                                                    <h3 className="mb-3">{el.category}</h3>
                                                    <span className="rounded-2">View Detailes</span>
                                                </div>
                                            </Link>
                                            <div className="info px-2 my-3">
                                                <h5>{el.title?.split(" ").slice(0, 1).join(" ")}</h5>
                                                <h6>{el.price}$</h6>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div> :
                            <div className="d-flex justify-content-center align-items-center errorSearch shadow">
                                <h2> <i className="fa-regular fa-face-dizzy"></i> No Products Found <i className="fa-regular fa-face-dizzy"></i></h2>
                            </div>
                        }

                    </div >
                </>
            }


        </div>
    )
}