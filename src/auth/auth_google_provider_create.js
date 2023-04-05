import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });