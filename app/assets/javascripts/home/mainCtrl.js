angular.module('mowgliNews')
.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {
        $scope.posts = posts.posts;

        $scope.addPost = function() {
            if (!$scope.title || $scope.title === '') { return; }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0,
                comments: [
                    { author: 'Mowgli', body: 'give me cookie!', upvotes: 0 },
                    { author: 'Thumper', body: 'me too!!!', upvotes: 0 }
                ]
            });
            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };

        $scope.decrementUpvotes = function(post) {
            if (post.upvotes > 0) {
                post.upvotes -= 1;
            }
        };
    }
]);
