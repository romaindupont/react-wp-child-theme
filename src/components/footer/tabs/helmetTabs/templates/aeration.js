const Aeration = ({setAerationHelmet, aerationHelmet}) => {
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className={aerationHelmet ? 'buttonChoice' : 'selectButton'} onClick={() => setAerationHelmet(false)}>Without</span>
				<span className={aerationHelmet ? 'selectButton' : 'buttonChoice'} onClick={() => setAerationHelmet(true)}>With</span>
			</div>
		</div>
	)
}

export default Aeration;