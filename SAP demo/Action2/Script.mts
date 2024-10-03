With SAPGuiSession("Session")
	With .SAPGuiWindow("SAP Easy Access")
		.SAPGuiOKCode("OKCode").Set "/nVA01" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
	End With
	With .SAPGuiWindow("Create Sales Documents")
		.SAPGuiEdit("*Order Type").Set "OR" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Distribution Channel").Set "10" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Division").Set "00" @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Sales office").Set "170" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Sales group").Set "170" @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Sales group").SetFocus @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf2.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
	End With
	With .SAPGuiWindow("Create Standard Order:")
		.SAPGuiEdit("Cust. Reference").Set "12345678" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiEdit("Sold-To Party").Set "17100001" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiEdit("Ship-To Party").Set "17100001" @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Item","10" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Material","EWMS4-01" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Order Quantity","2" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Un","PC" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiTable("All Items").SelectCell 1,"Un" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf3.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiButton("Save").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
		.SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
		.SAPGuiStatusBar("StatusBar").Check CheckPoint("StandardOrder") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
		.SAPGuiStatusBar("StatusBar").Output CheckPoint("StatusBar") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
		.SAPGuiButton("Exit").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_
	End With
End With
