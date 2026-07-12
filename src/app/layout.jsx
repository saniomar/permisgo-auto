"use client";
import ReduxProvider from "../provider/provider";
import AppToast from "../components/common/AppToast";
import Head from "next/head";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <title>Home | One of the best Driving School</title>
        <meta name="description" content="Driving School" />
      </Head>
      <body suppressHydrationWarning={true}>
        <ReduxProvider>{children}</ReduxProvider>
        <AppToast />
      </body>
    </html>
  );
}
