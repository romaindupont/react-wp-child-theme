const { useState } = wp.element;

const Aeration = ({setAerationChin}) => {
	/* const [ areation, setAreation] = useState(false); */
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className="aerationWithout buttonChoice" onClick={()=>setAerationChin(false)}>Without</span>
				<span className="aerationWith buttonChoice" onClick={()=>setAerationChin(true)}>With</span>
			</div>
		</div>
	)
}

export default Aeration;