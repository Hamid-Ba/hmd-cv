import React from "react";

const PostList = () => {
  return (
    <div className="w-4/5 mx-auto px-5 py-6">
      <div className="border-b mb-5">
        <p className="text-rose-600">مقالات</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="rounded shadow-xl overflow-hidden">
          <a href="">
            <img src="images/projects/project1.jpg" alt="" className="w-full" />
          </a>

          <div className="px-6 py-4 mb-auto">
            <div className="mb-3 text-rose-400">
              <a href="#" className="mx-1 text-xs">
                دسته 1
              </a>
              <a href="#" className="mx-1 text-xs">
                دسته 2
              </a>
              <a href="#" className="mx-1 text-xs">
                دسته 3
              </a>
            </div>
            <a
              href="#"
              className="font-medium text-lg inline-block hover:text-rose-500 transition duration-300"
            >
              عنوان مقاله
            </a>
            <p className="text-gray-500 text-sm mt-1">
              توضیحات کوتاه راجب مقاله
            </p>

            <div className="justify-end my-4 flex item-center">
              <div className="text-xs ml-2 pt-1">
                <p>حمید بلال زاده</p>
                <p>۱ آبان ۱۳۷۹</p>
              </div>
              <img
                src="images/hmd_programmer.png"
                alt=""
                className="rounded-full w-10 h-10"
              />
            </div>
          </div>
        </div>
        <div className="rounded shadow-xl overflow-hidden">
          <a href="">
            <img src="images/projects/project1.jpg" alt="" className="w-full" />
          </a>

          <div className="px-6 py-4 mb-auto">
            <div className="mb-3 text-rose-400">
              <a href="#" className="mx-1 text-xs">
                دسته 1
              </a>
              <a href="#" className="mx-1 text-xs">
                دسته 2
              </a>
              <a href="#" className="mx-1 text-xs">
                دسته 3
              </a>
            </div>
            <a
              href="#"
              className="font-medium text-lg inline-block hover:text-rose-500 transition duration-300"
            >
              عنوان مقاله
            </a>
            <p className="text-gray-500 text-sm mt-1">
              توضیحات کوتاه راجب مقاله
            </p>

            <div className="justify-end my-4 flex item-center">
              <div className="text-xs ml-2 pt-1">
                <p>حمید بلال زاده</p>
                <p>۱ آبان ۱۳۷۹</p>
              </div>
              <img
                src="images/hmd_programmer.png"
                alt=""
                className="rounded-full w-10 h-10"
              />
            </div>
          </div>
        </div>
        <div className="rounded shadow-xl overflow-hidden">
          <a href="">
            <img src="images/projects/project1.jpg" alt="" className="w-full" />
          </a>

          <div className="px-6 py-4 mb-auto">
            <div className="mb-3 text-rose-400">
              <a href="#" className="mx-1 text-xs">
                دسته 1
              </a>
              <a href="#" className="mx-1 text-xs">
                دسته 2
              </a>
              <a href="#" className="mx-1 text-xs">
                دسته 3
              </a>
            </div>
            <a
              href="#"
              className="font-medium text-lg inline-block hover:text-rose-500 transition duration-300"
            >
              عنوان مقاله
            </a>
            <p className="text-gray-500 text-sm mt-1">
              توضیحات کوتاه راجب مقاله
            </p>

            <div className="justify-end my-4 flex item-center">
              <div className="text-xs ml-2 pt-1">
                <p>حمید بلال زاده</p>
                <p>۱ آبان ۱۳۷۹</p>
              </div>
              <img
                src="images/hmd_programmer.png"
                alt=""
                className="rounded-full w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
