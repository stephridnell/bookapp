(function() {
  'use strict';

  angular.module('readingList', [])

  .controller('ReadingListController', function(){
    this.books = books;
    this.genres = genres;
  })

  .directive('bookGenres', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book-genres.html',
      scope: {
        genres: '='
      }
    }
  })

  .directive('bookCover', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book-cover.html',
      replace: true
    }
  })

  .directive('reviewForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/review-form.html',
      replace: true,
      controller: function(){
        this.showForm = false;
        this.book = {genres:{}};
        this.addReview = function(form){
          books.push(this.book);
          this.book = {genres:{}};
          form.$setPristine();
        };
      },
      controllerAs: 'reviewFormCtrl',
      scope: {
        books: '=',
        genres: '='
      }
    }
});


//data
  var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
      rating: 4,
      genres: { fiction: true, fantasy: true }
    },{
      title: 'The Dragon Reborn',
      author: 'Robert Jordan',
      isbn: '0812513711',
      review: 'The Wheel weaves as the Wheel wills, and we are only the thread of the Pattern. Moiraine',
      rating: 5,
      genres: { fiction: true, fantasy: true }
    }
  ];

}());
