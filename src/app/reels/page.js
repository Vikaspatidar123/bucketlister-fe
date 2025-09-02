import { Suspense } from "react";
import ReelsFeed from "@/components/reels/components";

export default function Page() {
  return (
    <Suspense fallback={<div style={{color:'#fff',background:'#000',height:'100vh'}}>Loading...</div>}>
      <ReelsFeed />
    </Suspense>
  );
}


