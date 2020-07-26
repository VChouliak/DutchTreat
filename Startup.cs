using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Data;
using DutchTreat.Data.Repositories;
using DutchTreat.Data.Repositories.Implementations;
using DutchTreat.Data.Repository;
using DutchTreat.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;
using Newtonsoft.Json;
using AutoMapper;
using System.Reflection;
using DutchTreat.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace DutchTreat
{
    public class Startup
    {
        private IConfiguration _configuration;

        public Startup(IConfiguration config)
        {
            _configuration = config;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<StoreUser, IdentityRole>(config=>
            {
                config.User.RequireUniqueEmail = true;
            })
                .AddEntityFrameworkStores<DutchTreatDbContext>();

            services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(config=>
                {
                    config.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = _configuration["Tokens:Issuer"],
                        ValidAudience = _configuration["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:Key"]))
                    };                
                });

            services.AddDbContext<DutchTreatDbContext>(config=> {
                config.UseSqlServer(_configuration.GetConnectionString("DutchTreatConnectionString"));
            });
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddTransient<Seeder>();
            services.AddScoped(typeof(IBaseRepository<>),typeof(BaseRepository<>));
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();           
            services.AddTransient<IMailService, DummyMailService>();
            services.AddControllersWithViews();
            services.AddMvc().AddNewtonsoftJson(o =>
            {
                o.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            //.AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseNodeModules();
            app.UseAuthentication();           
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(config=>
            {
                config.MapControllerRoute("Fallback", "{controller}/{action}/{id?}", new { controller="App", action ="Index"});
            });
        }
    }
}
