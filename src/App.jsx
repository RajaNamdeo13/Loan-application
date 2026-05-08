import LoanForm from "./pages/LoanForm";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <LoanForm />
    </>
  );
}

export default App;