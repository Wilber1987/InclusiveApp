using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ModuleController : ApiController
    {        
        public IEnumerable<Movie> GetAllMovies()
        {
            Movie objMovie = new Movie();
            return objMovie.select();
        }
        public List<Object> GetMyMovies()
        {
            List<Object> HomeMovies = new List<Object>();
            Movie objMovie = new Movie();
            var TopMovies = (from M in objMovie.selectByView()
                             select M).Take(3);
            var LastMovies = (from M in objMovie.selectByView()
                             select M).Take(3);
            HomeMovies.Add(TopMovies.ToList());
            if (LastMovies.ToList().Count() != 0)
            {
                HomeMovies.Add(LastMovies.ToList());
            }
            else
            {
                HomeMovies.Add("No se han agregado nuevas peliculas");
            }  
            return HomeMovies;
        }
        public Object PostMyModules(object User)
        {
            var data = JsonConvert.DeserializeObject<TblUsers>(User.ToString());
            int IdUser = data.IdUsers;
            INCLUSIVE_BDEntities Model = new INCLUSIVE_BDEntities();
            var MyModules = from M in Model.TblModulos
                            join MM in Model.TblMyModules on M equals MM.TblModulos
                            where MM.IdUser == IdUser
                            select new { M.IdModules, M.Title, M.Description, M.image };
            return MyModules.ToList();
        }
       
        public Object PostModules(object User)
        {
            var data = JsonConvert.DeserializeObject<TblUsers>(User.ToString());
            int IdUser = data.IdUsers;          
            INCLUSIVE_BDEntities Model = new INCLUSIVE_BDEntities();
            var Modules = from M in Model.TblModulos
                          where !(from MM in Model.TblMyModules
                                  where MM.IdUser == IdUser
                                  select MM.IdModules).Contains(M.IdModules)
                          select new { M.IdModules, M.Title, M.Description, M.image };
            return Modules.ToList();            
        }
        public Object PostModuleDetail(object Module)
        {
            var data = JsonConvert.DeserializeObject<TblModulos>(Module.ToString());
           //int IdUser = data.IdModules;
            INCLUSIVE_BDEntities Model = new INCLUSIVE_BDEntities();
            var Modules = from S in Model.TblSections
                          join CS in Model.CatTypeSection on S.IdType equals CS.IdType
                          where S.IdModules == data.IdModules
                          select  new { S.IdSection, S.Title ,S.UrlContent , Type =  CS.Description};
            return Modules.ToList();
        }        
    }
}
