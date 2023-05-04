import Meta from "../components/Meta"
import BreadCrumb from '../components/BreadCrumb'

function ResetPassword() {
  return (
    <>
        <Meta title={"Reset Password"} />
        <BreadCrumb title="Reset Password"/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Reset Password</h3>
                            <form action="" className="mt-3 d-flex flex-column gap-30">
                                <div>
                                    <input className="form-control"
                                        type="password"
                                        name="name"
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    <input className="form-control mt-1"
                                        type="password"
                                        name="confirmpasswor"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0"> Submit </button>
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

export default ResetPassword