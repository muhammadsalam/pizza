import { useContext } from "react";
import { searchContext } from "../../App";
import styles from "./index.module.styl";

function Search() {
	const { searchValue, setSearchValue } = useContext(searchContext);

	return (
		<form
			className={styles.form}
			onSubmit={(event) => event.preventDefault()}
		>
			<label className={styles.form__label}>
				<input
					className={styles.form__input}
					type="text"
					value={searchValue}
					placeholder="Поиск пиццы..."
					onChange={(event) => setSearchValue(event.target.value)}
				/>
				<button
					className={styles.form__button}
					onClick={() => setSearchValue("")}
				>
					<img src="img/icons/cart-close.svg" alt="" />
				</button>
			</label>
		</form>
	);
}

export default Search;
