import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import singleBlogCss from "./styles/single-blog.module.css"

// Image
import blogPage from "../../../../public/image/blog-page.jpg"

// Icon
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaSquarePen } from "react-icons/fa6";
import { BiSolidCommentDots } from "react-icons/bi";

const getPost = async (blog) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blog}`
  );

  return await res.json();
};

const SingleBlog = async ({ params }) => {

  const { blog } = await params
  const post = await getPost(blog)

  return (
    <>
      <div className={singleBlogCss.blog_section}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">

              <div className={singleBlogCss.blog_box}>
                <h3>{post.title}</h3>
                <div className='d-flex justify-content-start align-items-center gap-4'>
                  <div>
                    <span className='mb-0'><FaUser className={singleBlogCss.blogTopIcon} /> Ahmed Sadi</span>
                  </div>
                  <div>
                    <span className='mb-0'><MdOutlineDateRange className={singleBlogCss.blogTopIcon} /> 2023-08-03</span>
                  </div>
                  <div>
                    <span className='mb-0'><FaSquarePen className={singleBlogCss.blogTopIcon} /> Driving School</span>
                  </div>
                  <div>
                    <span className='mb-0'><BiSolidCommentDots className={singleBlogCss.blogTopIcon} /> 3 Comments</span>
                  </div>
                </div>
                <div className="py-4">
                  <Image src={blogPage} layout='responsive' alt='' className='rounded-4'></Image>
                </div>
                <p>{post.body}</p>
              </div>

              <div className={`mt-4 ${singleBlogCss.comment_form}`}>
                <h4>Leave a Comment</h4>
                <div className="mt-3">
                  <form action="">
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <input type="text" name='' className='form-control form-control-lg' placeholder='Enter your name ...' />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <input type="email" name='' className='form-control form-control-lg' placeholder='Enter your email ...' />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <textarea name="" className='form-control form-control-lg' placeholder='Enter your email ...' id=""></textarea>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className='btn btn-lg'>Post Comment</button>
                    </div>
                  </form>
                </div>
                <hr />
                
                <div className="all_comments">
                  <h4>2 comments</h4>
                  <div className="mt-4">
                    <div className={singleBlogCss.all_comments_box}>
                      <small>December 21, 2021 at 8:11 pm</small>
                      <h5>John Madword</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda accusamus quis corporis unde dolor, saepe maxime earum. Repellat dignissimos vitae iusto aspernatur blanditiis sapiente.</p>
                    </div>
                    <div className={singleBlogCss.all_comments_box}>
                      <small>December 21, 2021 at 8:11 pm</small>
                      <h5>John Madword</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda accusamus quis corporis unde dolor, saepe maxime earum. Repellat dignissimos vitae iusto aspernatur blanditiis sapiente.</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="col-lg-4">
              <div className={singleBlogCss.blog_right_part}>
                <h4 className='mb-4 text-center'>Our Recent Blog Post</h4>
                <div className={singleBlogCss.blog_right_related_box}>
                  <Link href="">
                    <div className='d-flex justify-content-start align-items-center gap-3'>
                      <div>
                        <Image src={blogPage} className={singleBlogCss.blog_relate_img} layout='responsive' alt=''></Image>
                      </div>
                      <div>
                        <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className={singleBlogCss.blog_right_related_box}>
                  <Link href="">
                    <div className='d-flex justify-content-start align-items-center gap-3'>
                      <div>
                        <Image src={blogPage} className={singleBlogCss.blog_relate_img} layout='responsive' alt=''></Image>
                      </div>
                      <div>
                        <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className={singleBlogCss.blog_right_related_box}>
                  <Link href="">
                    <div className='d-flex justify-content-start align-items-center gap-3'>
                      <div>
                        <Image src={blogPage} className={singleBlogCss.blog_relate_img} layout='responsive' alt=''></Image>
                      </div>
                      <div>
                        <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className={singleBlogCss.blog_right_related_box}>
                  <Link href="">
                    <div className='d-flex justify-content-start align-items-center gap-3'>
                      <div>
                        <Image src={blogPage} className={singleBlogCss.blog_relate_img} layout='responsive' alt=''></Image>
                      </div>
                      <div>
                        <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className={singleBlogCss.blog_right_related_box}>
                  <Link href="">
                    <div className='d-flex justify-content-start align-items-center gap-3'>
                      <div>
                        <Image src={blogPage} className={singleBlogCss.blog_relate_img} layout='responsive' alt=''></Image>
                      </div>
                      <div>
                        <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog