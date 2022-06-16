import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@mui/material/styles/styled";

export const Container = styled(Box)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
export const Spinner = styled(CircularProgress)`
	margin: 10rem auto;
`