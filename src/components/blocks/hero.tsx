"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/themer";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.645, 0.045, 0.355, 1],
            duration: 0.6,
            delay: 0.0,
          }}
          className="flex items-center gap-4"
        >
          <Image
            className="dark:invert"
            src="/leander.svg"
            alt="Leander logo"
            width={120}
            height={38}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.645, 0.045, 0.355, 1],
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li className="mb-2 tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
            <li className="tracking-[-.01em]">
              View the documentation on Github.
            </li>
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.645, 0.045, 0.355, 1],
            duration: 0.6,
            delay: 0.4,
          }}
          className="flex gap-4 items-center flex-col sm:flex-row"
        >
          <Button
            className="rounded-[99px] bg-gradient-to-b from-neutral-500 via-neutral-700 to-neutral-900 text-white text-shadow-lg border border-neutral-700 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] hover:brightness-110 duration-300"
            asChild
          >
            <Link
              href="https://github.com/Leander-Pornea/next-starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="Github logomark"
                width={20}
                height={20}
              />
              View on Github
            </Link>
          </Button>
        </motion.div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-between row-start-3 w-full">
        <p className="text-muted-foreground">Starter</p>
        <ThemeSwitcher />
      </footer>
    </div>
  );
}
