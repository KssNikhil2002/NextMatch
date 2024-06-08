import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { GiMatchTip } from 'react-icons/gi';
import Link from 'next/link';
import NavLink from './NavLink';

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to-purple-700"
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercase',
          'data-[active=true]:text-yellow-200',
        ],
      }}
    >
      <NavbarBrand as={Link} href="/" className="">
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-200">Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent
        justify="center"
        className="md:space-x-20 items-center pl-96"
      >
        <NavLink href='/members' label='Members'/>
        <NavLink href='/lists' label='Lists'/>
        <NavLink href='/messages' label='Messages'/>
      </NavbarContent>
      <NavbarContent className="items-center pl-64 space-x-16">
        <Button as={Link} href="/login" variant="bordered" className="text-white">Login</Button>
        <Button as={Link} href="/register" variant="bordered" className="text-white">Register</Button>
      </NavbarContent>
    </Navbar>
  );
}
