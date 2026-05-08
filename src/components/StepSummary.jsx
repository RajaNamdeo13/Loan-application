function StepSummary({ formData }) {
  return (
    <div className="summary-box">
      <h2>Application Summary</h2>

      <p>
        <strong>Name:</strong>{" "}
        {formData.name}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {formData.email}
      </p>

      <p>
        <strong>Loan Type:</strong>{" "}
        {formData.loanType}
      </p>

      <p>
        <strong>Loan Amount:</strong>{" "}
        ₹{formData.loanAmount}
      </p>

      <p>
        <strong>Income:</strong> ₹
        {formData.income}
      </p>
    </div>
  );
}

export default StepSummary;