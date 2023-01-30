import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const InfoBlock = ({ title, description, children, button = true }) => {
	const smiles = ["😔", "🙁", "😢", "💀", "🧐", "🥺", "🤧", "🤕"];

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
						Вернуться назад
					</Link>
				)}
			</div>
		</div>
	);
};

export default InfoBlock;
