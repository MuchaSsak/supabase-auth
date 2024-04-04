import React from "react";

import UpdatePasswordForm from "@/components/(update-password-ui)/UpdatePasswordForm";
import LoginInstead from "@/components/(register-ui)/LoginInstead";

function UpdatePassword() {
  return (
    <div className="grid place-items-center min-h-screen gap-3 content-center">
      <UpdatePasswordForm />
      <LoginInstead />
    </div>
  );
}

export default UpdatePassword;
