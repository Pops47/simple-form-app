function Form({
  username,
  email,
  password,
  confirmPassword,
  handleSubmit,
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Create account</h1>
      <div>
        <p>Name</p>
        <input
          type="text"
          placeholder="Name"
          name="username"
          value={username}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>Email</p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <p>Confirm your password</p>
        <input
          type="password"
          placeholder="Confirm your Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div className="submit">
        <input className="input" type="submit" value="Register" />
      </div>
    </form>
  );
}

export default Form;
