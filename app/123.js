// request: function (config) {
//     if (!isTrackedRequest(config)) {
//         return config;
//     }
//     if (!isLoading()) {
//         $("body").addClass('loading');
//         timeoutPromise = $timeout(function () {
//             if (isLoading()) {
//                 $timeout(function () {
//                     $('input, select').blur();
//                 });
//                 $('#loader').addClass('loader-panel-show');
//             }
//         }, 1000);
//     }
//     counter++;
//     return config;
// },

// response: function (response) {
//     if (!isTrackedRequest(response.config)) {
//         return response;
//     }
//     counter--;
//     if (!isLoading()) {
//         $timeout(function () {
//             if (!isLoading()) {
//                 finishLoading();
//             }
//         }, 100);
//     }
//     return response;
// },

// $httpProvider.interceptors.push('LoaderInterceptor');