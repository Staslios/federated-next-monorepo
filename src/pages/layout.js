import Navbar from "@/components/Navbar/Navbar";


const RootLayout = ({children}) => {
  return <>
    <Navbar/>
    <main>{children}</main>
  </>
}

export default RootLayout