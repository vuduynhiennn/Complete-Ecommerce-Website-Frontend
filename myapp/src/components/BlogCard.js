import { Link } from "react-router-dom"

function BlogCard() {
  return (
    <>
            <div className="blog-card">
                <div className="card-image">
                    <img className="img-fluid w-100" src="images/blog-1.jpg" alt="blog"/>
                </div>
                <div className="blog-content">
                    <p className="date">12 Feb, 2023</p>
                    <h5 className="title">Ráng cày ráng học không sau thất nghiệp chết đói</h5>
                    <p className="desc">Vậy nha, học cấu trúc dữ liệu giải thuật, chăm giải bài tập, Mở mạng masyt ính lên học, hcoj cả kiến trúc máy tính rồi tìm hiểu nhiều về toán nhé </p>
                    <Link to="/blog/:id" className="button">Read More</Link>
                </div>
            </div>
    </>
  )
}

export default BlogCard