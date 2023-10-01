import "./globals.css";
import React, {ReactNode, useState, useEffect} from "react";


type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    // const [currentHash, setCurrentHash] = useState<string | null>(null);

    // useEffect(() => {
    //     const updateHash = () => {
    //     const hash = window.location.hash.substring(1);
    //     setCurrentHash(hash);
    //     };

    //     updateHash();

    //     window.addEventListener('hashchange', updateHash);

    //     return () => {
    //     window.removeEventListener('hashchange', updateHash);
    //     };
    // className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
    // }, []);
    return (
        <html lang="en">
            <body>
                {/* <h2>Teste Gabi</h2> */}
                {children}
            </body>
        </html>
    );
}
