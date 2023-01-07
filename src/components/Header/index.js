import styles from "./Header.module.styl";

function Header() {
	return (
		<>
			<header className={styles.header}>
				<a href="/" className={styles.logo}>
					<img
						className={styles.logo__img}
						src="/img/logo.png"
						alt="REACT PIZZA LOGO"
					/>
					<div className={styles.logo__text}>
						<h1>react pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</a>
				<button className={styles.button}>
					<span className={styles.button__span}>520 ₽</span>
					<hr className={styles.button__line} />
					<div>
						<img
							className={styles.button__img}
							src="/img/icons/cart.svg"
							role="icon"
							alt=""
						/>
						<span className={styles.button__span}>3</span>
					</div>
				</button>
			</header>
            <hr className={styles.line}/>
		</>
	);
}

export default Header;
