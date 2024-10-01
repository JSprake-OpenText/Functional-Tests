'import external data table from Suppliers.xlsx
call f_importData()

If DataTable("Status", dtGlobalSheet) <> "" Then
	ExitTestIteration
End If
'SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").Maximize
'start create supplier
'With SAPGuiSession("Session")
'	With .SAPGuiWindow("SAP Easy Access")
'		.SAPGuiOKCode("OKCode").Set "FK01" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
'		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
'	End With
'	With .SAPGuiWindow("Create Vendor:  Initial")
'		.SAPGuiEdit("Supplier").Set DataTable("Creditor", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
'		.SAPGuiEdit("Company Code").Set DataTable("Society", dtGlobalSheet) @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf2.xml_;_
'		.SAPGuiEdit("Vendor").Set DataTable("Model_Creditor", dtGlobalSheet) @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf2.xml_;_
'		.SAPGuiEdit("Company code_2").Set DataTable("Model_Company", dtGlobalSheet) @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf2.xml_;_
'		.SAPGuiEdit("Company code_2").SetFocus @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf2.xml_;_
'		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
'		'check if supplier already exists
'		If  .SAPGuiStatusBar("StatusBar").Exist Then
'			If (.SAPGuiStatusBar("StatusBar").Check (CheckPoint("StatusBar_alreadyExists"))) Then
'				.SAPGuiButton("Exit").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf20.xml_;_
'				DataTable.Value("Status", dtGlobalSheet) = "Created"
'				call f_exportData()
'				ExitTestIteration
'			End  If
'		End  If
'	End With
'	'continue create supplier
'	With	.SAPGuiWindow("Create Vendor: Accounting")
'		.SAPGuiEdit("Supplier").Check CheckPoint("Supplier") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf3.xml_;_
'		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf4.xml_;_
'	End With
'	With .SAPGuiWindow("Create Vendor: Payment")
'		.SAPGuiEdit("Pmnt Terms").Check CheckPoint("Pmnt Terms") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
'		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf6.xml_;_
'	End With
'	.SAPGuiWindow("Create Vendor: Withholding").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf7.xml_;_
'	.SAPGuiWindow("Last data screen reached").SAPGuiButton("Yes").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_
'	With .SAPGuiWindow("Create Vendor:  Initial")
'		.SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
'		.SAPGuiStatusBar("StatusBar").Check CheckPoint("StatusBar_created") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf10.xml_;_
'		.SAPGuiButton("Exit").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf21.xml_;_
'	End With
'End With
'update data table and export
DataTable.Value("Status", dtGlobalSheet) = "Created"
call f_exportData()
'Wait(1)
