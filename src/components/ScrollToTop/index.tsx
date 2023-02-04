import { FC, ReactElement, useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop: FC<{ children?: ReactElement }> = (props) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{props.children}</>;
};
