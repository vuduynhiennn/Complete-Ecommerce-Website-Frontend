import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

function OurStore(props) {
    const [ grid, setGrid ] = useState(4);

  return (
    <>
        <Meta title={"Our Store"} />
        <BreadCrumb title="Our Store"/>
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop By Categories
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>

                        </div>

                        <div className="filter-card mb-3">
                            <h3 className="filter-title"> Filter By </h3>

                            <div>
                            {/* filter by Availablity */}
                                <h5 className="sub-title">Availablity</h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                    <label className="form-check-label" htmlFor=""> In Stock (1)</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                    <label className="form-check-label" htmlFor=""> Out of Stock (0) </label>
                                </div>               

                            {/* filter by Price */}
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating ">
                                        <input type="email" 
                                            className="form-control"
                                            id="floatingInput" 
                                            placeholder="From" 
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    
                                    <div className="form-floating ">
                                        <input type="email" 
                                            className="form-control"
                                            id="floatingInput1" 
                                            placeholder="To" 
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>

                            {/* filter by Price */}
                                <h5 className="sub-title">Colors</h5>
                                <div>
                                        <Color />
                                </div>

                            {/* filter by size */}
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-s1"/>
                                        <label className="form-check-label" htmlFor="color-s1"> S (2) </label>
                                    </div>   
                                </div>
                            </div>
                        </div>
                            
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Product Tags
                            </h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Pc</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">PS 5</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Random Product
                            </h3>
                            <div>
                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className="img-fluid" alt="watch"/>
                                    </div>
                                    <div className="w-50">
                                        <h5>Thuốc chữa bệnh trĩ cho dân IT</h5>
                                        <ReactStars 
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={false}
                                            />
                                        <b className="price">$100</b>
                                    </div>
                                    <div className="w-25"></div>
                                </div>

                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className="img-fluid" alt="watch"/>
                                    </div>
                                    <div className="w-50">
                                        <h5>Thuốc chữa bệnh trĩ cho dân IT</h5>
                                        <ReactStars 
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={false}
                                            />
                                        <b className="price">$100</b>
                                    </div>
                                    <div className="w-25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4 d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{"width": "100px"}}> Sort By:</p>
                                    <select name="" className="form-control form-select" id="">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best Selling</option>
                                        <option value="title-ascending">Alphabetically, A - Z</option>
                                        <option value="title-descending">Alphabetically, Z - A</option>
                                        <option value="price-ascending">Price, low to high</option>
                                        <option value="price-descending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new to old</option>
                                    </select>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-10">
                                <p className="totalproducts mb-0"> 21 Products</p>
                                <div className="d-flex gap-10 align-items-center grid">
                                    <img src="images/gr2.svg" 
                                         className="d-block img-fluid" 
                                         alt="grid"
                                         onClick={() => setGrid(3)}
                                    />
                                    <img src="images/gr3.svg" 
                                         className="d-block img-fluid" 
                                         alt="grid"
                                         onClick={() => setGrid(4) }
                                    />
                                    <img src="images/gr4.svg" 
                                         className="d-block img-fluid" 
                                         alt="grid"
                                         onClick={() => setGrid(6) }
                                    />
                                    <img src="images/gr.svg" 
                                         className="d-block img-fluid" 
                                         alt="grid"
                                         onClick={ () => setGrid(12) }
                                    />
                                </div>
                            </div>     

                        </div>

                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStore