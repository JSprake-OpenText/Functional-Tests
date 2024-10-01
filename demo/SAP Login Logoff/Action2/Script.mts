'SAPGuiSession("Session").SAPGuiWindow("SAP").Resize 144,27
SAPGuiSession("Session").SAPGuiWindow("SAP").Maximize
With SAPGuiSession("Session").SAPGuiWindow("SAP")
	.SAPGuiEdit("*User").Set "s4h_sd_dem" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf10.xml_;_
	.SAPGuiEdit("*Password").SetSecure "66f9e9e5843c1d5725d572f2" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf10.xml_;_
	.SAPGuiEdit("*Password").SetFocus @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf10.xml_;_
	.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf10.xml_;_
End With
