import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
import Meta from "../components/Meta"

function CompareProduct() {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title="Compare Products"/>
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                         <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg'
                                     alt='cross' 
                                     className='position-absolute cross'
                                />
                                <div className='product-card-image'>
                                    <img src='images/watch.jpg' alt='watch'/>
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Học đi không thất nghiệp mất</h5>
                                    <h6 className='price mb-3 mt-3'>$100</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand: </h5>
                                            <p>Havels</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Type: </h5>
                                            <p>Watch</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>SKU: </h5>
                                            <p>Havels</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Availability: </h5>
                                            <p>In Stock</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Color: </h5>
                                            <div>
                                                <Color />
                                            </div>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Size: </h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>

                         <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg'
                                     alt='cross' 
                                     className='position-absolute cross'
                                />
                                <div className='product-card-image'>
                                    <img src='images/watch.jpg' alt='watch'/>
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Học đi không thất nghiệp mất</h5>
                                    <h6 className='price mb-3 mt-3'>$100</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand: </h5>
                                            <p>Havels</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Type: </h5>
                                            <p>Watch</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>SKU: </h5>
                                            <p>Havels</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Availability: </h5>
                                            <p>In Stock</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Color: </h5>
                                            <div>
                                                <Color />
                                            </div>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Size: </h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>

                         <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg'
                                     alt='cross' 
                                     className='position-absolute cross'
                                />
                                <div className='product-card-image'>
                                    <img src='images/watch.jpg' alt='watch'/>
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Học đi không thất nghiệp mất</h5>
                                    <h6 className='price mb-3 mt-3'>$100</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand: </h5>
                                            <p>Havels</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Type: </h5>
                                            <p>Watch</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>SKU: </h5>
                                            <p>Havels</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Availability: </h5>
                                            <p>In Stock</p>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Color: </h5>
                                            <div>
                                                <Color />
                                            </div>
                                        </div>

                                        <div className='product-details'>
                                            <h5>Size: </h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
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

export default CompareProduct