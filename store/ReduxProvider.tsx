"use client";

import { Provider } from "react-redux";
<<<<<<< HEAD
import { store } from "@/store/index";
=======
import { store } from "./index";
>>>>>>> origin/qr-dashboard

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
