import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValidate, setIsFormValidate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne sont pas identiques");
    } else {
      setIsFormValidate(true);
    }
  };

  return (
    <div className="App">
      {isFormValidate === false ? (
        <Form
          username={username}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <StepTwo
          username={username}
          email={email}
          password={password}
          setIsFormValidate={setIsFormValidate}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
