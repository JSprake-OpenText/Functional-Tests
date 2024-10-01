Reporter.AddRunInformation "Run info title 2", "Run info statement 1"
Reporter.AddRunInformation "Run info title 2", "Run info statement 2"

testIteration = Environment.Value("TestIteration") 
actionIteration = Environment.Value("ActionIteration") 
'Reporter.ReportEvent micDone, "Title", "Message"
'Custom
Reporter.ReportEvent micDone, "Data used, iteration " & testIteration, "ColA: " & DataTable.Value ("ColA", dtGlobalSheet) & vbCrLf & "ColB: " & DataTable.Value("ColB", dtGlobalSheet)
'Pass
Reporter.ReportEvent micPass, "My pass message, iteration " & testIteration, "This step passed"
'Warning
Reporter.ReportEvent micWarning, "My warning message, iteration " & testIteration, "This step is a warning"
'Fail
Reporter.ReportEvent micFail, "My fail message, iteration " & testIteration, "This step failed"

'ExitAction
'ExitActionIteration
'ExitRun
'ExitGlobalIteration

