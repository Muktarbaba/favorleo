import { Suspense } from "react";
import Confirmation from "./ConfirmationClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Confirmation />
    </Suspense>
  );
}