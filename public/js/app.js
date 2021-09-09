//原有的ng-app声明部分
var App = angular.module("App", []);

App.controller("FirstCtrl", function($scope){
    $scope.data = {
        name: "Harry",
        sex : "男",
        message: '中国人'
    };

    //在$scope上绑定一个函数
    $scope.onClick = function(index){
        alert("点击了第"+index+"行的按钮");
    };

    $scope.list = [
        {
            name: "Harry"
        },
        {
            name: "Tom"
        },
        {
            name: "Jerry"
        }
    ];

    $scope.colors = [
        {name: '黑色', color:'black' },
        {name: '白色', color:'white' },
        {name: '红色', color:'red' },
        {name: '蓝色', color:'blue' },
        {name: '黄色', color:'yellow'}
    ];
    //保存选中的状态，默认颜色设置为黑色
    $scope.colorChosen = $scope.colors[0];
});


App.filter("reverse", function(){
    return function(text){
        return text.split("").reverse().join("");
    }
});

App.directive("people", function(){
    return {
        restrict: "E",
        template : "<p>姓名:{{data.name}}</p><p>性别：{{data.sex}}</p>"
    }
});

