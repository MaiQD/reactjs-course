import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  ".body": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
