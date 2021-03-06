USE [master]
GO
/****** Object:  Database [INCLUSIVE_BD]    Script Date: 11/10/2020 17:08:25 ******/
CREATE DATABASE [INCLUSIVE_BD]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'INCLUSIVE_BD', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\INCLUSIVE_BD.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'INCLUSIVE_BD_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\INCLUSIVE_BD_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [INCLUSIVE_BD] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [INCLUSIVE_BD].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [INCLUSIVE_BD] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET ARITHABORT OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [INCLUSIVE_BD] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [INCLUSIVE_BD] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET  DISABLE_BROKER 
GO
ALTER DATABASE [INCLUSIVE_BD] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [INCLUSIVE_BD] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET RECOVERY FULL 
GO
ALTER DATABASE [INCLUSIVE_BD] SET  MULTI_USER 
GO
ALTER DATABASE [INCLUSIVE_BD] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [INCLUSIVE_BD] SET DB_CHAINING OFF 
GO
ALTER DATABASE [INCLUSIVE_BD] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [INCLUSIVE_BD] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [INCLUSIVE_BD] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'INCLUSIVE_BD', N'ON'
GO
ALTER DATABASE [INCLUSIVE_BD] SET QUERY_STORE = OFF
GO
USE [INCLUSIVE_BD]
GO
/****** Object:  Table [dbo].[CatTypeQuestion]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CatTypeQuestion](
	[IdType] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
 CONSTRAINT [PK_CatTypeQuestion] PRIMARY KEY CLUSTERED 
(
	[IdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CatTypeSection]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CatTypeSection](
	[IdType] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
 CONSTRAINT [PK_CatTypeSection] PRIMARY KEY CLUSTERED 
(
	[IdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolPermission]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolPermission](
	[IdPermission] [int] NOT NULL,
	[IdRol] [int] NOT NULL,
	[Date] [date] NULL,
	[State] [nvarchar](50) NULL,
 CONSTRAINT [PK_RolPermission] PRIMARY KEY CLUSTERED 
(
	[IdPermission] ASC,
	[IdRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblForm]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblForm](
	[IdForm] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NULL,
	[Description] [nvarchar](500) NULL,
	[State] [nvarchar](50) NULL,
 CONSTRAINT [PK_TblForm] PRIMARY KEY CLUSTERED 
(
	[IdForm] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblModulos]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblModulos](
	[IdModules] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NULL,
	[Description] [nvarchar](500) NULL,
	[State] [nvarchar](50) NULL,
	[IdUserCreator] [int] NULL,
	[image] [nvarchar](50) NULL,
 CONSTRAINT [PK_TblModulos] PRIMARY KEY CLUSTERED 
(
	[IdModules] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblMyModules]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblMyModules](
	[IdUser] [int] NOT NULL,
	[IdModules] [int] NOT NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_TblMyModules] PRIMARY KEY CLUSTERED 
(
	[IdUser] ASC,
	[IdModules] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblPermission]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblPermission](
	[IdPermission] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_TblPermission] PRIMARY KEY CLUSTERED 
(
	[IdPermission] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblQuestion]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblQuestion](
	[IdQuestion] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](250) NULL,
	[IdType] [int] NULL,
	[IdForm] [int] NULL,
 CONSTRAINT [PK_TblQuestion] PRIMARY KEY CLUSTERED 
(
	[IdQuestion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblQuestionOptions]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblQuestionOptions](
	[IdQuestionOption] [int] IDENTITY(1,1) NOT NULL,
	[IdQuestion] [int] NULL,
	[Value] [nvarchar](50) NULL,
	[OptionDesc] [nvarchar](50) NULL,
 CONSTRAINT [PK_TblQuestionOptions] PRIMARY KEY CLUSTERED 
(
	[IdQuestionOption] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblRol]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblRol](
	[IdRol] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
 CONSTRAINT [PK_TblRol] PRIMARY KEY CLUSTERED 
(
	[IdRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblSections]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblSections](
	[IdSection] [int] IDENTITY(1,1) NOT NULL,
	[IdModules] [int] NULL,
	[Descripcion] [nvarchar](500) NULL,
	[Title] [nvarchar](50) NULL,
	[UrlContent] [nvarchar](max) NULL,
	[IdType] [int] NULL,
 CONSTRAINT [PK_TblSections] PRIMARY KEY CLUSTERED 
(
	[IdSection] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblUsers]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblUsers](
	[IdUsers] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Username] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[Mail] [nvarchar](50) NULL,
 CONSTRAINT [PK_TblUsers] PRIMARY KEY CLUSTERED 
(
	[IdUsers] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblUsersRol]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblUsersRol](
	[IdUser] [int] NOT NULL,
	[IdRol] [int] NOT NULL,
	[Date] [date] NULL,
	[State] [nvarchar](50) NULL,
 CONSTRAINT [PK_TblUsersRol] PRIMARY KEY CLUSTERED 
(
	[IdUser] ASC,
	[IdRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsersResponse]    Script Date: 11/10/2020 17:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsersResponse](
	[IdUser] [int] NOT NULL,
	[IdQuestionOptions] [int] NOT NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_UsersResponse] PRIMARY KEY CLUSTERED 
(
	[IdUser] ASC,
	[IdQuestionOptions] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CatTypeQuestion] ON 

INSERT [dbo].[CatTypeQuestion] ([IdType], [Description], [State]) VALUES (1, N'number', N'act')
INSERT [dbo].[CatTypeQuestion] ([IdType], [Description], [State]) VALUES (2, N'text', N'act')
INSERT [dbo].[CatTypeQuestion] ([IdType], [Description], [State]) VALUES (3, N'checkbox', N'act')
INSERT [dbo].[CatTypeQuestion] ([IdType], [Description], [State]) VALUES (4, N'radio', N'act')
SET IDENTITY_INSERT [dbo].[CatTypeQuestion] OFF
GO
SET IDENTITY_INSERT [dbo].[CatTypeSection] ON 

INSERT [dbo].[CatTypeSection] ([IdType], [Description], [State]) VALUES (1, N'pdf', N'act')
INSERT [dbo].[CatTypeSection] ([IdType], [Description], [State]) VALUES (2, N'img', N'act')
INSERT [dbo].[CatTypeSection] ([IdType], [Description], [State]) VALUES (3, N'video', N'act')
INSERT [dbo].[CatTypeSection] ([IdType], [Description], [State]) VALUES (4, N'game', N'act')
INSERT [dbo].[CatTypeSection] ([IdType], [Description], [State]) VALUES (5, N'test', N'act')
INSERT [dbo].[CatTypeSection] ([IdType], [Description], [State]) VALUES (6, N'texto', N'act')
INSERT [dbo].[CatTypeSection] ([IdType], [Description], [State]) VALUES (7, N'googleForm', N'act')
SET IDENTITY_INSERT [dbo].[CatTypeSection] OFF
GO
SET IDENTITY_INSERT [dbo].[TblForm] ON 

INSERT [dbo].[TblForm] ([IdForm], [Title], [Description], [State]) VALUES (1, N'Form de Prueba', N'Prueba', N'act')
SET IDENTITY_INSERT [dbo].[TblForm] OFF
GO
SET IDENTITY_INSERT [dbo].[TblModulos] ON 

INSERT [dbo].[TblModulos] ([IdModules], [Title], [Description], [State], [IdUserCreator], [image]) VALUES (1, N'Guía de Buenas Prácticas
en Educación Inclusiva', N'Esta publicación ha sido realizada con el apoyo !nanciero de la Agencia Española de Cooperación Internacional para el Desarrollo (AECID), con cargo al Convenio “Promoción de la atención integral de los niños y las niñas de 5 a 12 años en el ámbito educativo y comunitario”. El contenido de dicha publicación es responsabilidad exclusiva de Save the Children y no re"eja necesariamente la opinión de la AECID.', N'act', 1, N'./Media/img/modulo1.jpg')
INSERT [dbo].[TblModulos] ([IdModules], [Title], [Description], [State], [IdUserCreator], [image]) VALUES (2, N'Modulo2', N'desc.....', N'act', 1, N'./Media/img/modulo2.jpg')
INSERT [dbo].[TblModulos] ([IdModules], [Title], [Description], [State], [IdUserCreator], [image]) VALUES (3, N'Algoritmos y Estructuras de Datos', N'desc....', N'act', 1, N'./Media/img/modulo3.jpg')
SET IDENTITY_INSERT [dbo].[TblModulos] OFF
GO
INSERT [dbo].[TblMyModules] ([IdUser], [IdModules], [Date]) VALUES (1, 1, NULL)
GO
SET IDENTITY_INSERT [dbo].[TblQuestion] ON 

INSERT [dbo].[TblQuestion] ([IdQuestion], [Description], [IdType], [IdForm]) VALUES (1, N'Describe esto.....', 1, 1)
INSERT [dbo].[TblQuestion] ([IdQuestion], [Description], [IdType], [IdForm]) VALUES (2, N'Describe esto otro', 1, 1)
INSERT [dbo].[TblQuestion] ([IdQuestion], [Description], [IdType], [IdForm]) VALUES (3, N'Select...', 3, 1)
INSERT [dbo].[TblQuestion] ([IdQuestion], [Description], [IdType], [IdForm]) VALUES (4, N'Select2..', 4, 1)
SET IDENTITY_INSERT [dbo].[TblQuestion] OFF
GO
SET IDENTITY_INSERT [dbo].[TblQuestionOptions] ON 

INSERT [dbo].[TblQuestionOptions] ([IdQuestionOption], [IdQuestion], [Value], [OptionDesc]) VALUES (1, 1, NULL, N'desc')
INSERT [dbo].[TblQuestionOptions] ([IdQuestionOption], [IdQuestion], [Value], [OptionDesc]) VALUES (2, 2, NULL, N'desc')
INSERT [dbo].[TblQuestionOptions] ([IdQuestionOption], [IdQuestion], [Value], [OptionDesc]) VALUES (4, 3, N'1', N'nada')
INSERT [dbo].[TblQuestionOptions] ([IdQuestionOption], [IdQuestion], [Value], [OptionDesc]) VALUES (5, 3, N'2', N'medio')
INSERT [dbo].[TblQuestionOptions] ([IdQuestionOption], [IdQuestion], [Value], [OptionDesc]) VALUES (6, 3, N'3', N'mucho')
INSERT [dbo].[TblQuestionOptions] ([IdQuestionOption], [IdQuestion], [Value], [OptionDesc]) VALUES (7, 4, N'1', N'si')
INSERT [dbo].[TblQuestionOptions] ([IdQuestionOption], [IdQuestion], [Value], [OptionDesc]) VALUES (8, 4, N'0', N'no')
SET IDENTITY_INSERT [dbo].[TblQuestionOptions] OFF
GO
SET IDENTITY_INSERT [dbo].[TblSections] ON 

INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (1, 1, N' LA EDUCACIÓN INCLUSIVA', N'1. INTRODUCCION', N'https://www.youtube.com/embed/5Vl8KTV9T2A', 3)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (2, 1, N'2. INTRODUCCION', N'2. LA EDUCACIÓN INCLUSIVA', N'El derecho a la educación es mundialmente reconocido desde que en 1948 se proclama la Declaración Universal de Derechos Humanos.
Además, la Convención sobre derechos del niño (rati!cada por 193 estados), reconoce este derecho a todos los niños y las niñas. En el año 2000, un informe de la UNESCO establece que la inclusión de la infancia con necesidades especiales o pertenecientes a minorías étnicas desfavorecidas, poblaciones migrantes, comunidades remotas y aisladas o barrios urbanos marginales, así como de otros excluidos de la educación, deberá ser parte integrante de las estrategias para lograr la educación para todos antes del 2015. En 2008, con motivo de la 48ª Conferencia Internacional de Educación de la UNESCO, los Ministros de Educación y Jefes de Delegación de 153 Estados miembro a!rman que una educación inclusiva y de calidad es fundamental para alcanzar el desarrollo humano, social y económico.
Actualmente, existe entre la comunidad internacional una voluntad unánime de fomentar un modelo de educación de calidad, intercultural e inclusivo. Los argumentos que avalan este modelo pueden encontrarse en distintas investigaciones e informes. La OCDE (2007), por ejemplo, a!rmaba en su informe No More Failures: Ten steps to Equity in Education que el excluir a ciertas personas de una educación de calidad, tiene altos costes sociales y conómicos. Los autores de la investigación Actuaciones de Éxito en Escuelas Europeas, publicada por el Ministerio de Educación (2011), sostienen que el éxito en educación está relacionado con la inclusión social y con el acceso a todos los ámbitos sociales y los recursos (empleo, vivienda, salud, política, etc.); y que la inclusión social permite la contribución de un mayor número de personas al desarrollo de una economía del conocimiento competitiva y dinámica, y una mayor cohesión social.
', 6)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (3, 1, N'Section 3', N'3. HISTORIA DE VIDA - SANDRA', N'https://www.youtube.com/embed/czLniFi69aM', 3)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (4, 1, N'Section 4', N'4. HISTORIA DE VIDA - ROBERTO', N'https://www.youtube.com/embed/Na-aM8F1WrI', 3)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (5, 1, N'Section 5', N'5. HISTORIA DE VIDA - IRANIA', N'https://www.youtube.com/embed/UmF7wXV7sMY', 3)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (6, 1, N'Section 6', N'6. HISTORIA DE VIDA - FREDDY REYES', N'https://www.youtube.com/embed/zGE06p1dq8E', 3)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (7, 1, N'Section 1', N'7. FORMULARIO', N'https://docs.google.com/forms/d/e/1FAIpQLSdqIGWNOhS7mZVDnXnGP6AVqX0vjHpLVdcHaFerr1_-TH_gGg/viewform?embedded=true', 7)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (8, 1, N'Section 2', N'8. TEST', N'1', 5)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (9, 2, N'Section 3', N'Section 3', N'content', 6)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (10, 2, N'Section 4', N'Section 4', N'content', 6)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (11, 2, N'Section 5', N'Section 5', N'content', 6)
INSERT [dbo].[TblSections] ([IdSection], [IdModules], [Descripcion], [Title], [UrlContent], [IdType]) VALUES (12, 2, N'Section 6', N'Section 6', N'content', 6)
SET IDENTITY_INSERT [dbo].[TblSections] OFF
GO
SET IDENTITY_INSERT [dbo].[TblUsers] ON 

INSERT [dbo].[TblUsers] ([IdUsers], [Name], [Username], [Password], [State], [Mail]) VALUES (1, N'Wilber', N'Wilber', N'zaxscd', N'act', NULL)
INSERT [dbo].[TblUsers] ([IdUsers], [Name], [Username], [Password], [State], [Mail]) VALUES (2, N'wilber', N'Seyfer', N'zaxscd', NULL, N'zaxscd')
INSERT [dbo].[TblUsers] ([IdUsers], [Name], [Username], [Password], [State], [Mail]) VALUES (3, N'ert', N'sers', N'erseserse', NULL, N'er')
SET IDENTITY_INSERT [dbo].[TblUsers] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_TblUsers]    Script Date: 11/10/2020 17:08:26 ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_TblUsers] ON [dbo].[TblUsers]
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RolPermission]  WITH CHECK ADD  CONSTRAINT [FK_RolPermission_TblPermission] FOREIGN KEY([IdPermission])
REFERENCES [dbo].[TblPermission] ([IdPermission])
GO
ALTER TABLE [dbo].[RolPermission] CHECK CONSTRAINT [FK_RolPermission_TblPermission]
GO
ALTER TABLE [dbo].[RolPermission]  WITH CHECK ADD  CONSTRAINT [FK_RolPermission_TblRol] FOREIGN KEY([IdRol])
REFERENCES [dbo].[TblRol] ([IdRol])
GO
ALTER TABLE [dbo].[RolPermission] CHECK CONSTRAINT [FK_RolPermission_TblRol]
GO
ALTER TABLE [dbo].[TblModulos]  WITH CHECK ADD  CONSTRAINT [FK_TblModulos_TblUsers] FOREIGN KEY([IdUserCreator])
REFERENCES [dbo].[TblUsers] ([IdUsers])
GO
ALTER TABLE [dbo].[TblModulos] CHECK CONSTRAINT [FK_TblModulos_TblUsers]
GO
ALTER TABLE [dbo].[TblMyModules]  WITH CHECK ADD  CONSTRAINT [FK_TblMyModules_TblModulos] FOREIGN KEY([IdModules])
REFERENCES [dbo].[TblModulos] ([IdModules])
GO
ALTER TABLE [dbo].[TblMyModules] CHECK CONSTRAINT [FK_TblMyModules_TblModulos]
GO
ALTER TABLE [dbo].[TblMyModules]  WITH CHECK ADD  CONSTRAINT [FK_TblMyModules_TblUsers] FOREIGN KEY([IdUser])
REFERENCES [dbo].[TblUsers] ([IdUsers])
GO
ALTER TABLE [dbo].[TblMyModules] CHECK CONSTRAINT [FK_TblMyModules_TblUsers]
GO
ALTER TABLE [dbo].[TblQuestion]  WITH CHECK ADD  CONSTRAINT [FK_TblQuestion_CatTypeQuestion] FOREIGN KEY([IdType])
REFERENCES [dbo].[CatTypeQuestion] ([IdType])
GO
ALTER TABLE [dbo].[TblQuestion] CHECK CONSTRAINT [FK_TblQuestion_CatTypeQuestion]
GO
ALTER TABLE [dbo].[TblQuestion]  WITH CHECK ADD  CONSTRAINT [FK_TblQuestion_TblForm] FOREIGN KEY([IdForm])
REFERENCES [dbo].[TblForm] ([IdForm])
GO
ALTER TABLE [dbo].[TblQuestion] CHECK CONSTRAINT [FK_TblQuestion_TblForm]
GO
ALTER TABLE [dbo].[TblQuestionOptions]  WITH CHECK ADD  CONSTRAINT [FK_TblQuestionOptions_TblQuestion] FOREIGN KEY([IdQuestion])
REFERENCES [dbo].[TblQuestion] ([IdQuestion])
GO
ALTER TABLE [dbo].[TblQuestionOptions] CHECK CONSTRAINT [FK_TblQuestionOptions_TblQuestion]
GO
ALTER TABLE [dbo].[TblSections]  WITH CHECK ADD  CONSTRAINT [FK_TblSections_CatTypeSection] FOREIGN KEY([IdType])
REFERENCES [dbo].[CatTypeSection] ([IdType])
GO
ALTER TABLE [dbo].[TblSections] CHECK CONSTRAINT [FK_TblSections_CatTypeSection]
GO
ALTER TABLE [dbo].[TblSections]  WITH CHECK ADD  CONSTRAINT [FK_TblSections_TblModulos] FOREIGN KEY([IdModules])
REFERENCES [dbo].[TblModulos] ([IdModules])
GO
ALTER TABLE [dbo].[TblSections] CHECK CONSTRAINT [FK_TblSections_TblModulos]
GO
ALTER TABLE [dbo].[TblUsersRol]  WITH CHECK ADD  CONSTRAINT [FK_TblUsersRol_TblRol] FOREIGN KEY([IdRol])
REFERENCES [dbo].[TblRol] ([IdRol])
GO
ALTER TABLE [dbo].[TblUsersRol] CHECK CONSTRAINT [FK_TblUsersRol_TblRol]
GO
ALTER TABLE [dbo].[TblUsersRol]  WITH CHECK ADD  CONSTRAINT [FK_TblUsersRol_TblUsers] FOREIGN KEY([IdUser])
REFERENCES [dbo].[TblUsers] ([IdUsers])
GO
ALTER TABLE [dbo].[TblUsersRol] CHECK CONSTRAINT [FK_TblUsersRol_TblUsers]
GO
ALTER TABLE [dbo].[UsersResponse]  WITH CHECK ADD  CONSTRAINT [FK_UsersResponse_TblQuestionOptions] FOREIGN KEY([IdQuestionOptions])
REFERENCES [dbo].[TblQuestionOptions] ([IdQuestionOption])
GO
ALTER TABLE [dbo].[UsersResponse] CHECK CONSTRAINT [FK_UsersResponse_TblQuestionOptions]
GO
ALTER TABLE [dbo].[UsersResponse]  WITH CHECK ADD  CONSTRAINT [FK_UsersResponse_TblUsers] FOREIGN KEY([IdUser])
REFERENCES [dbo].[TblUsers] ([IdUsers])
GO
ALTER TABLE [dbo].[UsersResponse] CHECK CONSTRAINT [FK_UsersResponse_TblUsers]
GO
USE [master]
GO
ALTER DATABASE [INCLUSIVE_BD] SET  READ_WRITE 
GO
