import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { SpotifyLogo } from "../Icons";
import Button from "../Button";
import CircleButton from "../CircleButton";
import { Home } from "@mui/icons-material";
import Search from "../Search";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx(["h-[64px] p-2 bg-black"])}>
      <div className={cx("wrapper")}>
        <div className="mx-5">
          <SpotifyLogo />
        </div>
        <div className="w-[546px] min-w-[350px]">
          <div className="flex items-center">
            <CircleButton tooltipContent="Trang chủ">
              <Home sx={{ fontSize: 24 }} />
            </CircleButton>
            <div className="flex-1">
              <div className="px-2">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <Button className={cx("sign-up-btn")} text>
            Đăng ký
          </Button>
          <Button>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}
