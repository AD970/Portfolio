"use client";

import { useEffect, useState } from "react";

const getHash = () =>
  typeof window !== "undefined" ? window.location.hash : undefined;

const useHash = () => {
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const updateHash = () => setHash(getHash());

    // Update hash on mount and listen for hash changes
    updateHash();
    window.addEventListener("hashchange", updateHash);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return hash;
};

export default useHash;
