//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApi
{
    using System;
    using System.Collections.Generic;
    
    public partial class TblForm
    {
        public TblForm()
        {
            this.TblQuestion = new HashSet<TblQuestion>();
        }
    
        public int IdForm { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string State { get; set; }
    
        public virtual ICollection<TblQuestion> TblQuestion { get; set; }
    }
}
