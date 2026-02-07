"use client";

import { useSearchParams } from "next/navigation";
import CheckInboxModal from "./check-inbox-modal";
import ForgetPasswordModal from "./forget-password-modal";
import TrialExpirationModal from "./trial-expiration-modal";
import SubscriptionCanceled from "./subscription-cancled";
import PaymentFailed from "./payment-failed";
import TransactionFailed from "./transaction-failed";

export default function ModalController() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  if (!modal) return null;

  switch (modal) {
    case "check-inbox":
      return <CheckInboxModal 
            isOpen={true}
            onClose={()=> {}}
       />;

    case "forget-password":
      return (<ForgetPasswordModal
        isOpen={true}
        onClose={()=> {}}
      />);

    case "trial-expiration":
      return (
        <TrialExpirationModal/>
      );

    case "subscription-calcled":
      return (
        <SubscriptionCanceled/>
      );

    case "payment-failed":
        return (
            <PaymentFailed />
        );
    case "transaction-failed":
        return (
            <TransactionFailed />
        );

    default:
      return null;
  }
}
