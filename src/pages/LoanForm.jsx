import { useEffect, useState } from "react";

import toast, {
  Toaster,
} from "react-hot-toast";

import StepWelcome from "../components/StepWelcome";
import StepLoanType from "../components/StepLoanType";
import StepPersonal from "../components/StepPersonal";
import StepIdentity from "../components/StepIdentity";
import StepAddress from "../components/StepAddress";
import StepEmployment from "../components/StepEmployment";
import StepLoanDetails from "../components/StepLoanDetails";
import StepDocuments from "../components/StepDocuments";
import StepSignature from "../components/StepSignature";
import StepSummary from "../components/StepSummary";

function LoanForm() {
  const totalSteps = 10;

  const [step, setStep] = useState(0);

  const [formData, setFormData] =
    useState({
      loanType: "",

      name: "",
      email: "",
      mobile: "",

      pan: "",
      aadhaar: "",

      address: "",
      city: "",
      state: "",

      company: "",
      salary: "",
      experience: "",

      loanAmount: "",
      tenure: "",
      income: "",

      document: null,
      preview: "",

      signature: "",
    });

  // =========================
  // LOCAL STORAGE
  // =========================

  useEffect(() => {
    const saved =
      localStorage.getItem("loan-data");

    const savedStep =
      localStorage.getItem("loan-step");

    if (saved) {
      setFormData(JSON.parse(saved));
    }

    if (savedStep) {
      setStep(Number(savedStep));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "loan-data",
      JSON.stringify(formData)
    );

    localStorage.setItem(
      "loan-step",
      step
    );
  }, [formData, step]);

  // =========================
  // VALIDATION
  // =========================

  const validateStep = () => {
    if (step === 1 && !formData.loanType) {
      toast.error("Select Loan Type");
      return false;
    }

    if (
      step === 2 &&
      (!formData.name ||
        !formData.email ||
        !formData.mobile)
    ) {
      toast.error(
        "Fill Personal Details"
      );
      return false;
    }

    if (
      step === 3 &&
      (!formData.pan ||
        !formData.aadhaar)
    ) {
      toast.error(
        "Fill Identity Details"
      );
      return false;
    }

    if (
      step === 4 &&
      (!formData.address ||
        !formData.city ||
        !formData.state)
    ) {
      toast.error(
        "Fill Address Details"
      );
      return false;
    }

    if (
      step === 5 &&
      (!formData.company ||
        !formData.salary)
    ) {
      toast.error(
        "Fill Employment Details"
      );
      return false;
    }

    if (
      step === 6 &&
      (!formData.loanAmount ||
        !formData.tenure ||
        !formData.income)
    ) {
      toast.error(
        "Fill Loan Details"
      );
      return false;
    }

    if (
      step === 7 &&
      !formData.document
    ) {
      toast.error("Upload Document");
      return false;
    }

    if (
      step === 8 &&
      !formData.signature
    ) {
      toast.error("Save Signature");
      return false;
    }

    return true;
  };

  // =========================
  // NEXT
  // =========================

  const handleNext = () => {
    if (!validateStep()) return;

    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  // =========================
  // BACK
  // =========================

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // =========================
  // TITLES
  // =========================

  const titles = [
    "Welcome",

    "Loan Type",

    "Personal Information",

    "Identity Verification",

    "Address Details",

    "Employment Details",

    "Loan Details",

    "Document Upload",

    "Digital Signature",

    "Application Summary",
  ];

  // =========================
  // PROGRESS
  // =========================

  const progress =
    ((step + 1) / totalSteps) * 100;

  return (
    <div className="main-layout">
      <Toaster position="top-right" />

      {/* SIDEBAR */}

      <div className="sidebar">
        <h1 className="logo">
          FinSure Loan
        </h1>

        {titles.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setStep(index)
            }
            className={`step-item ${
              step === index
                ? "active"
                : ""
            }`}
          >
            <div className="circle">
              {index + 1}
            </div>

            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}

      <div className="content">
        <p className="step-count">
          Step {step + 1} Of{" "}
          {totalSteps}
        </p>

        <h1 className="title">
          {titles[step]}
        </h1>

        {/* PROGRESS BAR */}

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* FORM */}

        <div className="form-box">

          {step === 0 && (
            <StepWelcome
              setStep={setStep}
            />
          )}

          {step === 1 && (
            <StepLoanType
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 2 && (
            <StepPersonal
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 3 && (
            <StepIdentity
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 4 && (
            <StepAddress
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 5 && (
            <StepEmployment
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 6 && (
            <StepLoanDetails
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 7 && (
            <StepDocuments
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 8 && (
            <StepSignature
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 9 && (
            <StepSummary
              formData={formData}
            />
          )}

        </div>

        {/* BUTTONS */}

        {step !== 0 && (
          <div className="nav-buttons">

            <button
              onClick={handleBack}
              disabled={step === 0}
            >
              Back
            </button>

            <button
              onClick={handleNext}
            >
              {step ===
              totalSteps - 1
                ? "Completed"
                : "Continue"}
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default LoanForm;