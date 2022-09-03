const { useState } = wp.element;

const Aeration = ({setAerationHelmet}) => {
	/* const [ areation, setAreation] = useState(false); */
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className="aerationWithout buttonChoice" onClick={()=>setAerationHelmet(false)}>Without</span>
				<span className="aerationWith buttonChoice" onClick={()=>setAerationHelmet(true)}>With</span>
			</div>
		</div>
	)
}

export default Aeration;