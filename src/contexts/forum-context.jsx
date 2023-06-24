/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { forumReducer, initialForum } from "../reducers/forum-reducer";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [forum, setForum] = useReducer(forumReducer, initialForum);

  return (
    <ForumContext.Provider value={{ forum, setForum }}>
      {children}
    </ForumContext.Provider>
  );
};

export const useForum = () => useContext(ForumContext);
