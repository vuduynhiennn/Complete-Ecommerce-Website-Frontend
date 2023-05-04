import Meta from "../components/Meta"
import BreadCrumb from '../components/BreadCrumb'
import { Link } from "react-router-dom"
function ForgotPassword() {
  return (
    <>
        <Meta title={"Forgot Password"} />
        <BreadCrumb title="Forgot Password"/>
        <div className="login-wrapper py-5 home-wrapper-2">
           <div className="container-xxl">
            <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Reset Your Password</h3>
                            <p className="text-center mt-2 mb-3">We will send you and email to reset your password</p>
                            <form action="" className="d-flex flex-column gap-30">
                                <div>
                                    <input className="form-control"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                        
                                <div>
                                    <div className=" d-flex justify-content-center flex-column gap-15 align-items-center">
                                        <button className="button border-0" type="submit"> Submit </button>
                                        <Link className="text-dark" to="/login">Cancel</Link>
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

export default ForgotPassword