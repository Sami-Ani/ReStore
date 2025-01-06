using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{

    public class StoreContext : DbContext
    {
        // below is the constructor class
        public StoreContext(DbContextOptions options) : base(options)
        {

        }

        // our db set effectively represents a table in out dataset
        // inside the <>  angle quotes you have to specify a the entity 
        // and below is a table for products
        // and inside of that table we are going to have coloumns equal
        // to the number of properties in the products class
        // so now we need to tell our program about our new db context
        // so you go to program.cs and add your new context to services container
        //  the ordering of the services don't matter
        // but when we come to the middleware section of our program.cs ordering
        //  is very important and we have to be very careful 
        


        public DbSet<Product> Products { get; set; }

    }
}