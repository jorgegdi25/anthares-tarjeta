import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://antharesgemas.com";
const title = "ANTHARES | Gemas & Cristales desde 1990";
const description =
  "Tarjeta digital de ANTHARES: joyeria etnica, cristales antiguos, piedras africanas y piezas unicas desde Pereira, Colombia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "ANTHARES",
  keywords: [
    "Anthares",
    "gemas",
    "cristales",
    "joyeria etnica",
    "piedras africanas",
    "textiles africanos",
    "Pereira Colombia"
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "ANTHARES",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/images/logo-anthares.png",
        width: 250,
        height: 145,
        alt: "Logo de ANTHARES"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/logo-anthares.png"]
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
