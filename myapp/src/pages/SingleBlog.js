import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi"

function SingleBlog() {
  return (
    <>
        <Meta title={"Dynamic Blog Name"} />
        <BreadCrumb title="Dynamic Blog Name"/>
        <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'> 
                      <div className="single-blog-card">
                        <Link to="/blogs" className="d-flex align-items-center gap-10"> <HiOutlineArrowLeft className="fs-4" />Go back to blogs</Link>
                        <h3 className="title">Hoc di khong that nghiep do anh ban</h3>
                        <img src="/images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog"/>
                        <p className="blog-content"> Mấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm m Mấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm mMấy con chó ngu ảo tưởng mình giỏi, nhìn hề vl. Óc chó suy nghĩ ngắn hạn học được ba cái xàm lồn về làm màu làm mè chả nhẽ cười ỉa vào mồm m</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog