import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
// import { Open_Sans, Nunito, Poppins } from "next/font/google";

// const fonts = Open_Sans({ subsets: ["latin"] }),
//   Nunito({ subsets: ["latin"] }),
//   Poppins({
//     weight: ["300", "400", "500", "600", "700"],
//     style: ["normal", "italic"],
//     subsets: ["latin"],
//   }),
// ];

export const metadata = {
  title: "Premade",
  description: "Something premade",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "apple-touch-icon.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}
        <script src="/main.js"></script>
      </body>
    </html>
  );
}
