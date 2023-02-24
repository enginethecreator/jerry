import { SiteHeader } from "@/components/site-header"



export function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  )
}
