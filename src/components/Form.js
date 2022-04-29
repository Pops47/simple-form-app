function Form({
  username,
  email,
  password,
  confirmPassword,
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
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
          onChange={(event) => {
            const value = event.target.value;
            setName(value);
          }}
        />
      </div>
      <div>
        <p>Email</p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
        />
      </div>
      <div>
        <p>Confirm your password</p>
        <input
          type="password"
          placeholder="Confirm your Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => {
            const value = event.target.value;
            setConfirmPassword(value);
          }}
        />
      </div>
      <div className="submit">
        <input className="input" type="submit" value="Register" />
      </div>
    </form>
  );
}

export default Form;
