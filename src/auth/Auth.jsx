import { LoginPassword } from "./password/LoginPassword";
import { SignInGoogle } from "./google/SignInGoogle";

export function Auth() {
  return (
    <>
      <LoginPassword />
      <SignInGoogle />
    </>
  );
}
