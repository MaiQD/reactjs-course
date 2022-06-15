import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Stack, SvgIcon } from "@mui/material";

import * as Styled from "./style";

export default function ProductFilter({ sort, onClickSortButton }) {
  return (
    <Stack direction={"row"}>
      <Styled.SortButton
        sortDesc={sort === "D"}
        onClick={onClickSortButton}
        endIcon={<SvgIcon component={ArrowUpwardIcon} />}
      >
        Sort
      </Styled.SortButton>
    </Stack>
  );
}
