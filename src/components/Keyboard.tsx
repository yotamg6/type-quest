import { Box, Button } from "@mui/material";
import actionListener from "../utils/MyActionListener";
import {
  BACKSPACE,
  CLEAR,
  KEYBOARD,
  KEYPRESS,
  SUBMIT,
} from "../utils/constants";

const Keyboard = () => {
  const handleKeyPress = (letter: string) => {
    actionListener.emit(KEYPRESS, letter);
  };

  const handleBackspace = () => {
    actionListener.emit(BACKSPACE, null);
  };

  const handleSubmit = () => {
    actionListener.emit(SUBMIT, null);
  };

  const handleClear = () => {
    actionListener.emit(CLEAR, null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "center",
      }}
    >
      {KEYBOARD.map((letter) => (
        <Button
          key={letter}
          variant="contained"
          onClick={() => handleKeyPress(letter)}
        >
          {letter}
        </Button>
      ))}
      <Button variant="outlined" onClick={handleBackspace}>
        Backspace
      </Button>
      <Button variant="outlined" onClick={handleSubmit}>
        Enter
      </Button>
      <Button variant="outlined" color="error" onClick={handleClear}>
        Clear
      </Button>
    </Box>
  );
};

export default Keyboard;
