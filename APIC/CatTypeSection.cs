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
    
    public partial class CatTypeSection
    {
        public CatTypeSection()
        {
            this.TblSections = new HashSet<TblSections>();
        }
    
        public int IdType { get; set; }
        public string Description { get; set; }
        public string State { get; set; }
    
        public virtual ICollection<TblSections> TblSections { get; set; }
    }
}