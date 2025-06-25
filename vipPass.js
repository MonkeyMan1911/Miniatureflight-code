let coords = api.getPosition(myId)

if (!api.hasItem(myId, "Black Carpet")) {
	if (api.getInventoryItemAmount(myId, "Diamond") >= 5) {
	api.createItemDrop(coords[0], coords[1], coords[2], "Black Carpet", 1, false, 		{customDisplayName: "VIP Ticket"})
	api.sendMessage(myId, "Welcome to the VIP Club!", {color: "lightgreen"})
	}
	else {
		api.sendMessage(myId, "You need " + (5 - api.getInventoryItemAmount(myId, "Diamond")) + " more diamonds to enter.", {color: "red"})
	}
}
