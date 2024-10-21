import React from "react";

type Iprops = {
  children: React.ReactNode;
};
export default function AuthLayout(props: Iprops) {
  return (
    <div>
      <div>Header of auth layout</div>
      <div>{props.children}</div>
    </div>
  );
}
