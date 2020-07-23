using DutchTreat.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories.Implementations
{
    public class OrderRepository : CRUDRepository<Order>, IOrderRepository
    {
        public OrderRepository(DutchTreatDbContext dbContext, ILogger<CRUDRepository<Order>> logger) : base(dbContext, logger)
        {
        }
     
    }
}
