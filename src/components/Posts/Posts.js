import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";
function Posts(props) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return <div>Posts</div>;
}

export default Posts;
