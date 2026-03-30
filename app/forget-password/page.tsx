import { redirect } from "next/navigation";

export default function ForgetPassword() {
  redirect("/recover-password");
}
