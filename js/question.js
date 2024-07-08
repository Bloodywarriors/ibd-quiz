

 // Array of Objects
 const quiz = [
  {
  	q:'1. Burtonisation or Water Treatment for brewing Ales involves the addition of:',
  	options:['calcium carbonate','calcium sulphate','sodium chloride','zinc sulphate'],
  	answer:1
  },
  {
  	q:'2. Which of the following beer "attributes" is provided by hop oils?',
  	options:['improved foam appearance','increase in beer bitterness','antimicrobial activity','floral or spicy aroma'],
  	answer:3
  },
  {
  	q:'3. Which of the following statements most accurately describes a pale ale?',
  	options:['Uses pale poorly modified and lightly kilned malt with relatively low bitterness and bottom fermenting yeast','Uses well modified malt and quite high bitterness with top cropping yeast','Uses a high proportion of malted wheat instead of malted barley low bitterness and top cropping yeast','Uses dark roasted malt or barley to produce richly flavoured dark beer with higher hop addition and top cropping yeast'],
  	answer:1
  },
  {
  	q:'4. What is the typical specification of % nitrogen for barley suitable for ale brewing?',
  	options:['1.4 to 1.6% nitrogen','1.7 to 1.9% nitrogen','2.4 to 2.6% nitrogen','2.4 to 2.6% nitrogen'],
  	answer:0
  },
  {
  	q:'5. A typical grist composition for a lauter tun would be:What is 22 + 6?',
  	options:['Husk <1%, Coarse Grits 9%, Fine Grits 55%, Flour >35%','Husk 20%, Coarse Grits 45%, Fine Grits 25%, Flour 10%','Husk 30%, Coarse Grits 24%, Fine Grits 40%, Flour 6%','Husk 25%, Coarse Grits 10%, Fine Grits 40%, Flour 25%'],
  	answer:2
  },
  {
    q:'6. Identify structure D from the diagram below',
    options:['Rootlets','Acrospire','Aleurone','Endosperm'],
    answer:3,
    img:'img/endosperm.jpg'
  },
  //{
    //q:'7. Count the triangles in picture below.',
    //options:['7','9','12','13'],
    //answer:3,
    //img:'img/triangle.jpg'
  //},
  {
    q:'8. Which of the following mills are paired with the best mash separation system?',
    options:['6 Roller Mill - Mash Filter','Hammer Mill - Mash Tun','Wet Mill - Mash Tun','6 Roller Mill - Lauter Tun'],
    answer:3,
  },
  //{
   // q:'9. Which of the TWO following enzymes are mainly responsible for breaking down starch during mash conversion?',
   // options:['Alpha amylase','Beta Glucanase','Beta Amylase','Limit Dextrinase','Amyloglucosidase'],
    //answer:0,   
  //},
  {
    q:'10. What is the bitterness of a 500 hl of beer bittered with 20 kg hops with 50% utilisation and 10% alpha acid: (calculate to the nearest whole number)',
    options:['15 BU','20 BU','25 BU','30 BU'],
    answer:1,
  },
  {
    q:'11. Which of the following type of finings can be added to boiled wort to aid clarification?',
    options:['Isinglass finings','Carrageenan','Auxiliary finings','Calcium sulphate'],
    answer:1,
  },
  {
    q:'12.Which of the following system is used to separate pelletised hops from wort after boiling',
    options:['Whirlpool','Hop back','Hop strainer','Hop seed filter'],
    answer:0,
  },  
  {
    q:'13. Which of the following brewing stages is likely to result in high DMS build up in wort?',
    options:['Mashing stand','Yeast storage','Wort boiling', 'Whirlpool'],
    answer:3,
  }, 
  {
    q:'14. What is the typical collection temperature for lager fermentation?',
    options:['2 to 4 C','6 to 8 C','10 to 12 C','14 to 16 C'],
    answer:2,
  },
  {
    q:'15. Which of the following methods is usually used to follow the progress of a fermentation?',
    options:['The number of yeast cells','The amount of heat generated','The level of diacetyl formed','The fall in wort gravity'],
    answer:3,
  },
  {
    q:'16.Mineral salt Calcium is important during fermentation in order to promote',
    options:['flocculation','haze stability','enzyme stability','The level of diacetyl formed'],
    answer:0,
  },
  {
    q:'17.The cone on a cylindro-conical fermentation vessel is designed to encourage',
    options:['The separation and collection of yeast','Reduce turbulence when filling','Allow drainage of CIP','Make sampling easier'],
    answer:0,
  },
  {
    q:'18. Why would it be dangerous to enter a recently emptied dirty fermentation vessel?',
    options:['there could be residual alcohol vapours','there is a danger that the tank could start CIP','the residual yeast at the bottom of the tank could cause slips','high concentration of carbon dioxide might be present'],
    answer:3,
  },
  {
    q:'19. Why is it necessary to stain yeast with methylene blue?',
    options:['To help to see the cells under the microscope','To measure the number of yeast cells','To measure the number of viable yeast cells','To help identified any wild yeast'],
    answer:2,
  },
  {
    q:'20. During fermentation what is the correct order of yeast growth?',
    options:['Lag - Growth - Stationary - Settlement','Lag - Growth - Stationary - Settlement','Settlement - Growth - Stationary - Lag','Settlement - Growth - Stationary - Lag'],
    answer:0,
  },
  {
    q:'21. When cropping yeast it is necessary to ensure that the crop is representative',
    options:['maximise the yeast crop','To maintain yeast hygiene','To accelerate collection','To maintain yeast age profile'],
    answer:3,
  },
  {
    q:'22. Yeast propagation is introduced to......:',
    options:['Increase the amount of yeast available','Reduce mutants and infection','Increase the proportion of old yeast cells','Reduce the rate of diacetyl production'],
    answer:1,
  },
  {
    q:'23. Home much additional yeast has to be added to compensate for a lower viability 80% when pitching 100 hl with a specification of adding 0.5 litres/hl of yeast with a target viability of 90%',
    options:['0 litres','6.25 litres','8.60 litres','11.25 litres'],
    answer:1,
  },
  {
    q:'24. Which of the following two materials may form a haze in beer, in the presence of oxygen?',
    options:['Lipids and proteins','Yeast and tannins','Lipids and yeast','Proteins and tannins'],
    answer:3,
  },
  {
    q:'25. Which of the following stabilising agents removes "Polyphenols"?',
    options:['Silica hydrogel','Tannic Acid','Polyvinyl Polypyrroldone (PVPP)','Proteolytic enzyme (Papain)'],
    answer:2,
  },
  {
    q:'26. Beer should not be allowed to warm up between cold maturation & filtration in order to',
    options:['prevent haze break from re-dissolving','avoid starch carry over','reduce the viscosity of beer before filtration','re-suspend oxalic acid crystals'],
    answer:0,
  },
  {
    q:'27. The type of water should be used for high gravity dilution is:',
    options:['de-aerated service water','standard product water','standard process water','de-aerated product water'],
    answer:3,
  },
  {
    q:'28. The maximum level for dissolved oxygen in bright beer that is accepted as good practice is',
    options:['0.01 mg/ml','0.05 mg/l','0.50 g/l','1.00 mg/l'],
    answer:1,
  },
  {
    q:'29. The "alcohol by volume" of 200 hl of high gravity beer required to produce 300 hectolitres of beer at an alcohol by volume of 4.0% is: n(assume no beer losses)',
    options:['8%','7%','6%','5%'],
    answer:2,
  },
  {
    q:'30. Which of the following description applies to a low carbohydrate or Light beer?',
    options:['Dark beer with roast and bitter notes','A beer where all the sugar are turn to alcohol','Clear light coloured delectate malty beer with low bitterness','Light cloudy beer with a clove fruit flavour'],
    answer:1,
  },
  {
    q:'31. Which of the following is a process specification?',
    options:['Final gravity (degrees sacc.)','Total in package oxygen (ppm)','Minimum maturation time (hours)','Beer Colour (EBC)'],
    answer:2,
  },
  {
    q:'32. A control chart is most effective for showing which type of the data?',
    options:['A control chart is most effective for showing which type of the data?','Showing trends of an analytical parameter','Cost of production in each department','Pore sizes in a sterile filter membrane'],
    answer:1,
  },
  {
    q:'33. Pore sizes in a sterile filter membrane',
    options:['Pore sizes in a sterile filter membrane','tasting three samples which are all different','tasting three samples; two the same and one different','representatives from three breweries tasting the same beer'],
    answer:2,
  },
  {
    q:'34. Beer is returned with an acetaldehyde (Sour apple) taste taint What is the probable cause of this flavour fault?',
    options:['Contamination of beer by caustic','Infected beer by bacteria or wild yeast','Contaminant of beer with chlorine based sterilant','Contaminant with ammonia refrigerant'],
    answer:1,
  },
  {
    q:'35. Dissolved oxygen is detrimental to final beer quality because it can cause',
    options:['the beer to develop an unpleasant sulphury aroma (light struck)','the beer to over-foam','cardboard and papery flavours as well as haze','the colour of the beer to darken'],
    answer:2,
  },
  {
    q:'36. An example of an oxygen scavenger is:',
    options:['Poly glycol alginate','Ascorbic acid','Nitrogen gas','Kettle finings'],
    answer:1,
  },
  {
    q:'37. Which of the following microscopic images most closely resembles the beer-spoilage organism "OBESIUM BACTERIA":',
    options:['A','B','C','D'],
    answer:0,
    img:'img/obesium bacteria.jpg'
  },
  {
    q:'38. One characteristic of pathogens organism (harmful bacteria) is that they:',
    options:['only grow in beers with high alcohol content:','cannot grow in water','cannot grow in beer','only grow in lagers'],
    answer:2,
  },
  {
    q:'39. When taking a sample for microbiological analysis, it is important to ensure that the sample is:',
    options:['taken at 0oC','acidified immediately upon receipt into the laboratory','taken aseptically','autoclaved immediately upon receipt into the laboratory'],
    answer:2,
  },
  {
    q:'40. Enterobacter is a source of quality problems in brewing because it...',
    options:['its a standard beer spoilage organism','produces off flavours in wort','reduces oxygen in wort','indicate water pollution'],
    answer:3,
  },
  {
    q:'41. Which of the following sample points can be sterilised (CIP) in place.',
    options:['Continuous membrane filter ','Sample tap on vessel','Membrane sample in tank','Sampling through tank door'],
    answer:2,
  },
  {
    q:'42. One of the benefits of a Quality System is that',
    options:['operations are carried out according to traditional methods','operations are carried out in the quickest method possible','operations are carried out according to defined procedures','operations can be carried out by untrained personnel'],
    answer:2,
  },
  {
    q:'43. Only one of the following statements is true. Which is it? Documented procedures are there to:',
    options:['be referred to during audits','explain to visitors how the brewery is operated','explain to suppliers why the brewery has set a particular','explain what has to be done, when and how it should be done'],
    answer:3,
  },
  //{
    //q:'44. Choose from the following list the TWO best combination of properties for formulated brewery detergent ?',
    //options:['toxic and dangerous to operator','active against target soil','corrosive against plant cleaned','stable in storage','difficult to rinse'],
    //answer:1,3
  //},
  {
    q:'45. Which of the following methods is used for rapid determination of the hygiene of a tank?',
    options:['Plating rinse water samples','Swabbing and plating sample','Visual inspection','Swabbing and bioluminescence'],
    answer:3,
  },
  {
    q:'46. In a formulated detergent what is the function of a detergent compound?',
    options:['Materials which can complex metal ions in solution, thereby preventing precipitation of the insoluble salts of the metal ions','A material which can be used to reduce surface tension (wetting), the surface','Active and dissolves organic soil','A material which assists the rinsing of the detergent from the surface of the vessel'],
    answer:2,
  },
  {
    q:'47. Which pump below would be the easiest to CIP (clean)?',
    options:['A','B','C','D'],
    answer:3,
    img:'img/centrifulgal.jpg'
  },
  {
    q:'48. Which of the following is best suited to cleaning a bright beer tank under CO2 top pressure?',
    options:['Phosphoric acid','Caustic soda','Sodium hypochlorite','Peracetic acid'],
    answer:0,
  },
  {
    q:'49. A safety risk associated with strong oxidising agent is that....:',
    options:['A fire hazard','Scavenge oxygen from atmosphere','Corrosive when dilute','Degrade seals and hoses'],
    answer:0,
  },
  {
    q:'50. Which of the following is NOT a feature of conditioning monitoring?',
    options:['Oil analysis','Failure mode analysis','Vibration analysis','Thermal imaging'],
    answer:1,
  },
  {
    q:'51. The main function of a Management Review system is:',
    options:['To identify way to reduce quality failures','To establish the number of quality failures in the brewery','To make sure that all the brewery quality standards are being met','To identify the people responsible for the failures'],
    answer:0,
  },
  {
    q:'52. Which effluent measurement is used to evaluate the amount of work required in a effluent treatment plant?',
    options:['Flow rate','Temperature','Volume','COD'],
    answer:3,
  },
  {
    q:'53. Which of the following treatments are required for water to be used as process water?',
    options:['Removal of sulphates','Removal of bi- carbonates','Removal of chlorides','Removal of calcium'],
    answer:1,
  },
  {
    q:'54. When is it the best time to tour the brewery looking for process gas leaks?',
    options:['During peak production','During CIP','During shut down','Anytime'],
    answer:2,
  },
  {
    q:'55. Which of the following property of carbon dioxide is incorrect?',
    options:['It is colourless','It asphyxiates','It is toxic at high levels','It is lighter than air'],
    answer:1,
  },
  {
    q:'56. If a brewery exceeds its pH effluent limit what steps can be taken to reduce total effluent pH?',
    options:['Reduce pre & post rinse volumes','Concentrate all cleaning into one time','Recycle and clean up detergent','Bubble Carbon Dioxide through the collection tank'],
    answer:3,
  },
  {
    q:'57. The most effective way of reducing water usage during CIP can be.......',
    options:['Use pulse rinses in place of full rinse','Reduce number of rinses between detergents','Use warm water as this is more effective for rinsing','Control flow with flow meters to optimise use'],
    answer:0,
  },
  {
    q:'58. Which of the following brewery process is likely to contribute most to no renewable carbon emissions?',
    options:['Re using brewery yeast','Sending spent filter aid to landfill','Generating steam for wort boiling','CO2 evolution from fermentation'],
    answer:2,
  },
  {
    q:'59. The standard ISO 14001 refers to which process?',
    options:['Manufacturing','Laboratory systems','Health and safety','Environmental'],
    answer:3,
  }
 ]




