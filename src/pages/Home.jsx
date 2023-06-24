import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <div className="flex w-full grow justify-center bg-gray-200">
      <div className="flex w-full flex-col justify-between px-5 pt-10 text-xl md:flex-row lg:max-w-5xl">
        <Sidebar />
        <div>
          <div className="font-bold">Latest Posts</div>
        </div>
        <div>
          <div className="font-bold">Sort By</div>
        </div>
      </div>
    </div>
  );
};
