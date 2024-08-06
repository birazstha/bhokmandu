import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { useContext } from "react";
import { ProfileContext } from "../context/profile-context";
import { Avatar, Dropdown } from "rsuite";

const renderToggle = (props, profile) => (
  <div {...props} className="flex items-center">
    <Avatar src={profile.profile_picture} circle />
  </div>
);

export default function Header() {
  const { profile, logout } = useContext(ProfileContext);

  return (
    <nav className="flex justify-between items-center border-b-2 border-red-400 p-4">
      <div className="text-3xl font-bold">
        <Link to="/">BHOKMANDU</Link>
      </div>

      {profile ? (
        <div className="flex gap-2 justify-center">
          <Dropdown
            renderToggle={(props, ref) => renderToggle(props, profile)}
            placement="leftStart"
          >
            <Dropdown.Item as={Link} to="/profile">
              <div className="flex gap-2 items-center">
                <i className="fa fa-user"></i>
                <p> Profile</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="flex gap-2 items-center">
                <i className="fas fa-sign-out-alt"></i>
                <button onClick={() => logout()}>Logout</button>
              </div>
            </Dropdown.Item>
          </Dropdown>
        </div>
      ) : (
        <Button type="link" path="/login">
          Login
        </Button>
      )}
    </nav>
  );
}
