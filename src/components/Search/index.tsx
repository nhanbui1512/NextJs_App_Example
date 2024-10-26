"use client";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import CircleButton from "../CircleButton";
import { StorageIcon } from "../Icons";

const cx = classNames.bind(styles);

export default function Search() {
  return (
    <div className={cx("wrapper")}>
      <div className="absolute top-0 left-0">
        <CircleButton transparent tooltipContent="Tìm kiếm">
          <SearchIcon className="text-[var(--gray-text)]" />
        </CircleButton>
      </div>
      <div className={cx("input-wrapper", "w-full")}>
        <input className="bg-transparent outline-none py-3 pr-16 pl-[42px] w-full cursor-pointer" />
      </div>

      <div className={cx(["devider", "absolute top-0 right-0"])}>
        <CircleButton transparent tooltipContent="Duyệt tìm">
          <StorageIcon />
        </CircleButton>
      </div>
    </div>
  );
}
