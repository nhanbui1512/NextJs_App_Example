"use client";
import classNames from "classnames/bind";
import styles from "./CircleButton.module.scss";
import { ReactNode } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

type CircleButtonProps = {
  children: ReactNode;
  transparent?: boolean;
  tooltipContent?: string;
  className?: string;
};
export default function CircleButton({ children, tooltipContent, transparent = false, className }: CircleButtonProps) {
  return (
    <>
      {tooltipContent ? (
        <Tippy arrow={false} content={tooltipContent}>
          <div className={cx("wrapper", { transparent }, className)}>{children}</div>
        </Tippy>
      ) : (
        <div className={cx("wrapper", { transparent }, className)}>{children}</div>
      )}
    </>
  );
}
