import React, { useState, useRef, useEffect } from "react";
import { Label, FormFeedback, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData, deleteData } from "../../store/rootReducers";
import dayjs from "dayjs";
import Page from "../../components/Page";
import "./NewBlog.css";
import placeholderImage from "../../assets/placeholderimage.png";

const initialValue = {
  title: "",
  content: "",
  author: "",
  image: "",
};

const errorState = {
  title: false,
  content: false,
  author: false,
};

const NewBlog = () => {
  const [currentBlog, setCurrentBlog] = useState(initialValue);
  const [error, setError] = useState(errorState);
  const blogData = useSelector(({ blogData }) => blogData.data);
  const params = useParams();
  const imageUploadRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openFileUpload = () => imageUploadRef.current.click();
  const handleFileUpload = ({ target: { files } }) => {
    const file = files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      var base64data = reader.result;
      setCurrentBlog({ ...currentBlog, image: base64data });
    };
  };

  const handleSubmit = () => {
    const { title, content, author } = currentBlog;
    if (!title || !author || !content) {
      setError({
        ...error,
        title: !title,
        author: !author,
        content: !content,
      });
      return;
    }
    if (params.blogId) {
      dispatch(updateData(currentBlog));
      navigate("/");
      return;
    }
    const blogData = {
      ...currentBlog,
      date: dayjs(),
    };
    dispatch(addData(blogData));
    navigate("/");
  };

  const handleChange = ({ target: { name, value } }) =>
    setCurrentBlog({ ...currentBlog, [name]: value });

  const handleDelete = () => {
    dispatch(deleteData(params.blogId));
    navigate("/");
  };

  useEffect(() => {
    if (params.blogId) {
      const blog = blogData.filter((data) => data.id === +params.blogId);
      setCurrentBlog(blog[0]);
    }
  }, []);

  return (
    <Page>
      <div className="container-xl pt-4">
        <div className="row m-0 d-flex flex-column-reverse flex-sm-row">
          <div className="col-12 col-sm-9">
            <div className="mb-3">
              <Label className="blog-title">Title*</Label>
              <Input
                placeholder="Blog title"
                name="title"
                value={currentBlog.title}
                onChange={handleChange}
                invalid={error.title}
              />
              <FormFeedback>Title can not be empty</FormFeedback>
            </div>
            <div className="mb-3">
              <Label className="blog-title">Author*</Label>
              <Input
                placeholder="Blog title"
                name="author"
                value={currentBlog.author}
                onChange={handleChange}
                invalid={error.author}
              />
              <FormFeedback>Author can not be empty</FormFeedback>
            </div>
          </div>
          <div
            className="col-12 col-sm-3 d-flex align-items-center flex-column"
            role="button"
            onClick={openFileUpload}
          >
            <img
              src={currentBlog.image || placeholderImage}
              className="placeholder-image"
            />
            <div>Upload image</div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-12">
            <div className="mb-3">
              <Label className="blog-title">Content*</Label>
              <Input
                type="textarea"
                placeholder="Enter blog content here..."
                name="content"
                multiple
                rows="6"
                value={currentBlog.content}
                onChange={handleChange}
                invalid={error.content}
              />
              <FormFeedback>Content can not be empty</FormFeedback>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between">
            <Button onClick={handleSubmit}>Save</Button>
            {params.blogId && <Button onClick={handleDelete}>Delete</Button>}
          </div>
        </div>
      </div>
      <input
        className="d-none"
        type="file"
        accept="image/*"
        ref={imageUploadRef}
        onChange={handleFileUpload}
      />
    </Page>
  );
};

export default NewBlog;
