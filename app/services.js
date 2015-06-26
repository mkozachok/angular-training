app.service('catService', ['$resource', function ($resource) {

    this.res = $resource('/cats/:cat', { cat: '@cat' }, {
        update: {
            method: 'PUT'
        }
    });

    this.selectedCat = "";

}]);

//app.factory('catFactory', function () {
//    //Not used so fat
//    //var factory = {};
//    //var cats = [
//    //    { id: 0, name: "Merin", clicks: 0, pic: "/Res/pic1.png" },
//    //    { id: 1, name: "Linda", clicks: 0, pic: "/Res/pic2.png" },
//    //    { id: 2, name: "Jenny", clicks: 0, pic: "/Res/pic3.png" },
//    //    { id: 3, name: "Bobby", clicks: 0, pic: "/Res/pic4.png" },
//    //    { id: 4, name: "Dendy", clicks: 0, pic: "/Res/pic5.png" }
//    //];
//    //factory.getCats = function () {
//    //    return cats;
//    //};
//    //return factory;
//});