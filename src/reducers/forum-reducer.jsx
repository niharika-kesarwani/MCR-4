import { forumConstants } from "../constants/forum-constants";
import { forumData } from "../data/forum-data";

const {
  CHANGE_SELECTED_SORT,
  HANDLE_UPVOTE,
  HANDLE_DOWNVOTE,
  SELECT_POST,
  HANDLE_BOOKMARK,
} = forumConstants;

export const forumReducer = (state, action) => {
  switch (action.payload) {
    case CHANGE_SELECTED_SORT:
      return { ...state, selectedSort: action.item };
    case HANDLE_UPVOTE:
      return {
        ...state,
        forumData: {
          ...state?.forumData,
          posts: state?.forumData?.posts?.map((post) =>
            post?.postId === action?.item?.postId
              ? { ...post, upvotes: post?.upvotes + 1 }
              : post
          ),
        },
      };
    case HANDLE_DOWNVOTE: {
      return {
        ...state,
        forumData: {
          ...state?.forumData,
          posts: state?.forumData?.posts?.map((post) =>
            post?.postId === action?.item?.postId
              ? { ...post, downvotes: post?.downvotes + 1 }
              : post
          ),
        },
      };
    }
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action?.item,
      };
    case HANDLE_BOOKMARK:
      return {
        ...state,
        forumData: {
          ...state?.forumData,
          posts: state?.forumData?.posts?.map((post) =>
            post?.postId === action?.item?.postId
              ? { ...post, isBookmarked: !post?.isBookmarked }
              : post
          ),
        },
      };
    default:
      return state;
  }
};

export const initialForum = {
  selectedSort: "Latest Posts",
  forumData: forumData,
  selectedPost: {},
};
