import { RefObject, useEffect } from "react";

const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	setIsVisible: (state: boolean) => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			// ? composedPath() показывает весь путь с window до самого объекта
			if (ref.current && !event.composedPath().includes(ref.current)) {
				setIsVisible(false);
			}
		};
		document.addEventListener("click", listener);
		return () => document.removeEventListener("click", listener);
		// ? return () => {} выполняет функцию при удалении компонента
	}, []);
};

export default useOnClickOutside;
