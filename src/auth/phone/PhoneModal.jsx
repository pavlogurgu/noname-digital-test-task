import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../services/config";

export function PhoneModal() {
  const countryCode = "+38";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  const requestCode = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((result) => {
          window.confirmationResult = result;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyCode = (e) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          //   const user = result.user;
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let navigate = useNavigate();
  const backBtn = () => {
    navigate("/");
  };

  return (
    <>
      <form onSubmit={requestCode}>
        <h2>Sign In with phone number</h2>
        <div>
          <label htmlFor="phoneNumberInput">Phone number</label>
          <input
            type="tel"
            id="phoneNumberInput"
            placeholder="Type your number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {expandForm === true ? (
          <>
            <div>
              <label htmlFor="codeInput">Confirmation code</label>
              <input
                type="number"
                id="codeInput"
                placeholder="Type OTP"
                value={OTP}
                onChange={verifyCode}
              />
            </div>
          </>
        ) : null}
        {expandForm === false ? (
          <button type="submit">Request Code</button>
        ) : null}
        <div id="recaptcha-container"></div>
      </form>

      <button onClick={backBtn}>Back</button>
    </>
  );
}

export default PhoneModal;
