
import "./globals.css";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
