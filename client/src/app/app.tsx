import { theme } from "@/theme";
import { Box, styled } from "@mui/material";

const StyledDiv = styled(Box)({
  color: 'red',
  [theme.breakpoints.down('md')]: {
    color: 'blue'
  }
})

export function App() {
  return <StyledDiv>Hellasdaso!</StyledDiv>;
}
