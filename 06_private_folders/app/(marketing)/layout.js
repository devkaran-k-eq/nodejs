import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body>
              <header style={{ backgroundColor: "blue", fontSize: "13px" }}>Root Header</header>
              {children}
              <footer style={{ backgroundColor: "gray", fontSize: "13px" }}>Root Footer</footer>
          </body>
      </html>
  );
}
