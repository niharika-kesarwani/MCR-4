import { Sidebar } from "../components/Sidebar";
import { SortBar } from "../components/SortBar";
import { PostCard } from "../components/PostCard";
import { useForum } from "../main";
import { useEffect } from "react";
import { forumConstants } from "../constants/forum-constants";

export const Home = () => {
  const {
    forum: { selectedSort, displayPosts },
    setForum,
  } = useForum();
  const { CHANGE_DISPLAY_POSTS } = forumConstants;

  useEffect(() => {
    setForum({ payload: CHANGE_DISPLAY_POSTS });
  }, []);

  return (
    <div className="flex w-full grow justify-center bg-gray-100">
      <div className="flex w-full flex-col justify-between px-5 pb-5 pt-10 text-xl md:flex-row lg:max-w-5xl">
        <Sidebar />
        <div className="flex h-full w-full flex-col gap-5">
          <div className="w-full font-bold">{selectedSort}</div>
          <ul className="flex flex-col gap-5">
            {displayPosts?.map((post) => (
              <PostCard key={post?.postId} postData={post} />
            ))}
          </ul>
        </div>
        <SortBar />
      </div>
    </div>
  );
};
