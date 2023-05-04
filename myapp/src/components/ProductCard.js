import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

function ProductCard(props) {
  let location = useLocation();
  const {grid} = props;
  return (
    <>
         <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="wishlist"/>
                  </Link>

                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"className="img-fluid" alt="product" />
                    <img src="images/acc.jpg" className="img-fluid"alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones buld 10 pack multi colered for students
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={3}
                      edit={false}
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}
                    >Chăm học vào không thất nghiệp đấy cu, tốn bao nhiêu tiền bạc của bố mẹ thì ráng mà học cho nên người, đừng chơi bời linh tinh vớ va vớ vản là ngu đấy em ạ</p>
                    <p className="price">$100.000 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <Link> 
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link> 

                      <Link> 
                        <img src="images/view.svg" alt="view" />
                      </Link>

                      <Link> 
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                </div>
            </div>
         </div>

         <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="wishlist"/>
                  </Link>

                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"className="img-fluid" alt="product" />
                    <img src="images/acc.jpg" className="img-fluid"alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones buld 10 pack multi colered for students
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={3}
                      edit={false}
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}
                    >Chăm học vào không thất nghiệp đấy cu, tốn bao nhiêu tiền bạc của bố mẹ thì ráng mà học cho nên người, đừng chơi bời linh tinh vớ va vớ vản là ngu đấy em ạ</p>
                    <p className="price">$100.000 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <Link> 
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link> 

                      <Link> 
                        <img src="images/view.svg" alt="view" />
                      </Link>

                      <Link> 
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                </div>
            </div>
         </div>

         <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="wishlist"/>
                  </Link>

                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"className="img-fluid" alt="product" />
                    <img src="images/acc.jpg" className="img-fluid"alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones buld 10 pack multi colered for students
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={3}
                      edit={false}
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}
                    >Chăm học vào không thất nghiệp đấy cu, tốn bao nhiêu tiền bạc của bố mẹ thì ráng mà học cho nên người, đừng chơi bời linh tinh vớ va vớ vản là ngu đấy em ạ</p>
                    <p className="price">$100.000 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <Link> 
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link> 

                      <Link> 
                        <img src="images/view.svg" alt="view" />
                      </Link>

                      <Link> 
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                </div>
            </div>
         </div>

         <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="wishlist"/>
                  </Link>

                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"className="img-fluid" alt="product" />
                    <img src="images/acc.jpg" className="img-fluid"alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones buld 10 pack multi colered for students
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={3}
                      edit={false}
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}
                    >Chăm học vào không thất nghiệp đấy cu, tốn bao nhiêu tiền bạc của bố mẹ thì ráng mà học cho nên người, đừng chơi bời linh tinh vớ va vớ vản là ngu đấy em ạ</p>
                    <p className="price">$100.000 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <Link> 
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link> 

                      <Link> 
                        <img src="images/view.svg" alt="view" />
                      </Link>

                      <Link> 
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                </div>
            </div>
         </div>

         <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="wishlist"/>
                  </Link>

                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"className="img-fluid" alt="product" />
                    <img src="images/acc.jpg" className="img-fluid"alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones buld 10 pack multi colered for students
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={3}
                      edit={false}
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}
                    >Chăm học vào không thất nghiệp đấy cu, tốn bao nhiêu tiền bạc của bố mẹ thì ráng mà học cho nên người, đừng chơi bời linh tinh vớ va vớ vản là ngu đấy em ạ</p>
                    <p className="price">$100.000 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <Link> 
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link> 

                      <Link> 
                        <img src="images/view.svg" alt="view" />
                      </Link>

                      <Link> 
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                </div>
            </div>
         </div>

         <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="wishlist"/>
                  </Link>

                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"className="img-fluid" alt="product" />
                    <img src="images/acc.jpg" className="img-fluid"alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones buld 10 pack multi colered for students
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={3}
                      edit={false}
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}
                    >Chăm học vào không thất nghiệp đấy cu, tốn bao nhiêu tiền bạc của bố mẹ thì ráng mà học cho nên người, đừng chơi bời linh tinh vớ va vớ vản là ngu đấy em ạ</p>
                    <p className="price">$100.000 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <Link> 
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link> 

                      <Link> 
                        <img src="images/view.svg" alt="view" />
                      </Link>

                      <Link> 
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                </div>
            </div>
         </div>

         <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="wishlist"/>
                  </Link>

                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"className="img-fluid" alt="product" />
                    <img src="images/acc.jpg" className="img-fluid"alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones buld 10 pack multi colered for students
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={3}
                      edit={false}
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}
                    >Chăm học vào không thất nghiệp đấy cu, tốn bao nhiêu tiền bạc của bố mẹ thì ráng mà học cho nên người, đừng chơi bời linh tinh vớ va vớ vản là ngu đấy em ạ</p>
                    <p className="price">$100.000 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <Link> 
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link> 

                      <Link> 
                        <img src="images/view.svg" alt="view" />
                      </Link>

                      <Link> 
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                </div>
            </div>
         </div>


         <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="wishlist"/>
                  </Link>

                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"className="img-fluid" alt="product" />
                    <img src="images/acc.jpg" className="img-fluid"alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones buld 10 pack multi colered for students
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={3}
                      edit={false}
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none "}`}
                    >Chăm học vào không thất nghiệp đấy cu, tốn bao nhiêu tiền bạc của bố mẹ thì ráng mà học cho nên người, đừng chơi bời linh tinh vớ va vớ vản là ngu đấy em ạ</p>
                    <p className="price">$100.000 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <Link> 
                        <img src="images/prodcompare.svg" alt="compare" />
                      </Link> 

                      <Link> 
                        <img src="images/view.svg" alt="view" />
                      </Link>

                      <Link> 
                        <img src="images/add-cart.svg" alt="addcart" />
                      </Link>
                    </div>
                </div>
            </div>
         </div>
         
    </>
  )
}

export default ProductCard