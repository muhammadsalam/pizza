import debounce from "lodash.debounce";
import {
	ChangeEvent,
	FC,
	FormEvent,
	useCallback,
	useRef,
	useState,
} from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/filterSlice";
import styles from "./index.module.scss";

const Search: FC = () => {
	const dispatch = useDispatch();

	const [value, setValue] = useState("");

	const inputRef = useRef<HTMLInputElement>(null);

	const onClickClear = () => {
		setValue("");
		dispatch(setSearch(""));
		inputRef.current?.focus();
	};

	const updateSearch = useCallback(
		debounce((str: string) => {
			dispatch(setSearch(str));
		}, 800),
		[]
	);

	const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setValue(target.value);
		updateSearch(target.value);
	};

	const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
		inputRef.current && dispatch(setSearch(inputRef.current.value));
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
};

export default Search;
