function StepPersonal({
  formData,
  setFormData,
}) {
  return (
    <div className="grid-two">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={(e) =>
          setFormData({
            ...formData,
            mobile: e.target.value,
          })
        }
      />
    </div>
  );
}

export default StepPersonal;