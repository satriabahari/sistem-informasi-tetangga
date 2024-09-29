import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Layouts from "@/common/components/layout";
import NextTopLoader from "nextjs-toploader";
import ThemeProviderContext from "@/stores/theme";
import { getServerSession } from "next-auth";
import NextAuthProvider from "@/SessionProvider";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistem Informasi Tetangga",
  description: "SINGA - Sistem Informasi Tetangga",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#f59e0b"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <NextAuthProvider session={session}>
          <ThemeProviderContext>
            <Layouts>{children}</Layouts>
          </ThemeProviderContext>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
