import style from "./navbar.module.scss"
import Link from "next/link";


const Navbar = ({}) => {
  return <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/packageA">Package A</Link>
    </li>
    <li>
      <Link href="/packageB">Package B</Link>
    </li>
    <li>
      <Link href="/allPackages">All packages</Link>
    </li>
  </ul>
}

export default Navbar