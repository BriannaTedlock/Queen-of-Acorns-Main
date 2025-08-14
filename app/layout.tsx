// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";
import { FirebaseAuthProvider } from "@/contexts/FirebaseAuthContext";
import { Alice } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    signInAnonymously(auth)
      .then(() => console.log("✅ Signed in anonymously"))
      .catch((error) => console.error("❌ Sign-in error:", error));
  } else {
    console.log("✅ Already signed in:", user?.uid);
  }
});

const alice = Alice({
  weight: "400",       // Alice ships only 400
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Queen Of Acorns",
  description: "Mobile bar & events",
  icons: "/acorn.svg"

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Alice everywhere */}
      <body className={`${alice.className} antialiased`}>
        <Analytics />
        {/* Firebase Auth Context Provider */}
        <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
