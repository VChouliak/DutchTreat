using DutchTreat.Data.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class Seeder
    {
        private readonly DutchTreatDbContext _dbContext;
        private readonly IWebHostEnvironment _hosting;

        public Seeder(DutchTreatDbContext dbContext, IWebHostEnvironment hosting)
        {
            _dbContext = dbContext;
            _hosting = hosting;
        }

        public void Seed()
        {
            _dbContext.Database.EnsureCreated();

            if (!_dbContext.Products.Any())
            {
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seed/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _dbContext.Products.AddRange(products);

                var order = _dbContext.Orders.Where(o => o.Id == 1).FirstOrDefault();
                if (order != null)
                {
                    order.Items = new List<OrderItem>()
                    {
                        new OrderItem()
                             {
                                Product = products.First(),
                                Quantity = 5,
                                UnitPrice = products.First().Price
                            }
                     };
                }

                _dbContext.SaveChanges();

            }
        }
    }
}
