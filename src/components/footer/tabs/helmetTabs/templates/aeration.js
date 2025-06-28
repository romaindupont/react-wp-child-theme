const Aeration = ({setAerationHelmet, aerationHelmet, traduction}) => {
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className={aerationHelmet ? 'buttonChoiceEarmuff' : 'selectButtonEarmuff'} onClick={() => setAerationHelmet(false)}>{traduction.Without}</span>
				<span className={aerationHelmet ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setAerationHelmet(true)}>{traduction.With}</span>
			</div>
		</div>
	)
}

export default Aeration;