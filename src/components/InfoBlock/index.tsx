import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

type InfoBlockProps = {
	title: string;
	description?: string;
	children?: ReactNode;
	button?: boolean;
};

export const InfoBlock: FC<InfoBlockProps> = ({
	title,
	description,
	children,
	button = true,
}) => {
	const smiles = ["๐", "๐", "๐ข", "๐", "๐ง", "๐ฅบ", "๐คง", "๐ค"];

	const randomSmiles = Math.floor(Math.random() * smiles.length);

	return (
		<div className={styles.block}>
			{children}
			<div className={styles.info}>
				<h1 className={styles.title}>
					<span>{smiles[randomSmiles]}</span>
					{title}
				</h1>
				<p className={styles.description}>{description}</p>
				{button && (
					<Link to="/" className={styles.button}>
						ะะตัะฝััััั ะฝะฐะทะฐะด
					</Link>
				)}
			</div>
		</div>
	);
};
