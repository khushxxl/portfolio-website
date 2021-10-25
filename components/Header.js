/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
const Header = () => {
  return (
    <div className="border-b border-gray-400 flex justify-between w-full shadow-lg">
      <div className="m-5 ">
        <Link href="/">
          <h1 className="font-bold cursor-pointer hidden md:inline-grid">
            Khushaal Choithramani
          </h1>
        </Link>
        <Link href="/">
          <h1 className="font-bold cursor-pointer md:hidden">Khushaal</h1>
        </Link>
      </div>
      <div className="m-5 cursor-pointer font-semibold">
        <Link href="/about">
          <span className="linkSpan">About</span>
        </Link>
        <Link href="/project">
          <span className="linkSpan">Projects</span>
        </Link>
        <Link href="/contact">
          <span className="linkSpan">Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
