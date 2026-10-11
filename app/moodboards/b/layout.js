import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Layout({ children }) {
  return (
    <div className={`${interTight.variable} ${plexMono.variable} font-metro-sans`}>
      {children}
    </div>
  );
}
