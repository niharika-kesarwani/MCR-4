import { useForum } from "../main";
import { forumConstants } from "../constants/forum-constants";

export const SortBar = () => {
  const {
    forum: { selectedSort },
    setForum,
  } = useForum();
  const { CHANGE_SELECTED_SORT, CHANGE_DISPLAY_POSTS } = forumConstants;

  return (
    <div className="flex w-full max-w-fit flex-col gap-5 px-5">
      <div className="font-bold">Sort By</div>
      <div
        className={
          selectedSort === "Latest Posts"
            ? "flex h-10 items-center rounded border bg-pink-400 px-5"
            : "flex h-10 items-center rounded border bg-gray-200 px-5 hover:cursor-pointer hover:bg-pink-400"
        }
        onClick={() => {
          setForum({ payload: CHANGE_SELECTED_SORT, item: "Latest Posts" });
          setForum({ payload: CHANGE_DISPLAY_POSTS });
        }}
      >
        <div></div>
        <div>Latest Posts</div>
      </div>
      <div
        className={
          selectedSort === "Most Upvoted Posts"
            ? "flex h-10 items-center rounded border bg-pink-400 px-5"
            : "flex h-10 items-center rounded border bg-gray-200 px-5 hover:cursor-pointer hover:bg-pink-400"
        }
        onClick={() => {
          setForum({
            payload: CHANGE_SELECTED_SORT,
            item: "Most Upvoted Posts",
          });
          setForum({ payload: CHANGE_DISPLAY_POSTS });
        }}
      >
        <div></div>
        <div>Most Upvoted Posts</div>
      </div>
    </div>
  );
};
