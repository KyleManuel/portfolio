"use client";

import Image from "next/image";
import { useState } from "react";
import { VirtualCareModal } from "./VirtualCareModal";
import styles from "./VirtualCareButton.module.css";

export function VirtualCareButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <button
      type="button"
      className={styles.virtualCareButton}
      onClick={() => setIsOpen(true)}
    >
      <span>Virtual Care Portal</span>
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={18}
        height={18}
        className={styles.pythonIcon}
      />
    </button>

      <VirtualCareModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}