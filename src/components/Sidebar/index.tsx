import React from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CircleButton from "../CircleButton";
import { Add } from "@mui/icons-material";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <div className="bg-[var(--background-base)] h-full rounded-lg">
      <div className="px-4 pt-3 pb-2 flex justify-between items-center">
        <div className="py-2 px-2 flex text-[var(--text-subdued)]">
          <LibraryMusicIcon fontSize="medium" />
          <h2 className="ml-3 font-bold">Thư viện</h2>
        </div>
        <div>
          <CircleButton className={cx("add-btn")} tooltipContent="Tạo danh sách phát hoặc thư mục">
            <Add fontSize="medium" />
          </CircleButton>
        </div>
      </div>
      <div className="px-2 pb-2 mt-4">
        <section className="py-4 px-5 gap-5 flex flex-col bg-[var(--gray-background)] rounded-lg my-2">
          <div className="flex flex-col">
            <span>Tạo danh sách phát của bạn</span>
            <span>Rất dễ! Chúng tôi sẽ giúp bạn</span>
          </div>
          <Button className={cx("create-lib-btn")}>Tạo danh sách phát</Button>
        </section>
      </div>
    </div>
  );
}
