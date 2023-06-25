import { useContext } from "react";
import { PostContext, SectionTypes } from "./contexts/PostContext";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

export default function App() {
  const { post } = useContext(PostContext)
  return (
    <>
      {post.length === 0 ? <CreatePost/> : <EditPost />}
    </>
  )
}