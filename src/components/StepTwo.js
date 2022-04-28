function StepTwo({ username, email, password, setIsFormValidate }) {
  return (
    <div className="form">
      <h1>Results</h1>
      <div className="grey-square">
        <p>Name : {username}</p>
        <p>Email : {email}</p>
        <p>Pasword : {password}</p>
      </div>
      <button
        onClick={() => {
          setIsFormValidate(false);
        }}
      >
        Edit your information
      </button>
    </div>
  );
}

export default StepTwo;
