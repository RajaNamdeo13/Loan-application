function StepWelcome({ setStep }) {
  return (
    <div className="welcome-container">

      <div className="welcome-content">

        <h1>
          Smart Digital Loan
          Application Platform
        </h1>

        <p>
          Fast, Secure And Modern Loan
          Processing Experience Built
          For Customers.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            ⚡ Instant Approval
          </div>

          <div className="feature-card">
            🔒 Secure Verification
          </div>

          <div className="feature-card">
            💳 Flexible Loans
          </div>

          <div className="feature-card">
            📄 Paperless Process
          </div>

        </div>

        <button
          className="start-btn"
          onClick={() => setStep(1)}
        >
          Start Application →
        </button>

      </div>

    </div>
  );
}

export default StepWelcome;