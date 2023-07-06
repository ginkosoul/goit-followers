import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersThunk } from "@/redux/users/operations";
import { Layout } from "@components";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);
  return <Layout />;
}
