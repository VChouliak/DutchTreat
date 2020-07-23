using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories
{
    public interface ICRUDRepository<T>
    {
        public bool AddEntity(T entity);
        public IEnumerable<T> GetAll();
        public bool DeleteEntity(T entity);
        public bool UpdateEntity(T entity);
        public bool SaveAll();
        public IEnumerable<T> FindBy(string name, object value);
    }
}
