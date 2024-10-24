import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { SpotifyLogo } from "../Icons";
import Button from "../Button";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx(["h-[64px] p-2 bg-black"])}>
      <div className={cx("wrapper")}>
        <div className="mx-5">
          <SpotifyLogo />
        </div>
        <div>Center</div>
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
