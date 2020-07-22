using DutchTreat.Data.Models;
using DutchTreat.Data.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories.Implementations
{
    public class ProductRepository : IProductRepository
    {
        private readonly DutchTreatDbContext _dbContext;
        private readonly ILogger<ProductRepository> _logger;

        public ProductRepository(DutchTreatDbContext dbContext, ILogger<ProductRepository> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                _logger.LogInformation("GetAllProducts was called");

                return _dbContext.Products
                           .OrderBy(p => p.Title)
                           .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all products: {ex}");
                return null;
            }
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _dbContext.Products
                 .Where(p => p.Category == category)
                 .ToList();
        }

        public bool SaveAll()
        {
            return _dbContext.SaveChanges() > 0;
        }
    }
}
