import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profile-context";
import { Avatar, Dropdown, Badge, ButtonToolbar, Button, Toggle } from "rsuite";
import Btn from "../components/ui/Button";
import CartItem from "../pages/Cart/CarteItem";
import { ThemeContext } from "../context/theme-cart";

const renderToggle = (props, profile) => (
  <div {...props} className="flex items-center">
    <Avatar src={profile.profile_picture} circle />
  </div>
);

export default function Header() {
  const { profile, logout } = useContext(ProfileContext);
  const { theme, changeTheme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className={`transition-colors duration-500 ${
          theme === true ? "" : "bg-[#242527]"
        }`}
      >
        <nav
          className={`mx-auto max-w-[1600px] p-4 flex justify-between items-center`}
        >
          <Link to="/" className="flex gap-1 items-center">
            <img src="/bhokmandu-logo.png" alt="" className="h-[60px]" />
            <p className={`text-2xl font-bold mt-2 transition-colors duration-500  ${!theme && "text-white"}`}>
              BHOKMANDU
            </p>
          </Link>

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

            {/* <Badge content={5}>
              <button onClick={handleOpen}>
                <i className="fas fa-cart-plus text-2xl text-primary"></i>
              </button>
            </Badge> */}

            <Toggle
              size="lg"
              onClick={changeTheme}
              checkedChildren={<i className="fa fa-sun"></i>}
              unCheckedChildren={<i class="far fa-moon"></i>}
              defaultChecked={theme}
            />

            <CartItem
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
            />
          </div>
        </nav>
      </div>

      <hr className={`border-t-0.3 ${!theme && "border-gray-800"}`} />
    </>
  );
}
