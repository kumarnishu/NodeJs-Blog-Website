import { createContext, useState } from "react";

export const SectionTypes = {
  title: "title",
  paragraph: "paragraph"
};
export type Asset = {
  id: string;
  url: string;
};
export type Section = {
  id: string;
  type: string;
  value: string;
  asset?: Asset;
};

export type Post = Section[];
type Context = {
  post: Post
  postDispatch: React.Dispatch<React.SetStateAction<Post>>
};

export const PostContext = createContext<Context>({
  post: [],
  postDispatch: () => null,
});

export const PostProvider = ({ children }: { children: JSX.Element }) => {
  const [post, postDispatch] = useState<Post>([])
  return (
    <PostContext.Provider value={{ post, postDispatch }}>
      {children}
    </PostContext.Provider>
  );
};
