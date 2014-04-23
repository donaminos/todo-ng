angular.module('todoNg')
	.controller('TodoController',function($scope){

		$scope.todos = [];

		$scope.addTodo = function(){
			var newTodo = $scope.todo;
			if(newTodo != '' && newTodo != undefined){
				$scope.todos.push({'title':newTodo,'done':false, 'editing':false});
				$scope.todo='';
			}
		};

		$scope.deleteTodo = function(todo){
			$scope.todos.splice($scope.todos.indexOf(todo),true);

		};
		
		$scope.$watch('allchecked', function(){
			$scope.todos.forEach(
				function(todo){
					todo.done = $scope.allchecked;
			});

		});

		$scope.editTodo = function(todo){
		
			todo.editing = true;
		};

		$scope.doneEditing = function(todo){
			todo.editing = false;
		}

})