"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export const GA_TRACKING_ID = "G-WV79039PHS";

export default function Analytics() {
  const router = useRouter();

  useEffect(() => {
    if (!router) return;

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    if (router && router.events) {
      router.events.on("routeChangeComplete", handleRouteChange);

      // Return cleanup function
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router?.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
