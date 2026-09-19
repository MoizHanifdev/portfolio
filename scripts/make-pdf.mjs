import fs from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";

async function createResumePdf() {
  const imgPath = path.resolve("public/images/resume-thumbnail.jpg");
  const imgBytes = fs.readFileSync(imgPath);

  const pdfDoc = await PDFDocument.create();
  const image = await pdfDoc.embedJpg(imgBytes);

  // Use the image dimensions or standard A4 proportions
  const { width, height } = image.scale(1);
  const page = pdfDoc.addPage([width, height]);

  page.drawImage(image, {
    x: 0,
    y: 0,
    width: width,
    height: height,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("public/resume.pdf", pdfBytes);
  console.log(`Generated public/resume.pdf successfully (${pdfBytes.length} bytes, ${width}x${height})`);
}

createResumePdf().catch(console.error);
