"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Old /collaborations links keep working: they continue to the Collaboration Partners section of /partners. */
export function RedirectToPartners() {
  const router = useRouter();
  useEffect(() => { router.replace("/partners/#collaboration-partners"); }, [router]);
  return null;
}
