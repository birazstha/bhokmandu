import { GoogleLogin } from "@react-oauth/google";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../context/profile-context";

export default function Login(params) {
  const navigate = useNavigate();

  const { profile, login } = useContext(ProfileContext);

  useEffect(() => {
    if (profile) {
      console.log(profile);
      navigate("/");
    }
  }, [profile, navigate]);

  return (
    <>
      <GoogleLogin
        onSuccess={(response) => login(response, navigate)}
        onError={() => {
          console.log("Login Failed");
        }}
        scope="profile email"
        responseType="token"
      />
    </>
  );
}
