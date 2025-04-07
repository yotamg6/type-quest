import { Box, Button } from "@mui/material";
import actionListener from "../utils/MyActionListener";
import {
  BACKSPACE,
  CLEAR,
  KEYBOARD_ROWS,
  KEYPRESS,
  SUBMIT,
} from "../utils/constants";
import BackspaceIcon from "@mui/icons-material/Backspace";

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
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
      }}
    >
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <Box key={rowIndex} sx={{ display: "flex", gap: 1 }}>
          {row.map((letter) => (
            <Button
              key={letter}
              variant="contained"
              onClick={() => handleKeyPress(letter)}
              sx={{ minWidth: 40 }}
            >
              {letter}
            </Button>
          ))}
        </Box>
      ))}
      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
        <Button
          variant="outlined"
          startIcon={<BackspaceIcon />}
          onClick={handleBackspace}
        ></Button>
        <Button variant="outlined" onClick={handleSubmit}>
          Enter
        </Button>
        <Button variant="outlined" color="error" onClick={handleClear}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default Keyboard;
