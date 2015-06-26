

__mainApp.factory('shareService', function() {
	var ShareService = function()
	{
		this.filterExpression = '';
		this.selectedCat = null;
		this.cats = [];
	}
	return new ShareService();
});