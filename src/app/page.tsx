import { Button } from "@nextui-org/react";
import Image from "next/image";import Link from "next/link";
`
import { FaRegSmile } from "react-icons/fa";`

export default function Home() {
  return (
    <div className="flex space-x-4">
      <h1 className="text-red-600">Hello</h1>
      <h1>Bye</h1>
      <Button as={Link} href="/members">Go to members page</Button>
    </div>
  );
}
