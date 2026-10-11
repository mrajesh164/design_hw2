import { Archivo_Black, IBM_Plex_Sans, Space_Mono } from "next/font/google";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Layout({ children }) {
  return (
    <div
      className={`${archivoBlack.variable} ${plexSans.variable} ${spaceMono.variable} font-encre-body`}
    >
      {children}
    </div>
  );
}
