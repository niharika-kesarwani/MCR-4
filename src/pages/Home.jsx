import { Sidebar } from "../components/Sidebar";
import { SortBar } from "../components/SortBar";

export const Home = () => {
  return (
    <div className="flex w-full grow justify-center">
      <div className="flex w-full flex-col justify-between px-5 pb-5 pt-10 text-xl md:flex-row lg:max-w-5xl">
        <Sidebar />
        <div className="w-full">
          <div className="h-full w-full font-bold">Latest Posts</div>
        </div>
        <SortBar />
      </div>
    </div>
  );
};
