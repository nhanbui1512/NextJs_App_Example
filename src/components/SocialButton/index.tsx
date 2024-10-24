"use client";

import { Facebook } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function SocialButton() {
  return (
    <Button variant="contained" startIcon={<Facebook />}>
      Continue with facebook
    </Button>
  );
}
