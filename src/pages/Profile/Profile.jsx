import { useContext } from "react";
import { ProfileContext } from "../../context/profile-context";

export default function Profile(params) {
  const { profile } = useContext(ProfileContext);
  console.log(profile);
  return (
    <>
      {profile && (
        <>
          <h1>{profile.name}</h1>
          <img src={profile.profile_picture} alt="Profile" />
        </>
      )}
    </>
  );
}
