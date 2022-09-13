const Size = ({setStandardValue,	standardValue}) => {
	return (
		<>
			<div className="sizeChoice">
				<span className="SizebuttonChoice" onClick={()=>setStandardValue({...standardValue, Rear_text_size:'S'})}>XS-S</span>
				<span className="SizebuttonChoice" onClick={()=>setStandardValue({...standardValue, Rear_text_size:'M'})}>M-L</span>
				<span className="SizebuttonChoice" onClick={()=>setStandardValue({...standardValue, Rear_text_size:'XL'})}>XL-XXL</span>
			</div>
			<div className="certifChoice">
				<span className="buttonChoice" onClick={()=>setStandardValue({...standardValue, Rear_text_certification:'ECE'})}>ECE R22-05</span>
				<span className="buttonChoice" onClick={()=>setStandardValue({...standardValue, Rear_text_certification:'DOT'})}>DOT</span>
				<span className="buttonChoice" onClick={()=>setStandardValue({...standardValue, Rear_text_certification:'CCC'})}>CCC</span>
			</div>
		</>
	)
}

export default Size;