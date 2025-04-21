"use client";

import { RouterProvider } from "react-aria-components";
import { useRouter, usePathname } from "next/navigation";

export function NextLinkProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <RouterProvider
      navigate={(href) => router.push(href)}
      route={{
        pathname,
      }}
    >
      {children}
    </RouterProvider>
  );
} 