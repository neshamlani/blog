import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getData } from "../../store/rootReducers";
import BlogViewer from "../../components/BlogViewer";
import Page from "../../components/Page";

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const allBlogData = useSelector(({ blogData }) => blogData.data);
  let blogData = allBlogData;

  if (allBlogData.length > 5 && !location.pathname.includes("/all")) {
    blogData = allBlogData.slice(allBlogData.length - 5);
  }

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Page>
      <div className="container-xl">
        {blogData.length > 0 &&
          blogData.map((data) => <BlogViewer data={data} key={data.id} />)}
      </div>
    </Page>
  );
};

export default HomePage;
