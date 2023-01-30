import debounce from "lodash.debounce";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/filterSlice";
import styles from "./index.module.scss";

function Search() {
	const dispatch = useDispatch();

	const [value, setValue] = useState("");

	const inputRef = useRef();

	const onClickClear = () => {
		setValue("");
		dispatch(setSearch(""));
		inputRef.current.focus();
	};

	const updateSearch = useCallback(
		debounce((str) => {
			dispatch(setSearch(str));
		}, 800),
		[]
	);

	const onChangeInput = ({ target }) => {
		setValue(target.value);
		updateSearch(target.value);
	};

	const onSubmitForm = (event) => {
		dispatch(setSearch(inputRef.current.value));
		event.preventDefault();
		return false;
	};

	return (
		<form className={styles.form} onSubmit={onSubmitForm}>
			<label className={styles.form__label}>
				<input
					ref={inputRef}
					className={styles.form__input}
					type="text"
					value={value}
					placeholder="Поиск пиццы..."
					onSubmit={(e) => console.log(e)}
					onChange={onChangeInput}
				/>
				<button
					type="button"
					className={styles.form__button}
					onClick={onClickClear}
				>
					<img src="img/icons/cart-close.svg" alt="" />
				</button>
			</label>
		</form>
	);
}

export default Search;
