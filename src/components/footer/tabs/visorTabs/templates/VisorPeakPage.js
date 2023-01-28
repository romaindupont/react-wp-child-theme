import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const VisorPeakPage = ({setStandardValue,	standardValue, traduction, mySku, setMySku}) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 2.5;
		if(e.target.getBoundingClientRect().width < 900) {
			let calcul = e.target.clientWidth/ratio - e.target.scrollLeft;
			if (calcul < `-${e.target.clientWidth/5}`) {
				e.target.style.transform = `translate3d(-${calcul}, 0px, 0px)`; 
			}
			else {
				e.target.style.transform = `translate3d(${calcul}px, 0px, 0px)`; 
			}
		}
	}
	return (
		<>
			<div className="colorListType">
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="plain" value="plain" onClick={()=>setStandardValue({...standardValue, Visor_peak_type:'plain'})}/>
				<label className={standardValue.Visor_peak_type === 'plain' ? 'selectButton' : 'buttonChoice'} htmlFor="plain">{traduction.Plain}</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="metallic" value="metallic" onClick={()=>setStandardValue({...standardValue, Visor_peak_type:'metallic'})}/>
				<label className={standardValue.Visor_peak_type === 'metallic' ? 'selectButton' : 'buttonChoice'} htmlFor="metallic">{traduction.Metallic}</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="glitter" value="glitter" onClick={()=>setStandardValue({...standardValue, Visor_peak_type:'glitter'})}/>
				<label className={standardValue.Visor_peak_type === 'glitter' ? 'selectButton' : 'buttonChoice'} htmlFor="glitter">{traduction.Glitter}</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="gilding" value="gilding" onClick={()=>setStandardValue({...standardValue, Visor_peak_type:'gilding', Visor_peak_color:'copper foil'})}/>
				<label className={standardValue.Visor_peak_type === 'gilding' ? 'selectButton' : 'buttonChoice'} htmlFor="gilding">{traduction.Gilding}</label>
			</div>
			<div className="colorList" onScroll={scrollEffect} ref={scrollRef}>
			{standardValue.Visor_peak_type === 'plain' ? 
				<>
					<div className={standardValue.Visor_peak_color === 'carbon' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'carbon'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor carbon"></div><span className="textAction">{traduction.Carbon}</span></div>
					<div className={standardValue.Visor_peak_color === 'white' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'white'}) & setMySku({...mySku, position3: 'vw'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
					<div className={standardValue.Visor_peak_color === 'black' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'black'}) & setMySku({...mySku, position3: 'vb'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
					<div className={standardValue.Visor_peak_color === 'estate blue' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'estate blue'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
					<div className={standardValue.Visor_peak_color === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'pirate grey'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
					<div className={standardValue.Visor_peak_color === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'dusk blue'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
					<div className={standardValue.Visor_peak_color === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'iris yellow'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
					<div className={standardValue.Visor_peak_color === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'iceberg green'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
					<div className={standardValue.Visor_peak_color === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'blazing yellow'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
					<div className={standardValue.Visor_peak_color === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'blazing orange'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
					<div className={standardValue.Visor_peak_color === 'green gables' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'green gables'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
					<div className={standardValue.Visor_peak_color === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'orchid pink'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
					<div className={standardValue.Visor_peak_color === 'camel' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'camel'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
					<div className={standardValue.Visor_peak_color === 'brown stone' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'brown stone'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
					<div className={standardValue.Visor_peak_color === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'cayenne red'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
					<div className={standardValue.Visor_peak_color === 'chinese red' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'chinese red'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
					<div className={standardValue.Visor_peak_color === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'fluo yellow'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
					<div className={standardValue.Visor_peak_color === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'fluo pink'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
				</>
				: standardValue.Visor_peak_type === 'metallic' || standardValue.Visor_peak_type === 'glitter' ? 
				<>
					<div className={standardValue.Visor_peak_color === 'white' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'white'}) & setMySku({...mySku, position3: 'vw'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
					<div className={standardValue.Visor_peak_color === 'black' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'black'}) & setMySku({...mySku, position3: 'vb'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
					<div className={standardValue.Visor_peak_color === 'estate blue' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'estate blue'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
					<div className={standardValue.Visor_peak_color === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'pirate grey'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
					<div className={standardValue.Visor_peak_color === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'dusk blue'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
					<div className={standardValue.Visor_peak_color === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'iris yellow'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
					<div className={standardValue.Visor_peak_color === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'iceberg green'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
					<div className={standardValue.Visor_peak_color === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'blazing yellow'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
					<div className={standardValue.Visor_peak_color === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'blazing orange'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
					<div className={standardValue.Visor_peak_color === 'green gables' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'green gables'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
					<div className={standardValue.Visor_peak_color === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'orchid pink'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
					<div className={standardValue.Visor_peak_color === 'camel' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'camel'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
					<div className={standardValue.Visor_peak_color === 'brown stone' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'brown stone'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
					<div className={standardValue.Visor_peak_color === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'cayenne red'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
					<div className={standardValue.Visor_peak_color === 'chinese red' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'chinese red'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
				</>: 
				<>
					<div className={standardValue.Visor_peak_color === 'copper foil' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'copper foil'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor copperFoil"></div><span className="textAction">{traduction.CopperFoil}</span></div>
					<div className={standardValue.Visor_peak_color === 'gold foil' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'gold foil'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor goldFoil"></div><span className="textAction">{traduction.GoldFoil}</span></div>
					<div className={standardValue.Visor_peak_color === 'silver foil' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'silver foil'}) & setMySku({...mySku, position3: 'vp'})}><div className="roundColor silverFoil"></div><span className="textAction">{traduction.SilverFoil}</span></div>
				</>
			}
			</div>
			</>
	)
}
export default VisorPeakPage;