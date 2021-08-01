import Image from "next/image"
import Link from "next/link"
import bigImage from "src/assets/big.jpg"

const About = () => {
  return (
    <>
      <Image src={bigImage} alt=""></Image>
      <Link href="/users">users</Link>
    </>
  )
}

export default About
