using DutchTreat.Data.Models;
using DutchTreat.Data.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories.Implementations
{
    public class ProductRepository : CRUDRepository<Product>, IProductRepository
    {
        private readonly DutchTreatDbContext _dbContext;
        private readonly ILogger<CRUDRepository<Product>> _logger;

        public ProductRepository(DutchTreatDbContext dbContext, ILogger<CRUDRepository<Product>> logger) : base(dbContext,logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        } 

    }
}
