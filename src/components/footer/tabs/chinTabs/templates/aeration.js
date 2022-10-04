const Aeration = ({setAerationChin, aerationChin, traduction}) => {
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className={aerationChin ? 'buttonChoice' : 'selectButton'} onClick={()=>setAerationChin(false)}>{traduction.Without}</span>
				<span className={aerationChin ? 'selectButton' : 'buttonChoice'} onClick={()=>setAerationChin(true)}>{traduction.With}</span>
			</div>
		</div>
	)
}

export default Aeration;