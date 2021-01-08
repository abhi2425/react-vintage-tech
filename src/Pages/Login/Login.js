import React from "react";
import "./Login.css";
import FormInput from "../../Components/FormInput/FormInput";
import { useFormContext } from "../../Contexts/FormContext";
const Login = () => {
  const {
    email,
    password,
    username,
    passError,
    nameError,
    emailRef,
    passRef,
    nameRef,
    toggleLogin,
    showSubmit,
    toggleFormHandler,
    onSubmitHandler,
    onEmailChange,
    onPasswordChange,
    onUsernameChange,
  } = useFormContext();

  return (
    <main className="page">
      <section className="pageSection">
        <header className="pageHeading">
          {toggleLogin ? "Log In" : "Sign In"}
        </header>
        <form className="form" onSubmit={(e) => onSubmitHandler(e)}>
          <FormInput
            label="email"
            type="email"
            value={email}
            reference={emailRef}
            onChangeHandler={onEmailChange}
          />

          <FormInput
            label="password"
            type="password"
            value={password}
            reference={passRef}
            onChangeHandler={onPasswordChange}
          />
          {passError.isError && (
            <p className="errorMessageForm">{passError.message}</p>
          )}
          {toggleLogin ? null : (
            <FormInput
              label="username"
              type="text"
              value={username}
              reference={nameRef}
              onChangeHandler={onUsernameChange}
            >
              {nameError.isError && (
                <p className="errorMessageForm">{nameError.message}</p>
              )}
            </FormInput>
          )}

          {showSubmit ? (
            <input
              type="submit"
              value={toggleLogin ? "Log In" : "Sign In"}
              className="submitButton"
            />
          ) : (
            <p className="requiredFields">Please Fill All Form Inputs</p>
          )}
          <div className="register">
            {toggleLogin ? "Need to Sign In" : "Already A Member?"}

            <span
              onClick={toggleFormHandler}
              className="span"
              style={{ cursor: "pointer" }}
            >
              Click Here
            </span>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
