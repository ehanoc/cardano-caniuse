import React from "react";
import { Chip, styled, TableCell } from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';
import { useTheme } from "@mui/system";
import { red } from '@mui/material/colors';
const color = red[500];

export const SupportedCell = styled(TableCell)(prop => ({
  backgroundColor: prop.theme.palette.success.main,
  color: prop.theme.palette.getContrastText(prop.theme.palette.success.main),
  textAlign: "center",
  fontWeight: "bold"
}));

export const NotSupportedCell = styled(TableCell)(prop => ({
  backgroundColor: prop.theme.palette.error.main,
  color: prop.theme.palette.getContrastText(prop.theme.palette.success.main),
  textAlign: "center",
  fontWeight: "bold"
}));

export const PartialSupportedCell = styled(TableCell)(prop => ({
  backgroundColor: prop.theme.palette.warning.main,
  color:  prop.theme.palette.getContrastText(prop.theme.palette.success.main),
  textAlign: "center",
  fontWeight: "bold"
}));

export const UnknownCell = styled(TableCell)(prop => ({
  backgroundColor: prop.theme.palette.grey[600],
  color:  prop.theme.palette.getContrastText(prop.theme.palette.success.main),
  textAlign: "center",
  fontWeight: "bold"
}));

const StyledChip = styled(Chip)(prop => ({
  backgroundColor: prop.theme.palette.grey[600],
  color:  prop.theme.palette.getContrastText(prop.theme.palette.grey[600])
}));

export const ExperimentalChip = () => {
  const theme = useTheme();
  return <StyledChip sx={{marginBottom: '16px'}} label="NON-STANDARD" avatar={<ScienceIcon/>} />
}