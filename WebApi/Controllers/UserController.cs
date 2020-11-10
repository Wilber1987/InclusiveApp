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
    public class UserController : ApiController
    {
        public Object PostLogin(object User)
        {
            var JUser = JsonConvert.DeserializeObject<TblUsers>(User.ToString());
            INCLUSIVE_BDEntities Model = new INCLUSIVE_BDEntities();
            var Autenticate = from M in Model.TblUsers
                              where M.Username == JUser.Username 
                                  && M.Password == JUser.Password 
                                  && M.State == "act"
                              select M;
            if (Autenticate.ToList().Count != 0)
            {
                return true;
            }else
            {
                return false;
            }            
        }
        
        public Object PostTakeSeason(object User)
        {
            var JUser = JsonConvert.DeserializeObject<TblUsers>(User.ToString());
            INCLUSIVE_BDEntities Model = new INCLUSIVE_BDEntities();
            var Autenticate = from M in Model.TblUsers
                              where M.Username == JUser.Username
                                  && M.Password == JUser.Password
                                  && M.State == "act"
                              select new { M.IdUsers, M.Username, M.Mail, M.Photo, M.LastName, M.Name};
            return Autenticate.ToList()[0];
        }
        public Object PostRegister(object User)
        {
            var JUser = JsonConvert.DeserializeObject<TblUsers>(User.ToString());
            INCLUSIVE_BDEntities Model = new INCLUSIVE_BDEntities();
            try
            {
                JUser.State = "act";
                Model.TblUsers.Add(JUser);
                Model.SaveChanges();
                return true;
            }
            catch (Exception)
            {              
                return false;
            }
        }

    }
}