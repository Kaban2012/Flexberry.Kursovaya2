



CREATE TABLE "Ответственный"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"РабочаяПочта" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Модель"
(

	"primaryKey" RAW(16) NOT NULL,

	"Название" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВозвратКлиентом"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаПоступления" DATE NULL,

	"ДатаУстановки" DATE NULL,

	"СерийныйНомер" NVARCHAR2(255) NULL,

	"ПричинаВозврата" NVARCHAR2(255) NULL,

	"Модель" RAW(16) NOT NULL,

	"Тип" RAW(16) NOT NULL,

	"Клиент" RAW(16) NOT NULL,

	"Филиал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Тип"
(

	"primaryKey" RAW(16) NOT NULL,

	"Название" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РезервОборуд"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаПоступления" DATE NULL,

	"ПереданоКлиенту" NUMBER(1) NULL,

	"ДатаПередачи" DATE NULL,

	"СерийныйНомер" NVARCHAR2(255) NULL,

	"Тип" RAW(16) NOT NULL,

	"Модель" RAW(16) NOT NULL,

	"Администратор" RAW(16) NOT NULL,

	"Филиал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Филиал"
(

	"primaryKey" RAW(16) NOT NULL,

	"Название" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"РабочаяПочта" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"Директор" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Пользователь"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"РабочаяПочта" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ВозвратКлиентом"
	ADD CONSTRAINT "ВозвратКлиен_8972" FOREIGN KEY ("Модель") REFERENCES "Модель" ("primaryKey");

CREATE INDEX "ВозвратКлиен_2109" on "ВозвратКлиентом" ("Модель");

ALTER TABLE "ВозвратКлиентом"
	ADD CONSTRAINT "ВозвратКлиен_4907" FOREIGN KEY ("Тип") REFERENCES "Тип" ("primaryKey");

CREATE INDEX "ВозвратКлиен_6476" on "ВозвратКлиентом" ("Тип");

ALTER TABLE "ВозвратКлиентом"
	ADD CONSTRAINT "ВозвратКлиен_5122" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "ВозвратКлиен_5686" on "ВозвратКлиентом" ("Клиент");

ALTER TABLE "ВозвратКлиентом"
	ADD CONSTRAINT "ВозвратКлиен_9883" FOREIGN KEY ("Филиал") REFERENCES "Филиал" ("primaryKey");

CREATE INDEX "ВозвратКлиен_8595" on "ВозвратКлиентом" ("Филиал");

ALTER TABLE "РезервОборуд"
	ADD CONSTRAINT "РезервОборуд__7332" FOREIGN KEY ("Тип") REFERENCES "Тип" ("primaryKey");

CREATE INDEX "РезервОборуд__7407" on "РезервОборуд" ("Тип");

ALTER TABLE "РезервОборуд"
	ADD CONSTRAINT "РезервОборуд_F_920" FOREIGN KEY ("Модель") REFERENCES "Модель" ("primaryKey");

CREATE INDEX "РезервОборуд__2385" on "РезервОборуд" ("Модель");

ALTER TABLE "РезервОборуд"
	ADD CONSTRAINT "РезервОборуд__8485" FOREIGN KEY ("Администратор") REFERENCES "Пользователь" ("primaryKey");

CREATE INDEX "РезервОборуд__2423" on "РезервОборуд" ("Администратор");

ALTER TABLE "РезервОборуд"
	ADD CONSTRAINT "РезервОборуд__1831" FOREIGN KEY ("Филиал") REFERENCES "Филиал" ("primaryKey");

CREATE INDEX "РезервОборуд__8871" on "РезервОборуд" ("Филиал");

ALTER TABLE "Филиал"
	ADD CONSTRAINT "Филиал_FОтвет_3630" FOREIGN KEY ("Директор") REFERENCES "Ответственный" ("primaryKey");

CREATE INDEX "Филиал_IДиректор" on "Филиал" ("Директор");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


