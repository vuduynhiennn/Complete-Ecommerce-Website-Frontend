import Meta from "../components/Meta"
import BreadCrumb from '../components/BreadCrumb'

function Signup() {
  return (
    <>
        <Meta title={"Sign Up"} />
        <BreadCrumb title="Sign Up"/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                  <div className="col-12">
                      <div className="auth-card">
                          <h3 className="text-center">Sign Up</h3>
                          <form action="" className="mt-3 d-flex flex-column gap-30">
                              <div>
                                  <input className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                  />
                              </div>
                              <div>
                                  <input className="form-control mt-1"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                  />
                              </div>
                              <div>
                                  <input className="form-control mt-1"
                                        type="mobile"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                  />
                              </div>
                              <div>
                                  <input className="form-control mt-1"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                  />
                              </div>
                              <div>
                                  <div className="d-flex justify-content-center gap-15 align-items-center">
                                      <button className="button border-0"> Sign Up </button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Signup