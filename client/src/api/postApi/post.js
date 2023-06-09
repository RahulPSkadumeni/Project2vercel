import { useDispatch } from "react-redux";
import { setPosts } from "../../pages/state";
import axios from "axios";
import BASE_URL from "../../utils/baseurl";
import Axios from "../../utils/axios";

export const getPosts = async (id) => {
  const response = await fetch(BASE_URL + `/api/posts/timeline/${id}`, {
    method: "GET",
  });
  return response.json();
};
const dispatch = useDispatch;
export const fetchPost = async (userId) => {
  console.log("fetch posts");
  let res = await axios.get(BASE_URL + "/api/posts/profile/" + userId);

  dispatch(
    setPosts({
      posts: res.data,
    })
  );
};

export const fetchAllPost = async () => {
  console.log("fetching all posts");
  try {
    const { data } = await Axios.get(`users/allPost`);
    console.log("kkkk", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
