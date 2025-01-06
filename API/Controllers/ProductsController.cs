using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductsController : ControllerBase
    {
    private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
      _context = context;
            
        }

        [HttpGet]
        //  we are going to return a list of products
        //  but what we typically do inside of an api controller 
        //  is to specify the type of result we are returing
        public async Task<ActionResult<List<Product>>> GetProducts() {
          // here action result is just a return type 
          

         
          // async version 
          {
          return await _context.Products.ToListAsync();

          }         
         // in this case it is just status type (200: 0k , 400 : bad result)
          // here we created a variable products to hold all the things in products table
          // to do this we use the built in ToList method
          // sync verion
          // var products =  context.Products.ToList();
            // return  Ok(products);



          

        }

        [HttpGet("{id}")] // api/products/3

        public async Task<ActionResult<Product>> GetProduct(int id ) {
          return await _context.Products.FindAsync(id);

        }

    }
}