using DutchTreat.Data.Models;
using DutchTreat.Data.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories.Implementations
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        private readonly DutchTreatDbContext _dbContext;
        private readonly ILogger<BaseRepository<Product>> _logger;

        public ProductRepository(DutchTreatDbContext dbContext, ILogger<BaseRepository<Product>> logger) : base(dbContext,logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        } 

    }
}
