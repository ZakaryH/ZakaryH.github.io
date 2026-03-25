import { useCallback, useRef, type MouseEvent } from "react";

export function useMouseTilt(maxTilt = 20) {
	const ref = useRef<HTMLDivElement>(null);

	const onMouseMove = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			const el = ref.current;
			if (!el) return;

			const rect = el.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;

			el.style.setProperty("--tilt-x", `${(y - 0.5) * -maxTilt}deg`);
			el.style.setProperty("--tilt-y", `${(x - 0.5) * maxTilt}deg`);
		},
		[maxTilt],
	);

	const onMouseLeave = useCallback(() => {
		const el = ref.current;
		if (!el) return;

		el.style.setProperty("--tilt-x", "0deg");
		el.style.setProperty("--tilt-y", "0deg");
	}, []);

	return { ref, onMouseMove, onMouseLeave };
}
