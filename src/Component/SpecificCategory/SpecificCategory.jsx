import { useDispatch, useSelector } from "react-redux";
import { getSpecificCategoryList } from "../../Rduex/DataSlice";
import { useEffect } from "react";
import background from "../../image/header5.jpg"
import { Link, useParams } from "react-router-dom";
export default function SpecificCategory() {
  let { cat } = useParams()
  let { CategoryList, loading } = useSelector((state) => state.CategoryData)
  console.log(CategoryList);
  let Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(getSpecificCategoryList(`${cat}`))
  }, [])
  return (
    <div className="home py-5">
      {loading ?
        <div className="loading">
          <span className="loader"></span>
        </div>
        :
        <>
          <div className="page-header" style={{ backgroundImage: `url(${background})` }}>
            <h3>#Sub Category</h3>
            <p>Save more with coupons & up to 70% off !</p>
          </div>
          <div className="container product mt-5 pt-5">
            <div className="row g-4">
              {CategoryList.map((el) => {
                return <div className="col-lg-3 col-md-4 col-sm-6 " key={el.id}>
                  <div className="item shadow">
                    <Link to={"/dateiles/" + el.id}>
                      <img src={el.thumbnail} alt="product" className="w-100" />
                      <p>Discount:{el.discountPercentage}%</p>
                      <div className="layout">
                        <h3 className="mb-3 text-capitalize">{el.category}</h3>
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
            </div>
          </div >
        </>
      }
    </div>
  )
}