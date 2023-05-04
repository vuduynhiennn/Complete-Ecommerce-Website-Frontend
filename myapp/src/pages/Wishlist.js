import Meta from "../components/Meta"
import BreadCrumb from '../components/BreadCrumb'
function  Wishlist() {
  return (
    <>  
        <Meta title={"Wishlist"} />
        <BreadCrumb title="Wishlist"/>
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross img-fluid" 
                                />
                                <div className="wishlist-card-image">
                                    <img className="w-100 img-fluid"
                                        src="images/watch.jpg" 
                                        alt="watch"
                                    />
                                    <div className="px-3 py-3">
                                        <h5 className="title">Ráng học đi em không sau thất nghiệp cả lũ đó em</h5>
                                        <h6 className="price">$ 100</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross img-fluid" 
                                />
                                <div className="wishlist-card-image">
                                    <img className="w-100 img-fluid"
                                        src="images/watch.jpg" 
                                        alt="watch"
                                    />
                                    <div className="px-3 py-3">
                                        <h5 className="title">Ráng học đi em không sau thất nghiệp cả lũ đó em</h5>
                                        <h6 className="price">$ 100</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross img-fluid" 
                                />
                                <div className="wishlist-card-image">
                                    <img className="w-100 img-fluid"
                                        src="images/watch.jpg" 
                                        alt="watch"
                                    />
                                    <div className="px-3 py-3">
                                        <h5 className="title">Ráng học đi em không sau thất nghiệp cả lũ đó em</h5>
                                        <h6 className="price">$ 100</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Wishlist