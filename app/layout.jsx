import "./globals.css";
import ThemeScripts from "@/components/ThemeScripts";

export const metadata = {
  title: "Repio - cleaning repair handyman Services Multipurpose Template",
  description:
    "Repio - Services Multipurpose Template, Office cleaning, Carpet cleaning, AC servicing, AC repair, General handyman, Electrical repair, Laptop repair, Desktop repair, Phone repair, Camera repair.",
  icons: { icon: "/assets/images/logo/favicon.png" },
};

export const viewport = { width: "device-width", initialScale: 1 };

// Original stylesheets, byte-for-byte, in the original load order.
const THEME_CSS = [
  "/assets/css/bootstrap.min.css",
  "/assets/css/swiper-bundle.css",
  "/assets/css/slick.css",
  "/assets/css/odometer-theme-default.css",
  "/assets/css/magnific-popup.css",
  "/assets/css/aos.css",
  "/assets/css/main.css",
  // ASAS brand theme, layered on top of the untouched theme CSS.
  "/assets/css/brand.css",
  "/assets/css/brand-overrides.css",
];

const FONTS =
  "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
        {THEME_CSS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className="overflow-x-hidden">
        {children}
        <ThemeScripts />
      </body>
    </html>
  );
}
