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

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, email, password);
  };
  const [isFormValidate, setIsFormValidate] = useState(false);

  return (
    <div className="App">
      {isFormValidate === false ? (
        <Form
          username={username}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setIsFormValidate={setIsFormValidate}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
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
