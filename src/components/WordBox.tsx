import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import actionListener from "../utils/MyActionListener";
import { validateWord } from "../utils/validateWord";
import {
  BACKSPACE,
  CLEAR,
  KEYPRESS,
  MAX_LETTERS,
  SUBMIT,
} from "../utils/constants";

const WordBox = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const [bgColor, setBgColor] = useState<string>("grey");

  const letterRef = useRef<string[]>(letters);

  const handleKeyPress = (letter: string) => {
    if (letters.length >= MAX_LETTERS) return;
    setLetters((prev) => [...prev, letter]);
  };

  const handleBackspace = () => {
    const currentLettes = letterRef.current;

    if (currentLettes.length === 0) return;
    setLetters((prev) => prev.slice(0, -1));
  };

  const handleSubmit = async () => {
    const currentLettes = letterRef.current;
    if (currentLettes.length < MAX_LETTERS) return;
    const word = currentLettes.join("");
    const isValidWord = await validateWord(word);
    isValidWord ? setBgColor("green") : setBgColor("red");
  };

  const handleClear = () => {
    setLetters([]);
    setBgColor("grey");
  };

  useEffect(() => {
    letterRef.current = letters;
  }, [letters]);

  useEffect(() => {
    actionListener.registerListener(KEYPRESS, handleKeyPress);
    actionListener.registerListener(BACKSPACE, handleBackspace);
    actionListener.registerListener(SUBMIT, handleSubmit);
    actionListener.registerListener(CLEAR, handleClear);
    return () => {
      actionListener.removeListener(KEYPRESS);
      actionListener.removeListener(BACKSPACE);
      actionListener.removeListener(SUBMIT);
      actionListener.removeListener(CLEAR);
    };
  });

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {Array.from({ length: MAX_LETTERS }).map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 50,
            height: 50,
            border: `2px solid ${bgColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {letters[index]}
        </Box>
      ))}
    </Box>
  );
};

export default WordBox;
