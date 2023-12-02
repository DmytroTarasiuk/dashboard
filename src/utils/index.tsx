import * as XLSX from "xlsx";

export function truncateText(input: string, letters: number) {
  if (input?.length > letters) {
    return input.substring(0, letters) + "...";
  }
  return input;
}

export const exportToCSV = (data, filename) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, `${filename}.csv`);
};
