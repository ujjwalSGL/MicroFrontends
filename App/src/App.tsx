import React, { Suspense } from "react";
import { lazy } from "react";

const Header = lazy(() => import("header_app/Header"));
const Footer = lazy(() => import("footer_app/Footer"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <main className="p-4">
        <h2>Welcome to the Microfrontend Host App</h2>
        <p>This is the main content of the host app.</p>
      </main>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
