import { Suspense } from "react";
import Home from "@/components/home/components";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
