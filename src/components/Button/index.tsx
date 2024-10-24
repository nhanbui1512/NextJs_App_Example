"use client";

import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { ReactNode } from "react";
const cx = classNames.bind(styles);

type ButtonProps = {
  children: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rounded?: boolean;
  text?: boolean;
  className?: string;
};

export default function Button({
  children,
  leftIcon,
  rightIcon,
  className,
  text = false,
  rounded = true,
}: ButtonProps) {
  const classes = cx("wrapper", { rounded, text }, className);

  return (
    <div className={classes}>
      {leftIcon && <div>{leftIcon}</div>}
      <span>{children}</span>
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
}
