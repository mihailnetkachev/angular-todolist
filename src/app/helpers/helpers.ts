export function compareStrings(firstString: string, secondString): boolean {
  const firstStringLowerCase = firstString.toLowerCase();
  const secondStringLowerCase = secondString.toLowerCase();
  return secondStringLowerCase.includes(firstStringLowerCase);
}
