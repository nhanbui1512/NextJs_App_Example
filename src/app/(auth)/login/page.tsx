import { Facebook, Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="max-w-[580px] m-auto flex flex-col text-center">
      <div className="flex flex-col mb-8">
        <h1 className="text-[#333] text-3xl">Log in</h1>
        <div className="flex justify-center text-base">
          <h3>{`Don't have an account?`}</h3>
          <Link href={"/register"} className="underline ml-2">
            Sign up
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          sx={{
            borderRadius: 10,
            bgcolor: "#fff",
            color: "#333",
            textTransform: "none",
            borderColor: "black",
            borderWidth: "1px",
            height: "64px",
          }}
          variant="contained"
          startIcon={<Facebook />}
        >
          Continue with facebook
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            bgcolor: "#fff",
            color: "#333",
            textTransform: "none",
            borderColor: "black",
            borderWidth: "1px",
            height: "64px",
          }}
          variant="contained"
          startIcon={<Google />}
        >
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
