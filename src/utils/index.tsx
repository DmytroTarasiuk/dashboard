export function truncateText(input: string, letters: number) {
  if (input?.length > letters) {
    return input.substring(0, letters) + "...";
  }
  return input;
}
