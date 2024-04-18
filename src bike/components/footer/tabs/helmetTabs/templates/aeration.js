const Aeration = ({setAerationHelmet, aerationHelmet, traduction}) => {
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className={aerationHelmet ? 'buttonChoice' : 'selectButton'} onClick={() => setAerationHelmet(false)}>{traduction.Without}</span>
				<span className={aerationHelmet ? 'selectButton' : 'buttonChoice'} onClick={() => setAerationHelmet(true)}>{traduction.With}</span>
			</div>
		</div>
	)
}

export default Aeration;