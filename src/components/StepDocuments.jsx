function StepDocuments({
  formData,
  setFormData,
}) {
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        document: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFile}
      />

      {formData.preview && (
        <img
          src={formData.preview}
          alt="preview"
          className="preview-img"
        />
      )}
    </div>
  );
}

export default StepDocuments;