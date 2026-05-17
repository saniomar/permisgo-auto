import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blogCss from "./styles/blog.module.css"

// Image
import blogPage from "../../../../public/image/blog-page.jpg"

// Icon
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaSquarePen } from "react-icons/fa6";
import { BiSolidCommentDots } from "react-icons/bi";


export async function getPost () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await res.json()
}


const blog = async () => {

    const posts = await getPost()
    

  return (
    <>
        <div className={blogCss.blog_section}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            posts.map((items) => {
                                return (
                                    <div key={items.id}>
                                        <div className={blogCss.blog_box}>
                                            <Link href={`/blogs/${items.id}`}>
                                                <h3>{items.title}</h3>
                                            </Link>
                                            <div className='d-flex justify-content-start align-items-center gap-4'>
                                                <div>
                                                    <span className='mb-0'><FaUser className={blogCss.blogTopIcon} /> Ahmed Sadi</span>
                                                </div>
                                                <div>
                                                    <span className='mb-0'><MdOutlineDateRange className={blogCss.blogTopIcon} /> 2023-08-03</span>
                                                </div>
                                                <div>
                                                    <span className='mb-0'><FaSquarePen className={blogCss.blogTopIcon} /> Driving School</span>
                                                </div>
                                                <div>
                                                    <span className='mb-0'><BiSolidCommentDots className={blogCss.blogTopIcon} /> 3 Comments</span>
                                                </div>
                                            </div>
                                            <div className="py-4">
                                                <Image src={blogPage} layout='responsive' alt='' className='rounded-4'></Image>
                                            </div>
                                            <p>{items.body}...</p>
                                            <Link href={`/blogs/${items.id}`} className={`btn ${blogCss.blogBtn}`}>Read More</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="col-lg-4">
                        <div className={blogCss.blog_right_part}>
                            <h4 className='mb-4 text-center'>Our Recent Blog Post</h4>
                            <div className={blogCss.blog_right_related_box}>
                                <Link href="">
                                    <div className='d-flex justify-content-start align-items-center gap-3'>
                                        <div>
                                            <Image src={blogPage} className={blogCss.blog_relate_img} layout='responsive' alt=''></Image>
                                        </div>
                                        <div>
                                            <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className={blogCss.blog_right_related_box}>
                                <Link href="">
                                    <div className='d-flex justify-content-start align-items-center gap-3'>
                                        <div>
                                            <Image src={blogPage} className={blogCss.blog_relate_img} layout='responsive' alt=''></Image>
                                        </div>
                                        <div>
                                            <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className={blogCss.blog_right_related_box}>
                                <Link href="">
                                    <div className='d-flex justify-content-start align-items-center gap-3'>
                                        <div>
                                            <Image src={blogPage} className={blogCss.blog_relate_img} layout='responsive' alt=''></Image>
                                        </div>
                                        <div>
                                            <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className={blogCss.blog_right_related_box}>
                                <Link href="">
                                    <div className='d-flex justify-content-start align-items-center gap-3'>
                                        <div>
                                            <Image src={blogPage} className={blogCss.blog_relate_img} layout='responsive' alt=''></Image>
                                        </div>
                                        <div>
                                            <h5>Best Driving School Tips for Beginners attempt is a goal for many learners...</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className={blogCss.blog_right_related_box}>
                                <Link href="">
                                    <div className='d-flex justify-content-start align-items-center gap-3'>
                                        <div>
                                            <Image src={blogPage} className={blogCss.blog_relate_img} layout='responsive' alt=''></Image>
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

export default blog