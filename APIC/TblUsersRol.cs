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
    
    public partial class TblUsersRol
    {
        public int IdUser { get; set; }
        public int IdRol { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string State { get; set; }
    
        public virtual TblRol TblRol { get; set; }
        public virtual TblUsers TblUsers { get; set; }
    }
}
