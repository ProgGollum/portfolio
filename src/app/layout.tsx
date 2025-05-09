import type { Metadata } from "next";
import {theme} from "@/styles/theme";
import '@mantine/core/styles.css';
import "./globals.scss";
import Header from "@/components/Header/Header";
import {mantineHtmlProps, MantineProvider } from "@mantine/core";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme} {...mantineHtmlProps}>
            <Header/>
            {children}
            <Footer/>
        </MantineProvider>
      </body>
    </html>
  );
}
