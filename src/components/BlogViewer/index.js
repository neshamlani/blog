import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import "./BlogViewer.css";
import editIcon from "../../assets/edit.png";
import placeholderImage from "../../assets/placeholderimage.png";

const BlogViewer = ({ data }) => {
  const { author, title, content, date, image, id } = data;
  const navigate = useNavigate();
  const handleRedirect = (e) => {
    e.stopPropagation();
    navigate(`/update/${id}`);
  };
  const showBlog = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className="row border-bottom border-secondary blog-wrapper ms-0 me-0 d-flex flex-column-reverse flex-sm-row"
      role="button"
      onClick={showBlog}
    >
      <div className="col-12 col-sm-10 d-flex flex-column">
        <div className="blog-title">{title}</div>
        <div className="d-flex justify-content-between flex-column flex-sm-row">
          <div className="author">By: {author}</div>
          <div>{dayjs(date).format("DD - MMMM - YYYY")}</div>
        </div>
        <div className="mt-2 content-wrap">{content}</div>
        <img
          src={editIcon}
          className="edit-icon"
          role="button"
          onClick={handleRedirect}
        />
      </div>
      <div className="col-12 col-sm-2 d-flex justify-content-center">
        <img src={image || placeholderImage} className="blog-image" />
      </div>
    </div>
  );
};

export default BlogViewer;
