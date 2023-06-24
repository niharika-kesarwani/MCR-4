/* eslint-disable react/prop-types */
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export const CommentCard = ({ commentData, postUsername }) => {
  const { commentId, username, name, picUrl, likes, comment, createdAt } =
    commentData;

  return (
    <li className="flex gap-5" key={commentId}>
      <div className="h-10 w-10 rounded-full">
        <img src={picUrl} />
      </div>
      <div className="flex grow flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <div>
            <div>
              {name}{" "}
              <span className="text-sm text-gray-400">
                @{username} {createdAt}
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Replying to <span className="text-pink-400">@{postUsername}</span>
          </div>
          <div>{comment}</div>
        </div>
        <div className="flex justify-between">
          <FavoriteBorderOutlinedIcon />
          <ModeCommentOutlinedIcon />
          <ShareOutlinedIcon />
        </div>
      </div>
    </li>
  );
};
