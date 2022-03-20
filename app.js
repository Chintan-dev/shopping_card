
var card = angular.module('data', []);
card.run(function ($rootScope) {
        $rootScope.globalArray = [
                {
                        id: '1',
                        img: 'card.webp',
                        name: 'Iphone 10',
                        Rs: '95000'
                }, {
                        id: "2",
                        img: "0.jpg",
                        name: "Iphone 9",
                        Rs: '85000'
                }, {
                        id: "3",
                        img: "1.jpg",
                        name: "Iphone 8",
                        Rs: '75000'
                }, {
                        id: "4",
                        img: "2.jpg",
                        name: "Iphone 7",
                        Rs: '75000'
                }
        ];
        $rootScope.addedglobalArray = [];
        $rootScope.global = [];
});

card.controller('controller1', ($scope) => {
        $scope.quantity = 1;
        // $scope.val_add = (quantity, get_id) => { $scope.quantity = quantity }
        // $scope.val_sub = (quantity, get_id) => { $scope.quantity = quantity }

        // $scope.val_add = (quantity, get_id) => {
        //         $scope.quantity++;
        //         console.log("quantity + val:" + $scope.quantity);
        //         console.log("get_id val:" + get_id);
        // };

        // $scope.val_sub = (quantity, get_id) => {
        //         $scope.quantity = quantity;
        //         if ($scope.quantity == 1) {
        //                 $scope.quantity = "1";
        //                 console.log("quantity - val:" + $scope.quantity);
        //                 console.log("get_id val:" + get_id);
        //         } else {
        //                 $scope.quantity--;
        //         }
        // };
        // $scope.quantity;

        $scope.card_add = (data_add) => {
                console.log('');
                console.log("quantity:" + $scope.quantity);
                $scope.quantity = $scope.quantity;

                // add Arraydata
                var Arraydata = angular.copy(data_add);
                console.log(Arraydata);

                // var element = {}, cart = [];
                // element.quantity = $scope.quantity;
                // cart.push({ element: element });
                // cart.push(element);

                // console.log("Arraydata" + cart);

                $scope.addedglobalArray.push(Arraydata);

                // for display total
                $scope.alltotal = '';
                angular.forEach($scope.addedglobalArray, function (item) {
                        angular.forEach(item, function (value, key) {
                                if (key == 'Rs') {
                                        console.log(key + "=" + value);
                                        $scope.alltotal = ($scope.alltotal * 1) + (value * 1);
                                }
                        });
                });
                console.log("alltotal find RS:" + $scope.alltotal);
        }

        $scope.del = function (data_del) {
                $scope.addedglobalArray.splice($scope.addedglobalArray.indexOf(data_del), 1);
                // for display total
                $scope.alltotal = '';
                angular.forEach($scope.addedglobalArray, function (item) {
                        angular.forEach(item, function (value, key) {
                                if (key == 'Rs') {
                                        console.log(key + "=" + value);
                                        $scope.alltotal = ($scope.alltotal * 1) + (value * 1);
                                }
                        });
                });
                console.log("alltotal find RS:" + $scope.alltotal);
        }
});
