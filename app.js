
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
        $scope.count = 1;
        $scope.val = (count) => {
                console.log("count val:" + count)
                $scope.count = count;
        };

        $scope.card_add = (get_id, get_Rs, get_name, get_img) => {

                $scope.total = $scope.count * get_Rs;
                console.log("totalcount:" + $scope.total);

                $scope.alltotal = $scope.total;

                angular.forEach($scope.addedglobalArray, function (item) {
                        // Iterate over object keys
                        angular.forEach(item, function (value, key) {
                                if (key == 'Rs') {
                                        console.log(key + "=" + value);
                                        $scope.alltotal = ($scope.alltotal * 1) + (value * 1);
                                }
                                // console.log(key + "=" + value);
                        });
                });
                console.log("alltotal find RS:" + $scope.alltotal);

                $scope.val = $scope.alltotal;
                $scope.global.push($scope.val);
                console.log("push done" + $scope.val);

                let last = $scope.global[$scope.global.length - 1];
                console.log("get last val:" + last);

                $scope.addedglobalArray.push({
                        id: $scope.get_id = get_id,
                        img: $scope.get_img = get_img,
                        name: $scope.get_name = get_name,
                        Rs: $scope.get_Rs = get_Rs,
                        total: $scope.total,
                });
        }
});
card.controller('controller2', ($scope) => {
        $scope.Call = () => {
                let last = $scope.global[$scope.global.length - 1];
                console.log(" c2 val=last:" + last);
                $scope.alltotal = last;
        }
});