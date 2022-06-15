import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography'

export const HeadTitle = styled(Typography)(({ theme, active }) => ({
  color: active ? theme.palette.secondary.main : theme.palette.primary.main,
}));
