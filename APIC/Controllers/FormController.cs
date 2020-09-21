using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class FormController : ApiController
    {
        public Object GetForm(int idform)
        {  
            INCLUSIVE_BDEntities Model = new INCLUSIVE_BDEntities();
            List<Object> CompleteForm = new List<Object>();   
            
            var Form = (from F in Model.TblForm
                        where F.IdForm == idform
                        select new { F.IdForm, F.Description, F.Title }).Take(1);
            
            var pregs = from PF in Model.TblQuestion
                        where PF.IdForm == idform
                        join T in Model.CatTypeQuestion on PF.CatTypeQuestion equals T
                        select new { PF.IdForm, PF.IdQuestion, PF.IdType, PF.Description, pregType = T.Description };
            
            var pregsOptions = from PO in Model.TblQuestionOptions
                               join P in Model.TblQuestion on PO.TblQuestion equals P
                               join T in Model.CatTypeQuestion on P.CatTypeQuestion equals T
                               where P.IdForm == idform
                               select new { PO.IdQuestionOption, PO.Value, PO.OptionDesc, PO.IdQuestion, pregType = T.Description };
            
            CompleteForm.Add(Form.ToList());
            CompleteForm.Add(pregs.ToList());
            CompleteForm.Add(pregsOptions.ToList());
            return CompleteForm;
        }
    }
}
