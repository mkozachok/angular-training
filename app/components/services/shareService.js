var ShareService = function()
{
	this.filterExpression = '';
	this.selectedCat = null;
}

;
__mainApp.factory('shareService', function() {
	return new ShareService();
});