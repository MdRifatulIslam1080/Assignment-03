/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName[0] === "#") {
  console.log("Store");
} else {
  var array = fileName.split(".");
  if (array[1] === "pdf" || array[1] === "docx") {
    console.log("Store");
  } else {
    console.log("Delete");
  }
}
