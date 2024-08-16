import style from "./navbar.module.scss"
import Link from "next/link";


const Navbar = ({}) => {
  return <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/provider-one">Provider one</Link>
    </li>
    <li>
      <Link href="/provider-two">Provider two</Link>
    </li>
    <li>
      <Link href="/all-providers">All providers</Link>
    </li>
  </ul>
}

export default Navbar