using DutchTreat.Data.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class Seeder
    {
        private readonly DutchTreatDbContext _dbContext;
        private readonly IWebHostEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;

        public Seeder(DutchTreatDbContext dbContext, IWebHostEnvironment hosting, UserManager<StoreUser> userManager)
        {
            _dbContext = dbContext;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _dbContext.Database.EnsureCreated();

            StoreUser user = await _userManager.FindByEmailAsync("johndoe@hotmail.com");

            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "john",
                    LastName = "doe",
                    Email = "johndoe@hotmail.com",
                    UserName = "john@doe"
                };

                var result = await _userManager.CreateAsync(user, "P@ssW0rd!");

                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed to create user in seeder");
                }
            }
            if (!_dbContext.Products.Any())
            {
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seed/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _dbContext.Products.AddRange(products);

                var order = _dbContext.Orders.Where(o => o.Id == 1).FirstOrDefault();
                if (order != null)
                {
                    order.User = user;
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
