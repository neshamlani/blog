import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import dayjs from "dayjs";
import { getData } from "../../store/rootReducers";
import Page from "../../components/Page";
import placeholderImage from "../../assets/placeholderimage.png";
import "./Blog.css";

const initialValue = {
  title: "",
  content: "",
  author: "",
  image: "",
};

const Blog = () => {
  const [currentBlog, setCurrentBlog] = useState(initialValue);
  const params = useParams();
  const dispatch = useDispatch();
  const allBlogData = useSelector(({ blogData }) => blogData.data);

  useEffect(() => {
    if (params.blogId) {
      const blog = allBlogData.filter((data) => data.id === +params.blogId);
      setCurrentBlog(blog[0]);
    }
  }, [allBlogData]);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Page>
      <div className="container-xl pt-4">
        <div className="row m-0 d-flex flex-column-reverse flex-sm-row">
          <div className="col-12 col-sm-9">
            <div className="mb-3 show-title">{currentBlog.title}</div>
            <div className="mb-3 show-author">By: {currentBlog.author}</div>
            <div className="show-date">
              {dayjs(currentBlog.date).format("DD - MMMM - YYYY")}
            </div>
          </div>
          <div
            className="col-12 col-sm-3 d-flex align-items-center flex-column"
            role="button"
          >
            <img
              src={currentBlog.image || placeholderImage}
              className="placeholder-image"
            />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-12">
            <div className="mb-3 show-content">{currentBlog.content}</div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Blog;
