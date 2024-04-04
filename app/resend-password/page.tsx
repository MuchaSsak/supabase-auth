import React from "react";

import ResendPasswordForm from "@/components/(resend-password-ui)/ResendPasswordForm";
import LoginInstead from "@/components/(register-ui)/LoginInstead";

function ResetPassword() {
  return (
    <div className="grid place-items-center min-h-screen gap-3 content-center">
      <ResendPasswordForm />
      <LoginInstead />
    </div>
  );
}

export default ResetPassword;
