/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

interface AchievementContextValue {
  unlocked: ReadonlySet<string>;
  recentlyUnlocked: readonly string[];
  unlock: (id: string) => void;
  dismissToast: (id: string) => void;
}

const AchievementContext = createContext<AchievementContextValue | null>(null);

function loadUnlocked(): Set<string> {
  try {
    const raw = localStorage.getItem("achievements");
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {
    /* corrupted data, start fresh */
  }

  return new Set();
}

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<Set<string>>(loadUnlocked);
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<string[]>([]);

  const seenRef = useRef(new Set(unlocked));
  const timeoutsRef = useRef(new Map<string, number>());

  const unlock = useCallback((id: string) => {
    if (seenRef.current.has(id)) return;

    seenRef.current.add(id);

    setUnlocked((prev) => {
      const next = new Set(prev);
      next.add(id);
      localStorage.setItem("achievements", JSON.stringify([...next]));
      return next;
    });

    setRecentlyUnlocked((prev) => [...prev, id]);

    const timeout = window.setTimeout(() => {
      setRecentlyUnlocked((prev) => prev.filter((i) => i !== id));
      timeoutsRef.current.delete(id);
    }, 4500);

    timeoutsRef.current.set(id, timeout);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setRecentlyUnlocked((prev) => prev.filter((i) => i !== id));
    const timeout = timeoutsRef.current.get(id);
    if (timeout != null) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(id);
    }
  }, []);

  return (
    <AchievementContext.Provider
      value={{ unlocked, recentlyUnlocked, unlock, dismissToast }}
    >
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  const ctx = useContext(AchievementContext);
  if (!ctx)
    throw new Error(
      "useAchievements must be used within AchievementProvider",
    );

  return ctx;
}
