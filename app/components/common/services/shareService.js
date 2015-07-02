

__mainApp.factory('shareService', function() {
	var ShareService = function()
	{
		this.filterExpression = '';
		this.selectedCat = null;
		this.cats = [];
		this.loggedUser = false;
		this.isUserLogged = false;
		this.loggedUserId = false;
	}
	return new ShareService();
});

__mainApp.value('PID', Math.floor(Math.random() * (4096 - 0)) + 0 );