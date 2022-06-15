import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const SortButton = styled(Button)(({ sortDesc, theme }) => ({
  ".MuiSvgIcon-root": {
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: sortDesc ? "rotate(180deg);" : "rotate(0deg);",
  },
}));

export default SortButton;
