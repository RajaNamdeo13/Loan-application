import React, { useRef } from "react";

import SignatureCanvas from "react-signature-canvas";

function StepSignature({
  formData,
  setFormData,
}) {

  const sigRef = useRef();

  // SAVE SIGNATURE

  const handleSave = () => {

    // CHECK EMPTY

    if (
      sigRef.current.isEmpty()
    ) {
      alert(
        "Please draw signature first"
      );

      return;
    }

    // SAVE IMAGE

    const image =
      sigRef.current
        .toDataURL();

    setFormData({
      ...formData,
      signature: image,
    });

    alert(
      "Signature Saved Successfully"
    );

    console.log(image);
  };

  // CLEAR

  const handleClear = () => {

    sigRef.current.clear();

    setFormData({
      ...formData,
      signature: "",
    });
  };

  return (
    <div>

      <h2>
        Draw Signature
      </h2>

      {/* CANVAS */}

      <div
        style={{
          border:
            "2px solid #ccc",

          width: "500px",
        }}
      >

        <SignatureCanvas
          ref={sigRef}
          penColor="black"
          canvasProps={{
            width: 500,
            height: 200,
            className: "sigCanvas",
          }}
        />

      </div>

      {/* BUTTONS */}

      <div
        style={{
          marginTop: "20px",

          display: "flex",

          gap: "20px",
        }}
      >

        <button
          onClick={handleSave}
        >
          Save Signature
        </button>

        <button
          onClick={handleClear}
        >
          Clear
        </button>

      </div>

      {/* PREVIEW */}

      {formData.signature && (
        <div
          style={{
            marginTop: "20px",
          }}
        >

          <h3>
            Preview
          </h3>

          <img
            src={formData.signature}
            alt="signature"
            width="300"
          />

        </div>
      )}

    </div>
  );
}

export default StepSignature;