import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profile-context";
import { Avatar, Dropdown, Badge, ButtonToolbar, Button } from "rsuite";
import Btn from "../components/ui/Button";
import CartItem from "../pages/Cart/CarteItem";

const renderToggle = (props, profile) => (
  <div {...props} className="flex items-center">
    <Avatar src={profile.profile_picture} circle />
  </div>
);

export default function Header() {
  const { profile, logout } = useContext(ProfileContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <nav className="flex justify-between items-center mx-auto max-w-[1600px] p-4 ">
        <div className="flex gap-1 items-center">
          <img src="/bhokmandu-logo.png" alt="" className="h-[60px]" />
          <Link to="/" className="text-3xl font-bold">
            BHOKMANDU
          </Link>
        </div>

        <div className="flex gap-3 items-center">
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
            <Btn type="link" path="/login">
              Login
            </Btn>
          )}

          <Badge content={5}>
            <button onClick={handleOpen}>
              <i class="fas fa-cart-plus text-2xl"></i>
            </button>
          </Badge>

          {/* <ButtonToolbar>
          <Button onClick={handleOpen}> Open</Button>
        </ButtonToolbar> */}

          <CartItem
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
          />
        </div>
      </nav>
      <hr className="border-t-0.3 bg-gray-700" />
    </>
  );
}
