var dburl = 'localhost/mongoapp';
var collections = [entertainment];
var db =require (mongojs).connect(dburl, collections);