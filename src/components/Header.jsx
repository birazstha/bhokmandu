import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profile-context";
import { Avatar, Badge, Dropdown, Toggle } from "rsuite";
import Btn from "../components/ui/Button";
import CartItem from "../pages/Cart/CartItem";
import { ThemeContext } from "../context/theme-cart";
import { CartContext } from "../context/cart";

const renderToggle = (props, profile) => (
  <div {...props} className="flex items-center">
    <Avatar src={profile.profile_picture} circle />
  </div>
);

export default function Header() {
  const { profile, logout } = useContext(ProfileContext);
  const { theme, changeTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className={`transition-colors duration-500 ${
          theme === true ? "bg-white" : "bg-[#242527]"
        } fixed top-0 left-0 w-full z-50 shadow-md `}
      >
        <nav className="mx-auto max-w-[1600px] p-3 flex justify-between items-center">
          <Link to="/" className="flex gap-1 items-center">
            <img src="/bhokmandu-logo.png" alt="" className="h-[60px]" />
            <p
              className={`text-2xl font-bold mt-2 transition-colors duration-500  ${
                !theme && "text-white"
              }`}
            >
              BHOKMANDU
            </p>
          </Link>

          <div className="flex gap-3 items-center">
            {/* <Toggle
              size="lg"
              onClick={changeTheme}
              checkedChildren={<i className="fa fa-sun"></i>}
              unCheckedChildren={<i class="far fa-moon"></i>}
              defaultChecked={theme}
            /> */}

            <CartItem
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
            />

            <Badge content={cart ? cart.length : "0"}>
              <button onClick={handleOpen}>
                <i className="fas fa-cart-plus text-2xl text-primary"></i>
              </button>
            </Badge>

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
          </div>
        </nav>
      </div>

      <hr className={`border-t-0.3 ${!theme && "border-gray-800"}`} />
    </>
  );
}
