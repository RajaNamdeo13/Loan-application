function StepIdentity({
  formData,
  setFormData,
}) {
  return (
    <div className="grid-two">
      <input
        type="text"
        placeholder="PAN Number"
        value={formData.pan}
        onChange={(e) =>
          setFormData({
            ...formData,
            pan: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Aadhaar Number"
        value={formData.aadhaar}
        onChange={(e) =>
          setFormData({
            ...formData,
            aadhaar: e.target.value,
          })
        }
      />
    </div>
  );
}

export default StepIdentity;