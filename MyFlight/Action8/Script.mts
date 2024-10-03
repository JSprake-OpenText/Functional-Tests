WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet) @@ hightlight id_;_1979287112_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet)
'newDate = DateAdd("d", 20, now)
WpfWindow("OpenText MyFlight Sample").WpfCalendar("datePicker").SetDate now + 19 @@ hightlight id_;_1979289032_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1979290904_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2018908376_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1979291096_;_script infofile_;_ZIP::ssf15.xml_;_
