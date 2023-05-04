import Meta from "../components/Meta"
import BreadCrumb from '../components/BreadCrumb'
import { Link } from "react-router-dom"
function Login() {
  return (
    <>
        <Meta title={"Login"} />
        <BreadCrumb title="Login"/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Login</h3>
                            <form action="" className="mt-3 d-flex flex-column gap-30">
                                <div>
                                    <input className="form-control"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <input className="form-control mt-1"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    <Link to="/forgot-password" className="text-dark">Forgot Password</Link>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type="submit"> Login </button>
                                        <Link to="/sign-up" className="button border-0 signup">Sign Up</Link>
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

export default Login