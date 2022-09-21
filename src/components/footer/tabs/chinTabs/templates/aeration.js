const Aeration = ({setAerationChin, aerationChin}) => {
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className={aerationChin ? 'buttonChoice' : 'selectButton'} onClick={()=>setAerationChin(false)}>Without</span>
				<span className={aerationChin ? 'selectButton' : 'buttonChoice'} onClick={()=>setAerationChin(true)}>With</span>
			</div>
		</div>
	)
}

export default Aeration;