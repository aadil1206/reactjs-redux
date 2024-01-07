import React, { lazy, Suspense } from "react";
import { LazyLoader } from "../assets/loaders";
const LazyComponent = lazy(() => import("./Products"));

export default function Register() {
  return (
    <Suspense fallback={<LazyLoader />}>
        <LazyComponent />
    </Suspense>

    
  );
}