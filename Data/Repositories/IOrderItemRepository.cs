﻿using DutchTreat.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories
{
    public interface IOrderItemRepository : ICRUDRepository<OrderItem>
    {
        public IEnumerable<OrderItem> GetItemsByOrderId(int orderID);
    }
}