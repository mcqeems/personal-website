import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selamat Hari Raya Idul Fitri! 🎉",
  description: "Mohon maaf lahir dan batin. Dimaafin nggak nih?",
  openGraph: {
    title: "Selamat Hari Raya Idul Fitri! 🎉",
    description: "Mohon maaf lahir dan batin. Dimaafin nggak nih?",
    images: [
      {
        url: "/kucing-berpeci.jpg",
        width: 800,
        height: 600,
        alt: "Eid Mubarak Greeting",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selamat Hari Raya Idul Fitri! 🎉",
    description: "Mohon maaf lahir dan batin. Dimaafin nggak nih?",
    images: ["/kucing-berpeci.jpg"],
  },
};

export default function EidMubarakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
