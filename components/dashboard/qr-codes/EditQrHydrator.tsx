"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetQrCodeQuery } from "@/store/api/qrApi";
import { hydrateQrForEdit } from "@/lib/generator/hydrateQrForEdit";
import { setQrId, setQrUri, setHydratedEditId } from "@/store/slices/qrSlice";
import { slugFromContentType } from "@/lib/generator/qrTypeSlug";

/**
 * When the generator is opened in edit mode (`?id=<qrId>` in the URL), this
 * fetches the QR code once and hydrates the Redux slices so the forms show the
 * existing values. Re-hydrates only when the edited id changes, so navigating
 * between the content and customize steps does not clobber the user's edits.
 */
function EditQrHydratorInner() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useAppDispatch();
  const hydratedEditId = useAppSelector((s) => s.qr.hydratedEditId);
  const { data } = useGetQrCodeQuery(id, { skip: !id });

  useEffect(() => {
    if (!id) {
      // Left edit mode (e.g. started a fresh create) — allow re-hydration later.
      if (hydratedEditId) dispatch(setHydratedEditId(null));
      return;
    }
    if (data && hydratedEditId !== id) {
      hydrateQrForEdit(dispatch, data);
      dispatch(setQrId(id));
      dispatch(setQrUri(data.uri ?? ""));
      const slug = slugFromContentType(data.content?.type);
      if (slug) localStorage.setItem("qrType", slug);
      dispatch(setHydratedEditId(id));
    }
  }, [id, data, hydratedEditId, dispatch]);

  return null;
}

export default function EditQrHydrator() {
  return (
    <Suspense fallback={null}>
      <EditQrHydratorInner />
    </Suspense>
  );
}
