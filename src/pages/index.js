import { Suspense } from "react";
import Home from "@/components/home/components";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
