const matchToHelmet = (standardValue, setStandardValue) => {
  setStandardValue({
    ...standardValue,
    Chinguard_color: standardValue.Helmet_color,
    Chinguard_color_type: standardValue.Helmet_color_type,
    Chinguard_design_color:standardValue.Helmet_design_color,
    Chinguard_design_type:standardValue.Helmet_design_type,
    Chinguard_design: standardValue.Helmet_design,
    Chinguard_trim: standardValue.Helmet_trim,
    Chinguard_interior: standardValue.Interior,
  })
  
 
}

export default matchToHelmet;