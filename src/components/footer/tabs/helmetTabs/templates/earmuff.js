const Earmuff = ({setEarmuffHelmet, earmuffHelmet, traduction}) => {
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className={earmuffHelmet ? 'buttonChoice' : 'selectButton'} onClick={() => setEarmuffHelmet(false)}>{traduction.Without}</span>
				<span className={earmuffHelmet ? 'selectButton' : 'buttonChoice'} onClick={() => setEarmuffHelmet(true)}>{traduction.With}</span>
			</div>
		</div>
	)
}

export default Earmuff;