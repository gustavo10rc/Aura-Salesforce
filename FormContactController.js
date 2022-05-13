({
	handleSuccess : function(component, event, helper) {
		// a variavel toastEvent  recebe a busca realizada na biblioteca por $A.get .e -> evento
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "type": "success",
            "title": "Success!",
            "message": "Lead record has been created successfully."
        });
        toastEvent.fire();
    }
})
