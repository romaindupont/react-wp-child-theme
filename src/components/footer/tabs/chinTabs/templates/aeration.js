const Aeration = ({setAerationChin, aerationChin, traduction}) => {
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className={aerationChin ? 'buttonChoiceEarmuff' : 'selectButtonEarmuff'} onClick={()=>setAerationChin(false)}>{traduction.Without}</span>
				<span className={aerationChin ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={()=>setAerationChin(true)}>{traduction.With}</span>
			</div>
		</div>
	)
}

export default Aeration;