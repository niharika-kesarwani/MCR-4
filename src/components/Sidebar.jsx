import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between gap-5 pb-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-x-3">
          <HomeOutlinedIcon />
          <div>Home</div>
        </div>
        <div className="flex items-center gap-x-3">
          <ExploreOutlinedIcon />
          <div>Explore</div>
        </div>
        <div className="flex items-center gap-x-3">
          <BookmarkBorderOutlinedIcon />
          <div>Bookmarks</div>
        </div>
        <div className="flex items-center gap-x-3">
          <PermIdentityOutlinedIcon />
          <div>Profile</div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-lg">
        <div className="h-10 w-10 rounded-full bg-gray-400"></div>
        <div>
          <div className="font-bold">Niharika Kesarwani</div>
          <div>@niharikakesarwani</div>
        </div>
      </div>
    </div>
  );
};
