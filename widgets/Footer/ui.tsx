import React from "react";
import styles from "./ui.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/shared/ui/Logo";

const socialLinks = [
  {
    image: "/images/facebook.svg",
    alt: "Facebook",
    href: "https://facebook.com",
  },
  { image: "/images/twitter.svg", alt: "Twitter", href: "https://twitter.com" },
  {
    image: "/images/instagram.svg",
    alt: "Instagram",
    href: "https://instagram.com",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Logo />
        <span className={styles.separator} />
        <p> All right reserved. Copyright @vistom</p>
      </div>
      <div className={styles.socialLink}>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <Image src={link.image} alt={link.alt} width={35} height={35} />
          </Link>
        ))}
      </div>
    </footer>
  );
};
