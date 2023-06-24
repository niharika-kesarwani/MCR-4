import { forumConstants } from "../constants/forum-constants";
import { forumData } from "../data/forum-data";

const {
  CHANGE_SELECTED_SORT,
  CHANGE_DISPLAY_POSTS,
  HANDLE_UPVOTE,
  HANDLE_DOWNVOTE,
  SELECT_POST,
  HANDLE_BOOKMARK,
} = forumConstants;

export const forumReducer = (state, action) => {
  switch (action.payload) {
    case CHANGE_SELECTED_SORT:
      return { ...state, selectedSort: action.item };
    case CHANGE_DISPLAY_POSTS:
      return {
        ...state,
        displayPosts:
          state?.selectedSort === "Latest Posts"
            ? [...state.originalPosts]?.sort((a, b) => {
                const date1 = new Date(a.createdAt);
                const date2 = new Date(b.createdAt);
                return date2 - date1;
              })
            : [...state.originalPosts]?.sort((a, b) => a.upvotes > b.upvotes),
      };
    case HANDLE_UPVOTE:
      return {
        ...state,
        originalObject: {
          ...state?.originalObject,
          posts: state?.originalObject?.posts?.map((post) =>
            post?.postId === action?.item?.postId
              ? { ...post, upvotes: post?.upvotes + 1 }
              : post
          ),
        },
        originalPosts: state?.originalObject?.posts?.map((post) =>
          post?.postId === action?.item?.postId
            ? { ...post, upvotes: post?.upvotes + 1 }
            : post
        ),
        displayPosts: state?.originalObject?.posts?.map((post) =>
          post?.postId === action?.item?.postId
            ? { ...post, upvotes: post?.upvotes + 1 }
            : post
        ),
      };
    case HANDLE_DOWNVOTE: {
      return {
        ...state,
        originalObject: {
          ...state?.originalObject,
          posts: state?.originalObject?.posts?.map((post) =>
            post?.postId === action?.item?.postId
              ? { ...post, downvotes: post?.downvotes + 1 }
              : post
          ),
        },
        originalPosts: state?.originalObject?.posts?.map((post) =>
          post?.postId === action?.item?.postId
            ? { ...post, downvotes: post?.downvotes + 1 }
            : post
        ),
        displayPosts: state?.originalObject?.posts?.map((post) =>
          post?.postId === action?.item?.postId
            ? { ...post, downvotes: post?.downvotes + 1 }
            : post
        ),
      };
    }
    case SELECT_POST:
      return {
        ...state,
        selectedPost: state?.originalObject?.posts?.find(
          ({ postId }) => postId === action?.item?.postId
        ),
      };
    case HANDLE_BOOKMARK:
      return {
        ...state,
        originalObject: {
          ...state?.originalObject,
          posts: state?.originalObject?.posts?.map((post) =>
            post?.postId === action?.item?.postId
              ? { ...post, isBookmarked: !post?.isBookmarked }
              : post
          ),
        },
        originalPosts: state?.originalObject?.posts?.map((post) =>
          post?.postId === action?.item?.postId
            ? { ...post, isBookmarked: !post?.isBookmarked }
            : post
        ),
        displayPosts: state?.originalObject?.posts?.map((post) =>
          post?.postId === action?.item?.postId
            ? { ...post, isBookmarked: !post?.isBookmarked }
            : post
        ),
      };
    default:
      return state;
  }
};

export const initialForum = {
  selectedSort: "Latest Posts",
  originalObject: forumData,
  selectedPost: {},
  originalPosts: forumData?.posts,
  displayPosts: [...forumData.posts]?.sort((a, b) => {
    const date1 = new Date(a.createdAt);
    const date2 = new Date(b.createdAt);
    return date1 - date2;
  }),
};
