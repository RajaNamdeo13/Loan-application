function StepLoanDetails({
  formData,
  setFormData,
}) {
  return (
    <div className="grid-two">
      <input
        type="number"
        placeholder="Loan Amount"
        value={formData.loanAmount}
        onChange={(e) =>
          setFormData({
            ...formData,
            loanAmount: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Loan Tenure"
        value={formData.tenure}
        onChange={(e) =>
          setFormData({
            ...formData,
            tenure: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Monthly Income"
        value={formData.income}
        onChange={(e) =>
          setFormData({
            ...formData,
            income: e.target.value,
          })
        }
      />
    </div>
  );
}

export default StepLoanDetails;