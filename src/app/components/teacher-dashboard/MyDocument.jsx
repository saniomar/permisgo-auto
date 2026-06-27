"use client";

import { FaChevronLeft, FaUpload } from "react-icons/fa";

const documentSections = [
  {
    title: "IDENTITY & LEGAL STATUS",
    items: ["Valid ID (Passport or National ID)", "Valid residence permit (if non-EU)"],
  },
  {
    title: "DRIVING LICENSE",
    items: ["Category B license", "Minimum 3 years of driving experience"],
  },
  {
    title: "INSTRUCTOR QUALIFICATION",
    items: ["Obtain Titre Professionnel ECSR (Driving Instructor Diploma)"],
  },
  {
    title: "TEACHING AUTHORIZATION",
    items: ["Apply for “Autorisation d’enseigner” from the Prefecture"],
  },
  {
    title: "MEDICAL CERTIFICATE",
    items: ["Get a medical fitness certificate from an approved doctor"],
  },
  {
    title: "CRIMINAL RECORD CHECK",
    items: ["Clean criminal record (Casier judiciaire – Bulletin n°2)"],
  },
  {
    title: "BUSINESS REGISTRATION",
    items: [
      "Register as auto-entrepreneur or company",
      "Get your SIRET number (via URSSAF/INSEE)",
    ],
  },
  {
    title: "PROFESSIONAL INSURANCE",
    items: ["Liability insurance (Responsabilité civile professionnelle)"],
  },
];

const downloadableDocs = [
  {
    title: "DOWNLOAD THE FONT OF THE PERMIT *",
  },
  {
    title: "DOWNLOAD THE BACK OF THE PERMIT *",
  },
];

export default function MyDocument() {
  return (
    <section className="document-page">
      <div className="document-header">
        <div className="d-flex align-items-start gap-3">
          <button type="button" className="document-back-btn">
            <FaChevronLeft />
          </button>

          <div>
            <h2 className="document-title mb-1">Document</h2>
            <p className="document-subtitle mb-0">
              Update your information to ensure accurate lesson scheduling and
              communication.
            </p>
          </div>
        </div>
      </div>

      <div className="document-list">
        {documentSections.map((section, index) => (
          <div className="document-card" key={index}>
            <div className="document-card-content">
              <h5>{section.title}</h5>

              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <label className="upload-document-btn">
              <FaUpload className="upload-icon" />
              Upload Document
              <input type="file" hidden />
            </label>
          </div>
        ))}
      </div>

      <div className="download-area">
        <p className="download-text">
          You will find below the list of your downloadable documents:
        </p>

        <div className="row g-4">
          {downloadableDocs.map((doc, index) => (
            <div className="col-12 col-lg-6" key={index}>
              <div className="download-card">
                <h5>{doc.title}</h5>

                <button type="button" className="download-btn">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}












