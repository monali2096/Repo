var myApp = angular.module("mymodule", []);
myApp.controller("mycontroller", function($scope) {
  $scope.a = "";
  //var users = [
  //{ user: "barney", age: 36, active: true },
  //{ user: "fred", age: 40, active: false },
  // { user: "pebbles", age: 1, active: true }
  //];

  //var a = _.find(users, { age: 36, active: true });
  //console.log(a);
  //$scope.a = a;
  //});
  //var a = _.drop([1, 2, 3]);
  //console.log(a);
  //$scope.a = a;

  //var a = _.chunk(["a", "b", "c", "d"], 2);
  //console.log(a);
  //$scope.a = a;
  //var a = _.chunk(["a", "b", "c", "d"], 3);
  //console.log(a);
  //$scope.a = a;

  //var a = _.compact([0, 1, false, 2, "", 3]);
  //console.log(a);
  //$scope.a = a;

  //var array = [1];
  //var other = _.concat(array, 2, [3], [[4]]);

  //console.log(other);
  //$scope.other = other;

  //var a = _.difference([2, 1], [2, 3]);
  // console.log(a);
  //$scope.a = a;

  //var objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];

  //var a = _.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual);

  //var a = _.dropRight([1, 2, 3]);

  //var users = [
  //{ user: "barney", active: true },
  //{ user: "fred", active: false },
  // { user: "pebbles", active: false }
  // ];
  //var a = _.dropRightWhile(users, { user: "pebbles", active: false });
  //console.log(a);
  //$scope.a = a;

  //var array = [1, 2, 3];

  //var array = _.fill(array, "a");
  //console.log(array.fill(a));
  //console.log(array);
  //$scope.array = array;

  // _.findIndex(array, [predicate=_.identity], [fromIndex=0])

  //var users = [
  //{ user: "barney", active: false },
  //{ user: "fred", active: false },
  //{ user: "pebbles", active: true }
  //];

  //var users = _.findIndex(users, function(o) {
  // return o.user == "barney";
  //});
  //console.log(users);
  //$scope.users = users;

  //_.pull(array, [values])//

  //var array = ["a", "b", "c", "a", "b", "c"];

  //var array = _.pull(array, "a", "c");
  //console.log(array);
  //$scope.array = array;

  //var array = ["a", "b", "c", "d"];
  //var pulled = _.pullAt(array, [1, 3]);

  //console.log(pulled);
  //$scope.pulled = pulled;

  //var array = [1, 2, 3];

  //var a = _.reverse(array);
  //console.log(a);
  //$scope.a = a;

  //var a = _.union([2], [1, 2]);
  //console.log(a);
  //$scope.a = a;

  //var a = _.union([2], [1, 2]);
  //console.log(a);
  //$scope.a = a;

  function square(n) {
    return n * n;
  }

  var num = _.map([4, 8], square);
  console.log(num);
  $scope.num = num;
});
