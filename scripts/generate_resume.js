import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputDir = path.resolve('public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'Arjun_R_Resume.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 42, right: 42 },
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Corporate colors
const primaryColor = '#0F172A'; // Slate 900
const accentColor = '#1E40AF';  // Blue 800
const mutedColor = '#475569';   // Slate 600
const ruleColor = '#CBD5E1';    // Slate 300

// Header
doc.fontSize(22).font('Helvetica-Bold').fillColor(primaryColor).text('ARJUN R', { tracking: 1.5 });
doc.fontSize(11).font('Helvetica-Bold').fillColor(accentColor).text('ACCOUNTANT EXECUTIVE | ACCOUNTING & ADMINISTRATION PROFESSIONAL');
doc.moveDown(0.3);

// Contact row
doc.fontSize(9).font('Helvetica').fillColor(mutedColor)
   .text('Kollam, Kerala   •   Phone: +91 8281142735   •   Email: anduarjun@gmail.com   •   LinkedIn: linkedin.com/in/arjun-raju-kollam');

doc.moveDown(0.6);
doc.strokeColor(ruleColor).lineWidth(1).moveTo(42, doc.y).lineTo(553, doc.y).stroke();
doc.moveDown(0.7);

function sectionHeader(title) {
  doc.fontSize(10.5).font('Helvetica-Bold').fillColor(accentColor).text(title.toUpperCase(), { tracking: 1 });
  doc.moveDown(0.2);
  doc.strokeColor(ruleColor).lineWidth(0.5).moveTo(42, doc.y).lineTo(553, doc.y).stroke();
  doc.moveDown(0.4);
}

// Professional Summary
sectionHeader('Professional Summary');
doc.fontSize(9).font('Helvetica').fillColor(primaryColor).lineGap(2)
   .text(
     'Detail-oriented and experienced accounting professional with over four years of expertise in financial analysis, accounting software proficiency, and administrative management. Skilled in leveraging SAP FICO, Tally, and advanced MS Excel to optimize financial processes and ensure regulatory compliance. Proven track record of contributing to organizational success through exceptional teamwork, adaptability, and problem-solving skills.',
     { align: 'justify' }
   );
doc.moveDown(0.8);

// Professional Experience
sectionHeader('Professional Experience');

function experienceItem(role, company, period, location, bullets) {
  doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text(role);
  doc.fontSize(9).font('Helvetica-Bold').fillColor(accentColor).text(`${company}  |  ${location}`, { continued: true });
  doc.font('Helvetica-Oblique').fillColor(mutedColor).text(`  (${period})`, { align: 'right' });
  doc.moveDown(0.3);
  
  bullets.forEach(bullet => {
    doc.fontSize(8.5).font('Helvetica').fillColor(primaryColor).lineGap(1.5)
       .text(`•  ${bullet}`, { indent: 10 });
  });
  doc.moveDown(0.6);
}

experienceItem(
  'Accountant Executive',
  'Luxon Tata',
  'April 2024 – Present',
  'Kollam, Kerala',
  [
    'Maintained accurate books of accounts and ensured timely recording of financial transactions.',
    'Managed monthly financial tasks including tax filings.',
    'Prepared detailed financial reports for decision-making and strategic planning.',
    'Streamlined tax filing processes, resulting in a 15% reduction in processing time.',
    'Coordinated with external auditors and supported efficient audit processes.'
  ]
);

experienceItem(
  'Manager (Administration & Accounts)',
  'Gen Trends Hospitality Pvt Ltd',
  'July 2023 – April 2024',
  'Kowdiar, Trivandrum',
  [
    'Assisted with tax audits and prepared required documentation.',
    'Prepared and verified books of accounts.',
    'Managed GST filing and reconciliation.',
    'Facilitated MSME registration.',
    'Prepared payroll accurately and on time.',
    'Managed import-export license applications and renewals.'
  ]
);

experienceItem(
  'Customer Service Executive',
  'ESAF',
  'October 2022 – April 2023',
  'Parippally',
  [
    'Delivered customer service while managing financial transactions and client accounts.',
    'Assisted with customer inquiries.',
    'Supported customer satisfaction and issue resolution.'
  ]
);

experienceItem(
  'Administration & Collection Executive',
  'Kerala Vyapari Vyavasayi Ekopana Samithi — Oyoor Unit',
  'April 2018 – August 2022',
  'Oyoor, Kerala',
  [
    'Streamlined collection processes, achieving a 15% reduction in overdue accounts.',
    'Organized financial records and reports.',
    'Coordinated with external auditors.',
    'Supported efficient audit processes.'
  ]
);

// Education
sectionHeader('Education');
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('University of Kerala');
doc.fontSize(8.5).font('Helvetica').fillColor(mutedColor).text('Bachelor of Commerce (B.Com) in Taxation & Law  |  Graduation: 2020');
doc.moveDown(0.3);

doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('G-TEC Education Institute');
doc.fontSize(8.5).font('Helvetica').fillColor(mutedColor).text('Diploma in Indian & Foreign Accounting  |  Completed: 2022');
doc.moveDown(0.8);

// Certifications
sectionHeader('Certifications');
const certs = [
  'Diploma in Corporate Accounts & Management',
  'Diploma in GST & Professional Accounting',
  'Tally Certified',
  'SAP Certified',
  'Microsoft Office Certified',
  'QuickBooks Certified'
];
doc.fontSize(8.5).font('Helvetica').fillColor(primaryColor)
   .text(`• ${certs.slice(0, 3).join('     • ')}`)
   .text(`• ${certs.slice(3).join('     • ')}`);
doc.moveDown(0.8);

// Skills
sectionHeader('Skills & Competencies');
doc.fontSize(8.5).font('Helvetica-Bold').fillColor(accentColor).text('Technical Skills: ', { continued: true });
doc.font('Helvetica').fillColor(primaryColor).text('SAP FICO, Tally ERP 9, Microsoft Excel, Microsoft Word, Microsoft PowerPoint, QuickBooks, Financial Reporting.');
doc.moveDown(0.2);
doc.fontSize(8.5).font('Helvetica-Bold').fillColor(accentColor).text('Professional Skills: ', { continued: true });
doc.font('Helvetica').fillColor(primaryColor).text('Communication, Problem Solving, Time Management, Adaptability, Critical Thinking.');

doc.end();

stream.on('finish', () => {
  console.log('Resume PDF successfully created at:', outputPath);
});
