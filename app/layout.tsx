import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";


const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable:'--font-ibm-plex-sans'
});

export const metadata: Metadata = {
  title: "Imaginate",
  description: "Image genrator by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary:'#624cf5'}}} afterSignOutUrl='/'>
       <html lang="en">
         <body className={cn("font-IBMPlex antialiased",IBMPlex.variable)}>
  
          {/*comment for new section*/}
          {children}
         </body>
        </html>
    </ClerkProvider>
  );

}
