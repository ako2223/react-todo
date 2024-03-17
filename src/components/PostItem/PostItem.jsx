import React from "react";
import style from "./PostItem.module.scss";

function PostItem({ post }) {
  return (
    <>
      {post.completed === true ? (
        <div className={style.post}>
          <h3>{post.id}</h3>
          <p>{post.title}</p>
          <input type="checkbox" defaultChecked name="" id={post.id} />
        </div>
      ) : (
        <div className={style.post}>
          <h3>{post.id}</h3>
          <p>{post.title}</p>
          <input type="checkbox" name="" id={post.id} />
        </div>
      )}
    </>
  );
}

export default PostItem;
