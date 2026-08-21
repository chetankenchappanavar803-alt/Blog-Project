import React from "react";
import { Services } from "../../auth.js/storage";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow">
        <div className="w-full h-48 overflow-hidden">
          <img
            src={Services.filePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
