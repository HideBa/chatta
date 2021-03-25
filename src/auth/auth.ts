import router from "@/router";
import { auth } from "./firebase";

export default () => {
  const logOut = async () => {
    try {
      await auth.signOut();
      router.push("/sign");
    } catch (err) {
      console.error(err);
    }
  };

  return { logOut };
};
