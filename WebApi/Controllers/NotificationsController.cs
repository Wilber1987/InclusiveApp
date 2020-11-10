using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class NotificationsController : ApiController
    {
        public Object PostTakeNotifications(object User)
        {
            var JUser = JsonConvert.DeserializeObject<TblUsers>(User.ToString());
            INCLUSIVE_BDEntities Model = new INCLUSIVE_BDEntities();
            var Notifications = from M in Model.TblNotifications
                              where M.IdUser == JUser.IdUsers
                              select new { M.IdNotification, M.Description, M.Date, M.state };
            return Notifications.ToList();
        }
    }
}
