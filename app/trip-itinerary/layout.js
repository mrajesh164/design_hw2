import { Fraunces, Source_Sans_3 } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div className={`${fraunces.variable} ${sourceSans.variable} font-cafe-body`}>
      {children}
    </div>
  );
}
