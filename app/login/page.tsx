import React from "react";

import LoginForm from "@/components/(login-ui)/LoginForm";
import RegisterInstead from "@/components/(login-ui)/RegisterInstead";

function Register() {
  return (
    <div className="grid place-items-center min-h-screen gap-3 content-center">
      <LoginForm />

      <RegisterInstead />
    </div>
  );
}

export default Register;
