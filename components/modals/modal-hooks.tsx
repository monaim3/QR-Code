"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
//import type { ModalType } from "@/lib/modal-types"; // optional if you typed your modals

export function useModalQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

//   const openModal = (modal: ModalType, params?: Record<string, string>) => {
//     const query = new URLSearchParams(searchParams.toString());

//     query.set("modal", modal);

//     if (params) {
//       Object.entries(params).forEach(([key, value]) => {
//         query.set(key, value);
//       });
//     }

//     router.push(`${pathname}?${query.toString()}`, { scroll: false });
//   };

  const closeModal = () => {
    const query = new URLSearchParams(searchParams.toString());
    query.delete("modal");

    router.push(
      query.toString() ? `${pathname}?${query.toString()}` : pathname,
      { scroll: false }
    );
  };

  return { closeModal };
}
