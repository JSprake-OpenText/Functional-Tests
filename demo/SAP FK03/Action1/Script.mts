'import external data table from Suppliers.xlsx
call f_importData()
If DataTable("Status", dtGlobalSheet) <> "Created" Then @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
	ExitTestIteration
End If
'enter supplier details
'With SAPGuiSession("Session")
'	With .SAPGuiWindow("SAP Easy Access")
'		.Maximize
'		.SAPGuiOKCode("OKCode").Set "FK03" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
'		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
'	End With
'	With .SAPGuiWindow("Display Vendor:  Initial")
'		.SAPGuiEdit("Supplier").Set DataTable("Creditor", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
'		.SAPGuiEdit("Company Code").Set DataTable("Society", dtGlobalSheet) @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf2.xml_;_
'		.SAPGuiCheckBox("Accounting info").Set "ON" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
'		.SAPGuiCheckBox("Payment transactions").Set "ON" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf6.xml_;_
'		.SAPGuiCheckBox("Correspondence").Set "ON" @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf6.xml_;_
'		.SAPGuiCheckBox("Withholding tax").Set "ON" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf6.xml_;_
'		.SAPGuiEdit("Supplier").SetFocus @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf6.xml_;_
'		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf6.xml_;_
'		'check if supplier does not exists > update data table and export
'		If  .SAPGuiStatusBar("StatusBar").Exist Then
'			If (.SAPGuiStatusBar("StatusBar").Check (CheckPoint("StatusBar_notCreated"))) Then
'				.SAPGuiButton("Exit").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf31.xml_;_
'				DataTable.Value("Status", dtGlobalSheet) = ""
'				call f_exportData()
'				ExitTestIteration
'			End  If
'		End  If
'	End With
'	'verify supplier
'	With .SAPGuiWindow("Display Vendor: Accounting")
'		.SAPGuiEdit("Supplier").Check CheckPoint("Supplier") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
'		.SendKey ENTER
'	End With
'	With .SAPGuiWindow("Display Vendor: Payment")
'		.SAPGuiEdit("Pmnt Terms").Check CheckPoint("Pmnt Terms") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
'		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf10.xml_;_
'	End With
'	With .SAPGuiWindow("Display Vendor: Withholding")
'		.SAPGuiEdit("Vendor").Check CheckPoint("Vendor") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf11.xml_;_
'		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf12.xml_;_
'	End With
'	.SAPGuiWindow("Last data screen reached").SAPGuiButton("Yes").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf13.xml_;_
'	.SAPGuiWindow("Display Vendor:  Initial").SAPGuiButton("Exit").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf14.xml_;_
'End With
'update data table and export
DataTable.Value("Status", dtGlobalSheet) = "Verified"
call f_exportData()
'Wait(1)
