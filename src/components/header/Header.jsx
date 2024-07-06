import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { logo } from "../../assets/index";
const Header = () => {
  return (
    <div>
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>

        <div className="headerHover">
          <LocationOnIcon/>
          <p className="text-sm text-ligtText font-light flex flex-col">
            Deliver to <span className="text-sm font-semibold -mt-1 text-whiteText">JF</span>
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Header;