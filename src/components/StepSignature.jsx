import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";

function StepSignature({
  formData,
  setFormData,
}) {
  const sigRef = useRef();

  const saveSignature = () => {
    const url =
      sigRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");

    setFormData({
      ...formData,
      signature: url,
    });
  };

  return (
    <div>
      <SignatureCanvas
        penColor="black"
        canvasProps={{
          width: 500,
          height: 200,
          className: "signature-box",
        }}
        ref={sigRef}
      />

      <button onClick={saveSignature}>
        Save Signature
      </button>
    </div>
  );
}

export default StepSignature;