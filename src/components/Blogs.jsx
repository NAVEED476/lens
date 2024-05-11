import React from "react";
import { PARA7, PARA8, PARA9 } from "../constants/constants";
import "./blogs.css";

const Blogs = () => {
  const blogData = [
    {
      date: "NEW!",
      title: 'Generative AI',
      content: PARA7
    },
    {
      date: "April 18, 2024",
      title: 'The Evolution of AI in Games',
      content: PARA8,
    },
    {
      date: "April 18, 2024",
      title: 'Unmasking the Misconceptions of Artificial Intelligence in the Workplace',
      content: PARA9
    },
  ];
  return (
    <div className="blogs-container">
      <div className="blog-head">
        <h2 className="blogs-heading">OUR BLOGS</h2>
        <div className="underline-blog"></div>
      </div>
      <p className="inHouse">Inhouse Mindscape</p>
      <div className="blog-main-container">
        {blogData.map((blog, index) => (
          <div className={`blog-sub-main ${index === 2 ? "blog-sub-main2" : ""}`} key={index}>
            <div className="new-blog-yellow"></div>
            <div className="blog-card">
              <div className="blog-card-container">
                <div className="blog-dates">
                  <span
                    style={{
                      fontSize: '20px',
                      fontWeight: '500',
                      lineHeight: '140.7%',
                      color: blog.date === 'NEW!' ? 'red' : 'grey'
                    }}
                  >
                    {blog.date}
                  </span>
                  <h2 className="card-title">{blog.title}</h2>
                </div>
                <div className="blog-box">
                  <p className="blog-para">{blog.content}</p>
                </div>
                <div className="read-btn">
                  <a href="#">
                    <button className="read-button">Read More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#">
        <button className='explore'>
          <div className="aboutbt">Explore more</div>
        </button>
      </a>
    </div>
  );
};

export default Blogs;
