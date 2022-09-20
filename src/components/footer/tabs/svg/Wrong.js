const Wrong = ({windowClose}) => {
	return (
		<svg version="1.1" id="wrong" viewBox="0 0 40 40" onClick={()=>windowClose(false)}>
			<g>
				<path className="wrong_st0" d="M20,1c10.5,0,19,8.5,19,19s-8.5,19-19,19S1,30.5,1,20S9.5,1,20,1 M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20
					S31,0,20,0L20,0z"/>
			</g>
			<polygon className="wrong_st1" points="27.8,13.6 26.4,12.2 20,18.6 13.6,12.2 12.2,13.6 18.6,20 12.2,26.4 13.6,27.8 20,21.4 26.4,27.8 
				27.8,26.4 21.4,20 "/>
		</svg>		
	)
}

export default Wrong;