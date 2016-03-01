angular.module('mowgliNews')
.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts) {
        $scope.post = posts.posts[$stateParams.id];

        $scope.addComment = function() {
            if ($scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };

        $scope.incrementUpvotes = function(comment) {
            comment.upvotes += 1;
        };

        $scope.decrementUpvotes = function(comment) {
            if (comment.upvotes > 0) {
                comment.upvotes -= 1;
            }
        };
    }
]);
