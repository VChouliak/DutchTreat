using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories.Implementations
{
    public class CRUDRepository<T> : ICRUDRepository<T> where T : class
    {
        private DutchTreatDbContext _dbContext;
        private readonly ILogger<CRUDRepository<T>> _logger;

        protected CRUDRepository(DutchTreatDbContext dbContext, ILogger<CRUDRepository<T>> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public bool AddEntity(T entity)
        {
            bool added = false;
            try
            {
                _dbContext.Set<T>().Add(entity);
                added = true;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Entity was not added:\n{ex}");
                
            }
            return added;
        }

        public bool DeleteEntity(T entity)
        {
            bool deleted = false;
            try
            {
                _dbContext.Set<T>().Remove(entity);
                deleted = true;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Entity was not deleted:\n{ex}");

            }
            return deleted;
        }

        public IEnumerable<T> GetAll()
        {
            var result = _dbContext.Set<T>();
            try
            {
                if(result != null)
                {
                    return result;
                }              
            }
            catch (Exception ex)
            {
                Type type = typeof(T);
                _logger.LogError($"No entries for {type.Name} were found:\n{ex}");
            }
            return result;
        }

        public bool SaveAll()
        {
            return _dbContext.SaveChanges() > 0;
        }

        public bool UpdateEntity(T entity)
        {
            bool updated = false;
            try
            {
                var entityToUpdate = _dbContext.Set<T>().FirstOrDefault(e => e.Equals(entity));
                if (true)
                {
                    entityToUpdate = entity;
                    updated = true;
                }
               
            }
            catch (Exception ex)
            {
                _logger.LogError($"Entity was not updated:\n{ex}");

            }
            return updated;
        }

        public IEnumerable<T> FindBy(string name, object value)
        {
            var results = new List<T>();

            try
            {
                if (isPropertyExists(name))
                {
                    foreach (var entity in _dbContext.Set<T>())
                    {
                        var propertyValue = entity.GetType().GetProperty(name).GetValue(entity);
                        if (propertyValue.Equals(value))
                        {
                            results.Add(entity);
                        }
                    }
                }
            }
            catch (Exception ex)
            {

                _logger.LogError($"Property with {name} was not found:\n{ex}");
            }

            return results;
        }

        private static bool isPropertyExists(string name)
        {            
            var properties = typeof(T).GetProperties();
            return properties.Where(p => p.Name.ToLower().Equals(name.ToLower())).Count() > 0;
        }                
    }
}
