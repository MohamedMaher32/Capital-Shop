import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategoryList } from "../../Rduex/DataSlice"
import { Link } from "react-router-dom";
import background from "../../image/header3.png"
export default function Categories() {
  let { AllCategoryList, loading } = useSelector((state) => state.AllCategoryData)
  console.log(AllCategoryList);
  let Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(getAllCategoryList())
  }, [])
  return (
    <div className="categories home py-5">
      {loading ?
        <div className="loading">
          <span className="loader"></span>
        </div>
        : <>
          <div className="page-header" style={{ backgroundImage: `url(${background})` }}>
            <h3>#Our Categories</h3>
            <p>Read all case studies about our products !</p>
          </div>
          <div className="container mt-5 pt-5">
            <div className="row g-4">
              {AllCategoryList.map((el) => {
                return <div className="col-lg-3 col-md-4 col-sm-6 " key={el}>
                  <Link to={"/specificcategory/" + el}>
                    <div className="shadow d-flex justify-content-center align-items-center text-center cat h-100">
                      <h3 className="py-3 text-capitalize">{el}</h3>
                    </div>
                  </Link>
                </div>
              })}
            </div>
          </div>
        </>

      }
    </div>
  )
}