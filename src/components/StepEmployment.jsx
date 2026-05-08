function StepEmployment({
  formData,
  setFormData,
}) {
  return (
    <div className="grid-two">
      <input
        type="text"
        placeholder="Company Name"
        value={formData.company}
        onChange={(e) =>
          setFormData({
            ...formData,
            company: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Monthly Salary"
        value={formData.salary}
        onChange={(e) =>
          setFormData({
            ...formData,
            salary: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Work Experience"
        value={formData.experience}
        onChange={(e) =>
          setFormData({
            ...formData,
            experience: e.target.value,
          })
        }
      />
    </div>
  );
}

export default StepEmployment;