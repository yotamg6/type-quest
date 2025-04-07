import { Container, Box, Typography } from "@mui/material";
import WordBox from "./components/WordBox";
import Keyboard from "./components/Keyboard";

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        TypeQuest
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <WordBox />
      </Box>

      <Keyboard />
    </Container>
  );
};

export default App;
