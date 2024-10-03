'SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").Resize 144,27
With SAPGuiSession("Session")
	With SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access")
		.SAPGuiOKCode("OKCode").Set "/nVA01" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
	End With
	With SAPGuiSession("Session").SAPGuiWindow("Create Sales Documents")
		.SAPGuiEdit("*Order Type").Set "OR" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Sales Organization").Set "1710" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Distribution Channel").Set "10" @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Division").Set "00" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Sales office").Set "170" @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Sales group").Set "170" @@ hightlight id_;_6_;_script infofile_;_ZIP::ssf2.xml_;_
		.SAPGuiEdit("Sales group").SetFocus @@ hightlight id_;_6_;_script infofile_;_ZIP::ssf2.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
	End With

Dim PO_Number
PO_Number = f_timeStamp

	With SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:")
		.SAPGuiEdit("Cust. Reference").Set PO_Number @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiEdit("Sold-To Party").Set 17100001 @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiEdit("Ship-To Party").Set 17100001 @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiEdit("Cust. Ref. Date").SetFocus @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf3.xml_;_
		.SAPGuiEdit("Cust. Ref. Date").Set "09/29/2024" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Item","10" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Material","EWMS4-01" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Order Quantity","1" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Un","PC" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
		.SAPGuiTable("All Items").SelectCell 1,"Un" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf4.xml_;_
		.SAPGuiButton("Save").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
		.SAPGuiStatusBar("StatusBar").Sync
		.SAPGuiStatusBar("StatusBar").Check CheckPoint("StandardOrder") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf10.xml_;_
		.SAPGuiStatusBar("StatusBar").Output CheckPoint("OrderNumber") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf11.xml_;_
		.SAPGuiOKCode("OKCode").Set "/n" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf9.xml_;_
	End With
End With
