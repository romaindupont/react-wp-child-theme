const { useState } = wp.element;

const Aeration = () => {
	const [ areation, setAreation] = useState(false);
	return (
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className="aerationWithout buttonChoice" onClick={()=>setAreation(false)}>Without</span>
				<span className="aerationWith buttonChoice" onClick={()=>setAreation(true)}>With</span>
			</div>
		</div>
	)
}

export default Aeration;