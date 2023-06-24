import { Sidebar } from "../components/Sidebar";
import { SortBar } from "../components/SortBar";
import { forumData } from "../data/forum-data";
import { PostCard } from "../components/PostCard";

export const Home = () => {
  const { posts } = forumData;
  console.log(posts);

  return (
    <div className="flex w-full grow justify-center bg-gray-100">
      <div className="flex w-full flex-col justify-between px-5 pb-5 pt-10 text-xl md:flex-row lg:max-w-5xl">
        <Sidebar />
        <div className="flex h-full w-full flex-col gap-5">
          <div className="w-full font-bold">Latest Posts</div>
          <ul className="flex flex-col gap-5">
            {posts?.map((post) => (
              <PostCard key={post?.postId} postData={post} />
            ))}
          </ul>
        </div>
        <SortBar />
      </div>
    </div>
  );
};
