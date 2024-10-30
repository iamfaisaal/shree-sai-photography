"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-4 py-16 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10" />
      <div className="max-w-7xl relative mx-auto grid gap-16 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Let&apos;s create something amazing together
          </h2>
          <p className="max-w-md text-gray-400">
            Join us in crafting exceptional photography experiences that tell
            your unique story.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-colors hover:bg-gray-100"
          >
            Get Started
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            {[
              { name: "Home", link: "/" },
              { name: "Gallery", link: "/gallery" },
              { name: "About", link: "/about" },
              { name: "Contact", link: "/contact" },
            ].map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="block text-gray-400 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              {[
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/shreesaiphotography_/",
                },
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/shreesaiphotography",
                },
                {
                  icon: Twitter,
                  link: "#",
                },
                {
                  icon: Linkedin,
                  link: "#",
                },
              ].map((Icon, i) => (
                <Link
                  key={i}
                  href={Icon.link}
                  className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                >
                  <Icon.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} Shree Sai Photography. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
