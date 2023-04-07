import { LoginPassword } from "./password/LoginPassword";
import { SignInGoogle } from "./google/SignInGoogle";
import { SignInPhone } from "./phone/SignInPhone"
import { SignInFacebook } from "./facebook/SignInFacebook"



export function Auth() {
  return (
    <>
      <LoginPassword />
      <SignInGoogle />
      <SignInPhone />
      <SignInFacebook />
    </>
  );
}
