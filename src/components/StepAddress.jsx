function StepAddress({
  formData,
  setFormData,
}) {
  return (
    <div className="grid-two">
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) =>
          setFormData({
            ...formData,
            address: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            city: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) =>
          setFormData({
            ...formData,
            state: e.target.value,
          })
        }
      />
    </div>
  );
}

export default StepAddress;