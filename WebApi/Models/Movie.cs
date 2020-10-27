using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }       
        private DateTime ReleaseDate;
        public DateTime PropReleaseDate
        {
            get { return ReleaseDate; }
            set {
                if (value >= Convert.ToDateTime("01-01-2000"))
                { ReleaseDate = value; } 
            }
        }
        public string Genre { get; set; }
        public decimal Price { get; set; }
        public bool create(Movie obj)
        {//rules for save
            return true;
        }
        public bool update(Movie obj)
        {//rules for update
            return true;
        }
        public bool delete(Movie obj)
        {//rules for dalete
            return true;
        }
        public List<Movie> select(){ //rules for select
            List<Movie> Movies = new List<Movie>(){
                new Movie { ID = 1, Title = "Tomato Soup", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 1 },
                new Movie { ID = 2, Title = "Yo-yo", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 3.75M },
                new Movie { ID = 3, Title = "Hammer", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 16.99M }
            };
            return Movies;
        }
        public List<Movie> selectByView()
        { //rules for select
            List<Movie> Movies = new List<Movie>(){
                new Movie { ID = 1, Title = "Tomato Soup", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 1 },
                new Movie { ID = 2, Title = "Yo-yo", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 3.75M },
                new Movie { ID = 3, Title = "Hammer", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 16.99M }
            };
            return Movies;
        }
        public List<Movie> selectByDate()
        { //rules for select
            List<Movie> Movies = new List<Movie>(){
                new Movie { ID = 1, Title = "Tomato Soup", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 1 },
                new Movie { ID = 2, Title = "Yo-yo", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 3.75M },
                new Movie { ID = 3, Title = "Tomato Soup", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 1 },
                new Movie { ID = 4, Title = "Yo-yo", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 3.75M },
                new Movie { ID = 5, Title = "Tomato Soup", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 1 },
                new Movie { ID = 6, Title = "Yo-yo", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 3.75M },
                new Movie { ID = 7, Title = "Hammer", PropReleaseDate = Convert.ToDateTime("01-01-2000"), Price = 16.99M }
            };
            return Movies;
        }
    }
}