import { Raleway } from "next/font/google";
import "./globals.css";



const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});




export const metadata = {
  title: "re-vamp nsg",
  description: "North Star Group Site"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${raleway.variable}`}>
      <body className="font-raleway">{children}</body>
    </html>
  );
}
