import Credits from "./components/credits/Credits";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const pop = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cyberdyne Systems",
  description:
    "Cyberdyne Systems is a new-age tech oriented corporation of Orbis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>
        <Navbar />
        {children}
        <Footer />
        <Credits />
      </body>
    </html>
  );
}
