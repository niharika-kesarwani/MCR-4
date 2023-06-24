export const SortBar = () => {
  return (
    <div className="flex w-full flex-col gap-5 px-5">
      <div className="font-bold">Sort By</div>
      <div className="hover: flex h-10 cursor-pointer items-center rounded border bg-gray-200 px-5 hover:bg-pink-400">
        <div></div>
        <div>Latest Posts</div>
      </div>
      <div className="flex h-10 items-center rounded border bg-gray-200 px-5 hover:cursor-pointer hover:bg-pink-400">
        <div></div>
        <div>Most Upvoted Posts</div>
      </div>
    </div>
  );
};
