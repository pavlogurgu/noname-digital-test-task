import { LoginPassword } from "./password/LoginPassword";
import { SignInGoogle } from "./google/SignInGoogle";
import { SignInPhone } from "./phone/SignInPhone"


export function Auth() {
  return (
    <>
      <LoginPassword />
      <SignInGoogle />
      <SignInPhone />
    </>
  );
}
