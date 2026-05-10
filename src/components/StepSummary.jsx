function StepSummary({
  formData,
}) {

  return (
    <div className="summary-container">

      {/* SUCCESS */}

      <div className="success-box">

        <div className="success-icon">
          ✓
        </div>

        <h1>
          Application Submitted
          Successfully
        </h1>

        <p>
          Your loan application has
          been submitted successfully.
          Our team will contact you
          shortly.
        </p>

      </div>

      {/* DETAILS */}

      <div className="summary-card">

        <h2>
          Application Details
        </h2>

        <div className="summary-grid">

          <div>
            <strong>
              Loan Type:
            </strong>

            <p>
              {formData.loanType}
            </p>
          </div>

          <div>
            <strong>
              Full Name:
            </strong>

            <p>
              {formData.name}
            </p>
          </div>

          <div>
            <strong>Email:</strong>

            <p>
              {formData.email}
            </p>
          </div>

          <div>
            <strong>
              Mobile:
            </strong>

            <p>
              {formData.mobile}
            </p>
          </div>

          <div>
            <strong>PAN:</strong>

            <p>
              {formData.pan}
            </p>
          </div>

          <div>
            <strong>
              Aadhaar:
            </strong>

            <p>
              {formData.aadhaar}
            </p>
          </div>

          <div>
            <strong>
              Company:
            </strong>

            <p>
              {formData.company}
            </p>
          </div>

          <div>
            <strong>
              Salary:
            </strong>

            <p>
              ₹ {formData.salary}
            </p>
          </div>

          <div>
            <strong>
              Loan Amount:
            </strong>

            <p>
              ₹ {formData.loanAmount}
            </p>
          </div>

          <div>
            <strong>
              Tenure:
            </strong>

            <p>
              {formData.tenure} Months
            </p>
          </div>

        </div>

      </div>

      {/* EXIT */}

      <button
        className="exit-btn"
        onClick={() =>
          window.location.reload()
        }
      >
        Exit Application
      </button>

    </div>
  );
}

export default StepSummary;