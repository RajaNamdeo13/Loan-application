function StepLoanType({
  formData,
  setFormData,
}) {
  const loans = [
    {
      title: "Personal Loan",
      icon: "💳",
    },
    {
      title: "Home Loan",
      icon: "🏠",
    },
    {
      title: "Car Loan",
      icon: "🚗",
    },
    {
      title: "Education Loan",
      icon: "🎓",
    },
  ];

  return (
    <div className="loan-grid">
      {loans.map((loan, index) => (
        <div
          key={index}
          className={`loan-card ${
            formData.loanType === loan.title
              ? "selected-loan"
              : ""
          }`}
          onClick={() =>
            setFormData({
              ...formData,
              loanType: loan.title,
            })
          }
        >
          <div className="loan-icon">
            {loan.icon}
          </div>

          <h3>{loan.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default StepLoanType;