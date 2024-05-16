import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import StoreProvider from "./StoreProvider";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Поиск организации по ИНН",
  description: "Тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        ></meta>
        <Script
          type='text/javascript'
          async
          defer
          src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.YANDEX_KEY}&lang=ru_RU`}
        />
      </head>
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
