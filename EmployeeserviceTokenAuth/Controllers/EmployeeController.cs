using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeserviceTokenAuth.Controllers
{
    [Authorize]
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (sampleEntities entities =new sampleEntities())
            {
                return entities.Employees.ToList();
            }
        }
    }
}

