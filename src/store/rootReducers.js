import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const blogData = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getData: (state) => {
      let bdata = localStorage.getItem("blogData") || [];
      if (bdata.length > 0) {
        bdata = JSON.parse(bdata);
        state.data = bdata;
      }
    },
    addData: (state, action) => {
      const updatedData = [
        ...state.data,
        { ...action.payload, id: state.data.length + 1 },
      ];
      localStorage.setItem("blogData", JSON.stringify(updatedData));
    },
    updateData: (state, action) => {
      const data = action.payload;
      let updatedData = [...state.data];
      const currentBlogIndex = updatedData.findIndex(
        (blog) => blog.id === data.id
      );
      updatedData[currentBlogIndex] = data;
      state.data = updatedData;
      localStorage.setItem("blogData", JSON.stringify(updatedData));
    },
    deleteData: (state, action) => {
      const id = action.payload;
      const currentBlogIndex = state.data.findIndex((blog) => blog.id === id);
      const updatedData = [
        ...state.data.slice(0, currentBlogIndex),
        ...state.data.slice(0, currentBlogIndex + 1),
      ];
      state.data = updatedData;
      localStorage.setItem("blogData", JSON.stringify(updatedData));
    },
  },
});

export const { getData, addData, updateData, deleteData } = blogData.actions;

export default blogData.reducer;
