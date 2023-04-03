import React from "react";
import posts  from "../../data/posts";
import {Link} from "react-router-dom"

const PostList = () => {
  return (
    <div className="w-4/5 mx-auto px-5 py-6">
      <div className="border-b mb-5">
        <p className="text-rose-600">مقالات</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <div className="rounded shadow-xl overflow-hidden">
            <Link to={`/blog/${post.slug}`}>
              <img src={`/images/${post.image}`} alt="" className="w-full" />
            </Link>

            <div className="px-6 py-4 mb-auto">
              <div className="mb-3 text-rose-400">
                {post.categories.map((category, index) => (
                  <a href={category.slug} className="mx-1 text-xs">
                    {category.title}
                  </a>
                ))}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="font-medium text-lg inline-block hover:text-rose-500 transition duration-300"
              >
                {post.title}
              </Link>
              <p className="text-gray-500 text-sm mt-1">
                {post.shortDescription}
              </p>

              <div className="justify-end my-4 flex item-center">
                <div className="text-xs ml-2 pt-1">
                  <p>{post.author}</p>
                  <p>{post.insertedAt}</p>
                </div>
                <img
                  src="images/hmd_programmer.png"
                  alt=""
                  className="rounded-full w-10 h-10"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
