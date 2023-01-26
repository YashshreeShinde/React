import { Navigate } from "react-router-dom";
import PostsLayout from "../../Components/Users/Alumini/Posts/Posts Layout/PostsLayout";

export const AluminiRoutes=[
    {
        path: "",
        element: <Navigate replace to='posts' />
      },
      {
        path: "posts",
        element: <PostsLayout />,
        children:[]
      },
]