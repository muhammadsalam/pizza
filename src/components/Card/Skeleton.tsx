import { FC } from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: FC<{ className: string; key: number }> = (props) => (
	<ContentLoader
		speed={2}
		width={282.5}
		height={489.5}
		viewBox="0 0 282.5 489.5"
		backgroundColor="#d9d9d9"
		foregroundColor="#e6e6e6"
		{...props}
	>
		<circle cx="142" cy="136" r="135" />
		<rect x="58" y="298" rx="4" ry="4" width="180" height="22" />
		<rect x="4" y="342" rx="12" ry="12" width="277" height="94" />
		<rect x="5" y="460" rx="6" ry="6" width="45" height="20" />
		<rect x="141" y="452" rx="20" ry="20" width="140" height="38" />
	</ContentLoader>
);
