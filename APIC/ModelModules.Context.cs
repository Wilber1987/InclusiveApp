﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class INCLUSIVE_BDEntities : DbContext
    {
        public INCLUSIVE_BDEntities()
            : base("name=INCLUSIVE_BDEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<CatTypeQuestion> CatTypeQuestion { get; set; }
        public DbSet<CatTypeSection> CatTypeSection { get; set; }
        public DbSet<RolPermission> RolPermission { get; set; }
        public DbSet<TblForm> TblForm { get; set; }
        public DbSet<TblModulos> TblModulos { get; set; }
        public DbSet<TblMyModules> TblMyModules { get; set; }
        public DbSet<TblPermission> TblPermission { get; set; }
        public DbSet<TblQuestion> TblQuestion { get; set; }
        public DbSet<TblQuestionOptions> TblQuestionOptions { get; set; }
        public DbSet<TblRol> TblRol { get; set; }
        public DbSet<TblSections> TblSections { get; set; }
        public DbSet<TblUsers> TblUsers { get; set; }
        public DbSet<TblUsersRol> TblUsersRol { get; set; }
        public DbSet<UsersResponse> UsersResponse { get; set; }
    }
}