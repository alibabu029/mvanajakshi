import Link from "next/link";
import { whatsappGreeting } from "@/lib/content";
export function Header(){return <header className="header"><div className="wrap nav"><Link href="/" className="brand">bujjinonvegpickles</Link><nav><Link href="/pickles">Pickles</Link><Link href="/about">About</Link><Link href="/shipping">Shipping</Link><Link href="/contact">Contact</Link></nav><a className="btn small" href={whatsappGreeting} target="_blank" rel="noreferrer">Order on WhatsApp</a></div></header>}
