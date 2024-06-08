'use client';


import { NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type props = {
    href : string,
    label : string,
}

export default function NavLink({href, label}:props) {
    const path = usePathname();
  return (
    <NavbarItem isActive={path==href} as={Link} href={href}>{label}</NavbarItem>
  )
}
