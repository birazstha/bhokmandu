import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ProfileContext } from "../context/profile-context";
import { useContext } from "react";
import { Loader } from "rsuite";

export default function Page(params) {
  const { loading } = useContext(ProfileContext);

  return (
    <>
      {loading ? (
        <Loader center content="Loading..." vertical size="lg" />
      ) : (
        <>
          <Header />
          <div className="p-5 mx-auto max-w-[1600px]">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
