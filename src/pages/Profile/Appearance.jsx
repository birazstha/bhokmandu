import { useContext } from "react";
import { Toggle } from "rsuite";
import { ThemeContext } from "../../context/theme-cart";

export default function Appearance(params) {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <Toggle
      size="lg"
      onClick={changeTheme}
      checkedChildren={<i className="fa fa-sun"></i>}
      unCheckedChildren={<i class="far fa-moon"></i>}
      defaultChecked={theme}
    />
  );
}
