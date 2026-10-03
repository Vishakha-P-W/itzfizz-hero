import "./globals.css";

export const metadata = {
  title: "Welcome Itzfizz",
  description: "Scroll-driven hero section animation built with Next.js, GSAP and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
