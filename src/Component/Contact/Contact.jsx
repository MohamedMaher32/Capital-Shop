import background from "../../image/header4.jpg"
export default function Contact() {
  return (
    <div className="contact py-5">
      <div className="page-header" style={{ backgroundImage: `url(${background})` }}>
        <h3>#Our Contact</h3>
        <p>We love to hear from you !</p>
      </div>
      <div className="container my-5 pt-5">
        <div className="row g-4">
          <div className="col-md-7 col-sm-12">
            <form>
              <div className="my-4">
                <textarea cols="30" rows="10" placeholder="Enter your message" className=" form-control rounded-0"></textarea>
              </div>
              <div className="my-4 d-flex justify-content-center align-items-center">
                <input type="text" className=" form-control rounded-0 me-2 py-3" placeholder="Enter your name" />
                <input type="email" className=" form-control rounded-0 ms-3 py-3" placeholder="Enter Email" />
              </div>
              <div className="my-4">
                <input type="text" className=" form-control rounded-0 py-3" placeholder="Enter your subject" />
              </div>
              <button className="btn rounded-0 py-3 px-5">Send</button>
            </form>
          </div>
          <div className="col-md-4 col-sm-12 offset-md-1">
            <div className="d-flex align-items-center my-5">
              <i className="fa-solid fa-house fs-2 me-3"></i>
              <div className="text">
                <h5 className="m-0 fw-bold">Cairo , Egypt.</h5>
                <p className="text-muted m-0">Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="d-flex align-items-center my-5">
              <i className="fa-solid fa-square-phone fs-2 me-3"></i>
              <div className="text ">
                <h5 className="m-0 fw-bold">+201098667330</h5>
                <p className="text-muted m-0">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="d-flex align-items-center my-5">
              <i className="fa-solid fa-envelope fs-2 me-3"></i>
              <div className="text ">
                <h5 className="m-0 fw-bold">Mhalosh43@gmail.com</h5>
                <p className="text-muted m-0">Send us your query anytime!</p>
              </div>
            </div>
            <div className="d-flex align-items-center my-5">
              <i className="fa-solid fa-globe fs-2 me-3"></i>
              <div className="text">
                <h5 className="m-0 fw-bold">MohamedMaher32</h5>
                <p className="text-muted m-0">See my projects in githup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}