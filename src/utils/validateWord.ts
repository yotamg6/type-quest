export const validateWord = async (word: string): Promise<boolean> => {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
    );
    if (!res.ok) return false;
    const json = await res.json();
    return Array.isArray(json);
  } catch {
    return false;
  }
};
