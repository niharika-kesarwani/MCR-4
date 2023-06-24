/* eslint-disable react/prop-types */
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useForum } from "../main";
import { forumConstants } from "../constants/forum-constants";

export const PostCard = ({ postData }) => {
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = postData;
  const { setForum } = useForum();
  const { HANDLE_UPVOTE, HANDLE_DOWNVOTE, HANDLE_BOOKMARK } = forumConstants;

  return (
    <li className="flex gap-5 bg-white p-4" key={postId}>
      <div className="flex flex-col items-center gap-2">
        <div
          className={
            upvotes > downvotes
              ? "flex h-8 w-8 items-center justify-center rounded-full bg-pink-400 hover:cursor-pointer"
              : "flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer"
          }
          onClick={(e) => {
            e.stopPropagation();
            setForum({ payload: HANDLE_UPVOTE, item: postData });
          }}
        >
          <ArrowDropUpOutlinedIcon />
        </div>
        <div className="font-bold text-pink-500">{upvotes - downvotes}</div>
        <div
          className={
            downvotes > upvotes
              ? "flex h-8 w-8 items-center justify-center rounded-full bg-pink-400 hover:cursor-pointer"
              : "flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer"
          }
          onClick={(e) => {
            e.stopPropagation();
            setForum({ payload: HANDLE_DOWNVOTE, item: postData });
          }}
        >
          <ArrowDropDownOutlinedIcon />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full">
            <img src={picUrl} />
          </div>
          <div className="text-sm">
            Posted by <span className="text-pink-400">@{username}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">{post}</div>
          <div className="flex gap-3">
            {tags?.map((tag, index) => (
              <div
                key={index}
                className="flex justify-center rounded-lg  border bg-pink-200 px-2 py-0.5 text-center text-sm font-bold text-pink-400"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-sm">{postDescription}</div>
        </div>
        <hr />
        <div className="flex w-full justify-between">
          <div className="hover:cursor-pointer">
            <ModeCommentOutlinedIcon />
          </div>
          <div>
            <ShareOutlinedIcon />
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() =>
              setForum({ payload: HANDLE_BOOKMARK, item: postData })
            }
          >
            {isBookmarked ? (
              <BookmarkOutlinedIcon />
            ) : (
              <BookmarkBorderOutlinedIcon />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
