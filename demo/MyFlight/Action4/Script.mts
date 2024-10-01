WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Set "John Smith"
WpfWindow("OpenText MyFlight Sample").WpfButton("ORDER").Click
WpfWindow("OpenText MyFlight Sample").WpfProgressBar("progBar").WaitProperty "value", 100
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Check CheckPoint("Check Name")
WpfWindow("OpenText MyFlight Sample").WpfObject("Order completed").Check CheckPoint("Order Completed - RegEx")
WpfWindow("OpenText MyFlight Sample").WpfButton("NEW SEARCH").Click
