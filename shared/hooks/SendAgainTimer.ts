"use client";

import { useState, useEffect, useCallback } from "react";

export function useSendAgainTimer(initialSeconds = 59) {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = useCallback(() => {
    if (!isActive) {
      setCount(initialSeconds);
      setIsActive(true);
    }
  }, [initialSeconds, isActive]);

  useEffect(() => {
    if (!isActive) return;

    if (count === 0) {
      setIsActive(false);
      return;
    }

    const timerId = setTimeout(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [count, isActive]);

  return {
    count,
    isActive,
    startTimer,
  };
}
