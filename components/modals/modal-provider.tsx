"use client";

import { useState, useEffect } from "react";

import { SettingsModal } from "./setting-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <SettingsModal />;
};
