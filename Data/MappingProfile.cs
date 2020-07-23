using AutoMapper;
using DutchTreat.Data.Models;
using DutchTreat.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Order, OrderViewModel>().ForMember(orderView => orderView.OrderId, ex=>ex.MapFrom(order=>order.Id)).ReverseMap();
        }
    }
}
