
var card = angular.module('data', []);
card.run(function ($rootScope) {
        $rootScope.globalArray = [
                {
                        id: '1',
                        img: './img/iphone 10.jpg',
                        name: 'Iphone 10',
                        Rs: '95000',
                        quantity: '1',
                        total_quantity_mul_Rs: ''
                }, {
                        id: "2",
                        img: "./img/iphone 9.jpg",
                        name: "Iphone 9",
                        Rs: '85000',
                        quantity: '1',
                        total_quantity_mul_Rs: ''
                }, {
                        id: "3",
                        img: "./img/iphone 8.avif",
                        name: "Iphone 8",
                        Rs: '75000',
                        quantity: '1',
                        total_quantity_mul_Rs: ''
                }, {
                        id: "4",
                        img: "./img/iphone 7.jpg",
                        name: "Iphone 7",
                        Rs: '75000',
                        quantity: '1',
                        total_quantity_mul_Rs: ''
                }
        ];
        $rootScope.addedglobalArray = [];
        $rootScope.global = [];
});

card.controller('controller1', ($scope) => {

        $scope.quantity = [1, 1, 1, 1];
        $scope.val_add = (quantity, get_id) => {

                $scope.quantity[get_id - 1]++;
                console.log("quantity:" + $scope.quantity[get_id - 1]);
                console.log("get_id:" + get_id);
        };


        $scope.val_sub = (quantity, get_id) => {
                $scope.quantity = quantity;
                if ($scope.quantity[get_id - 1] > 1) {
                        $scope.quantity[get_id - 1]--;
                        console.log("quantity:" + $scope.quantity[get_id - 1]);
                }

        };
        $scope.quantity;

        $scope.card_add = (data_add, get_id, get_img, get_name, get_Rs, get_quantity, total_quantity_mul_Rs) => {
                console.log("quantity on addcard:" + $scope.quantity[get_id - 1]);

                var obj = {
                        id: get_id,
                        img: get_img,
                        name: get_name,
                        Rs: get_Rs,
                        quantity: $scope.quantity[get_id - 1],
                        total_quantity_mul_Rs: get_Rs * $scope.quantity[get_id - 1]
                };

                $scope.addedglobalArray.push(obj);
                console.log($scope.addedglobalArray);

                // for display total
                $scope.alltotal = '';
                angular.forEach($scope.addedglobalArray, function (item) {
                        angular.forEach(item, function (value, key) {
                                if (key == 'total_quantity_mul_Rs') {
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
                                if (key == 'total_quantity_mul_Rs') {
                                        console.log(key + "=" + value);
                                        $scope.alltotal = ($scope.alltotal * 1) + (value * 1);
                                }
                        });
                });
                $scope.quantity[get_id - 1] = 1;
                console.log("alltotal find RS:" + $scope.alltotal);
        }
});

