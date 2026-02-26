import { Outlet } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Layout = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex">
        <aside className="sticky top-0">
          <Sidebar />
        </aside>
        <main className="w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout