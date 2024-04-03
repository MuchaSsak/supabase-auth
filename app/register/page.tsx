"use client";

import React, { useState } from "react";

import RegisterForm from "@/components/(register-ui)/RegisterForm";
import ConfirmEmail from "@/components/(register-ui)/ConfirmEmail";
import LoginInstead from "@/components/(register-ui)/LoginInstead";

function Register() {
  const [shouldConfirmEmail, setShouldConfirmEmail] = useState(false);
  const [emailToConfirm, setEmailToConfirm] = useState("");

  return (
    <div className="grid place-items-center min-h-screen gap-3 content-center">
      {!shouldConfirmEmail && (
        <RegisterForm
          setShouldConfirmEmail={setShouldConfirmEmail}
          setEmailToConfirm={setEmailToConfirm}
        />
      )}
      {shouldConfirmEmail && <ConfirmEmail emailToConfirm={emailToConfirm} />}

      <LoginInstead />
    </div>
  );
}

export default Register;
