import * as XLSX from "xlsx";

export const parseExcelFile = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    
    reader.onload = (event) => {
      const binaryString = event.target?.result;
      if (typeof binaryString === "string") {
        const workbook = XLSX.read(binaryString, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);
        resolve(data);
      } else {
        reject("Invalid file format");
      }
    };
    
    reader.onerror = (error) => reject(error);
  });
};