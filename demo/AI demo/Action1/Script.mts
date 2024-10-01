AIUtil.SetContext SAPGuiSession("micclass:=SAPGuiSession")
AIUtil("text_box", "User: *").Type "s4h_sd_dem"
AIUtil("text_box", "Password: *").SetText "Welcome1"

Dim mySendKeys
Set mySendKeys = CreateObject("WScript.shell")
mySendKeys.SendKeys("~")
