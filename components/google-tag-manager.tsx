"use client";

import { pageview } from "@/lib/gtm";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function GoogleTagManagerHead() {
  return (
    <>
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
    </>
  );
}

export function GoogleTagManagerNoScript() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id='${process.env.NEXT_PUBLIC_GTM_ID}'"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      {/* <!-- End Google Tag Manager (noscript) --> */}
    </>
  );
}
