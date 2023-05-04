import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">

            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg" 
                     alt="main banner"
                     className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4> Suppercharged for pros </h4>
                  <h5>Iphone 14 Pro</h5>
                  <p>From $999 or $41.62/mo.</p>
                  <Link className="button">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                {/* first element */}
                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg" 
                      alt="main banner"
                      className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> Best Sake </h4>
                    <h5>Iphone 14 Pro</h5>
                    <p>From $999 <br/> or $41.62/mo.</p>
                  </div>
                </div>
                {/* second element  */}
                <div className="small-banner position-relative">
                    <img src="images/catbanner-02.jpg" 
                        alt="main banner"
                        className="img-fluid rounded-3"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4> NEW ARRIVAL  </h4>
                      <h5>Buy Ipad Air</h5>
                      <p>From $999 <br/> or $41.62/mo.</p>
                  
                    </div>
                  </div>
            
                {/* third element  */}
                  <div className="small-banner position-relative">
                    <img src="images/catbanner-03.jpg" 
                        alt="main banner"
                        className="img-fluid rounded-3"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4> NEW ARRIVAL  </h4>
                      <h5>Buy Ipad Air</h5>
                      <p>From $999 <br/> or $41.62/mo.</p>
                  
                    </div>
                  </div>
                
                {/* fourth element  */}
                  <div className="small-banner position-relative">
                    <img src="images/catbanner-04.jpg" 
                        alt="main banner"
                        className="img-fluid rounded-3"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4> NEW ARRIVAL  </h4>
                      <h5>Buy Ipad Air</h5>
                      <p>From $999 <br /> or $41.62/mo.</p>     
                    </div>
                </div> 
              </div> 
            </div>

          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15"> 
                  <img src="images/service.png" alt="services"/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all over orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15"> 
                  <img src="images/service-02.png" alt="services"/>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15"> 
                  <img src="images/service-03.png" alt="services"/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15"> 
                  <img src="images/service-04.png" alt="services"/>
                  <div>
                    <h6>Affordable Prices </h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15"> 
                  <img src="images/service-05.png" alt="services"/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0"> 100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-warpper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">

                <div className="d-flex gap-30  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt=""/>
                </div>

                <div className="d-flex gap-30  align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt=""/>
                </div>

                <div className="d-flex gap-30  align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt=""/>
                </div>

                <div className="d-flex gap-30  align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt=""/>
                </div>

                <div className="d-flex gap-30  align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt=""/>
                </div>

                <div className="d-flex gap-30  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt=""/>
                </div>

                <div className="d-flex gap-30  align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt=""/>
                </div>

                <div className="d-flex gap-30  align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt=""/>
                </div>     

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Featured Collection </h3>
            </div>
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://i.gadgets360cdn.com/products/large/samsung-galaxy-z-fold-3-646x800-1628693757.jpg?downsize=*:360" alt="products" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. For 24 mo.</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://smartviets.com/upload/zfold4/Samsung%20Galaxy%20ZFold%204%20ban%20Han%20mau%20do.jpg" alt="products" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5  className="text-dark">Studio Display</h5>
                  <h6  className="text-dark">600 nits of brightness.</h6>
                  <p  className="text-dark">27 inches 5k retina display</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://smartviets.com/upload/zfold4/Samsung%20Galaxy%20ZFold%204%20ban%20Han%20mau%20do.jpg" alt="products" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5  className="text-dark">Smart phone 13 pro</h5>
                  <h6  className="text-dark">600 nits of brightness.</h6>
                  <p  className="text-dark">Now in green from $999 to 99vnd</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://smartviets.com/upload/zfold4/Samsung%20Galaxy%20ZFold%204%20ban%20Han%20mau%20do.jpg" alt="products" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5  className="text-dark">Smart phone 13 pro</h5>
                  <h6  className="text-dark">600 nits of brightness.</h6>
                  <p  className="text-dark">Now in green from $999 to 99vnd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sepecial-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />

          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Popular Products </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex ">
                  <div className="mx-4 w-25 ">
                    <img src="images/brand-01.png" alt="Brand"/>
                  </div>

                  <div className="mx-4 w-25 ">
                    <img src="images/brand-02.png" alt="Brand"/>
                  </div>

                  <div className="mx-4 w-25 ">
                    <img src="images/brand-03.png" alt="Brand"/>
                  </div>

                  <div className="mx-4 w-25 ">
                    <img src="images/brand-04.png" alt="Brand"/>
                  </div>

                  <div className="mx-4 w-25 ">
                    <img src="images/brand-05.png" alt="Brand"/>
                  </div>

                  <div className="mx-4 w-25 ">
                    <img src="images/brand-06.png" alt="Brand"/>
                  </div>

                  <div className="mx-4 w-25 ">
                    <img src="images/brand-07.png" alt="Brand"/>
                  </div>

                  <div className="mx-4 w-25 ">
                    <img src="images/brand-08.png" alt="Brand"/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">

            <div className="col-12">
              <h3 className="section-heading"> Our Latest Blogs</h3>
            </div>

          </div>

          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            
          </div>
        </div>
      </section>

    </>
  )
}

export default Home