import {
  AlignJustifyIcon,
  ChevronDown,
  CloudRainWind,
  Search,
  User,
} from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h4>Тиксик</h4>
        <ChevronDown />
      </div>
      <CloudRainWind />
      <User />
      <Search />
      <AlignJustifyIcon />
    </div>
  );
};

export default Header;
