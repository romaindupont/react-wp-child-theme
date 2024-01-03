
export function MakeAnObjectToOrder(
		standardValue,
		aerationHelmet,
		varnishHelmet,
		backNumberWindow,
		backNumberInput,
		rightNumberWindow,
		rightNumberInput,
		leftNumberWindow,
		leftNumberInput,
		backEngraving,
		engravingInput,
		screwPosition,
		withChin,
		aerationChin,
		varnishChin,
		withVisor,
		varnishVisor
	) {
	let configuration;
	return configuration = `{
		"Helmet": {
			"Helmet_aeration": "${aerationHelmet}",
			"Helmet_first_color": "${standardValue.Helmet_color_type} | ${standardValue.Helmet_color}",
			"Helmet_design": "${standardValue.Helmet_design}",
			"Helmet_design_type": "${standardValue.Helmet_design_type} | ${standardValue.Helmet_design_color}",
			"Varnish": "${varnishHelmet}",
			"Trim": "${standardValue.Helmet_trim}",
			"Interior": "${standardValue.Interior}",	
			"Logo": "${standardValue.Logo} | ${standardValue.Logo_color}",
			"Certification": "${standardValue.Rear_text_certification}",
			"Size": "${standardValue.Rear_text_size}",
			"flap": "${standardValue.flap}",
			"BackNumber": {
				"Apply": "${backNumberWindow}",
				"Configuration": {
					"Text": "${backNumberInput.numberText}",
					"Police": "${backNumberInput.numberStyle}",
					"Color": "${backNumberInput.numberColorType} | ${backNumberInput.numberColor}"
				}
			},
			"LeftNummber": {
				"Apply": "${rightNumberWindow}",
				"Configuration": {
					"Text": "${rightNumberInput.numberText}",
					"Police": "${rightNumberInput.numberStyle}",
					"Color": "${rightNumberInput.numberColorType} | ${rightNumberInput.numberColor}"
				}
			},
			"RightNummber": {
				"Apply": "${leftNumberWindow}",
				"Configuration": {
					"Text": "${leftNumberInput.numberText}",
					"Police": "${leftNumberInput.numberStyle}",
					"Color": "${leftNumberInput.numberColorType} | ${leftNumberInput.numberColor}"
				}
			},
			"Engraving": {
				"Apply": "${backEngraving}",
				"Configuration": {
					"Text": "${engravingInput.text}",
					"Police": "${engravingInput.textStyle}"
				}
			}
		},
		"Screws": {
			"ScrewsPosition": "${screwPosition}",
			"Screws_finition": "${standardValue.Metal_pieces}"
		},
		"Chinguard": {
			"With_Chin": "${withChin}",
			"Chinguard_aeration": "${aerationChin}",
			"Chinguard_first_color": "${standardValue.Chinguard_color_type} | ${standardValue.Chinguard_color}",
			"Chinguard_design": "${standardValue.Chinguard_design}",
			"Chinguard_design_type": "${standardValue.Chinguard_design_type} | ${standardValue.Chinguard_design_color}",
			"Varnish": "${varnishChin}",
			"Trim": "${standardValue.Chinguard_trim}"
		},
		"Visor": {
			"With_Visor": "${withVisor}",
			"Visor_type": "${standardValue.Visor_type}",
			"Visor_peak_color": "${standardValue.Visor_peak_type} | ${standardValue.Visor_peak_color}",
			"Frame": "${standardValue.Visor_frame}",
			"visor_Color": "${standardValue.Visor_color}",
			"varnish_peak_visor": "${varnishVisor}"
		}
	}`;	
}