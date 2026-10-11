import { Bagel_Fat_One, Rubik } from "next/font/google";

const bagel = Bagel_Fat_One({
  variable: "--font-bagel",
  subsets: ["latin"],
  weight: "400",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div className={`${bagel.variable} ${rubik.variable} font-nuit-body`}>
      {children}
    </div>
  );
}
