import { Suspense } from "react";
import ExplorePage from "@/components/explore/components";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ExplorePage />
        </Suspense>
    );
} 