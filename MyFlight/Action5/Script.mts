Reporter.ReportEvent micDone, "Data used, iteration " & Environment.Value("TestIteration"), "fromCity: " & DataTable.Value ("fromCity", dtGlobalSheet) & vbCrLf & "toCity: " & DataTable.Value("toCity", dtGlobalSheet)

SystemUtil.CloseProcessByName "FlightsGUI.exe"
SystemUtil.Run "C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe"


