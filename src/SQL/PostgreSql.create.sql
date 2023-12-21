﻿




CREATE TABLE Ответственный (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 РабочаяПочта VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Модель (
 primaryKey UUID NOT NULL,
 Название VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиент (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ВозвратКлиентом (
 primaryKey UUID NOT NULL,
 ДатаПоступления TIMESTAMP(3) NULL,
 ДатаУстановки TIMESTAMP(3) NULL,
 СерийныйНомер VARCHAR(255) NULL,
 ПричинаВозврата VARCHAR(255) NULL,
 Модель UUID NOT NULL,
 Тип UUID NOT NULL,
 Клиент UUID NOT NULL,
 Филиал UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Тип (
 primaryKey UUID NOT NULL,
 Название VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РезервОборуд (
 primaryKey UUID NOT NULL,
 ДатаПоступления TIMESTAMP(3) NULL,
 ПереданоКлиенту BOOLEAN NULL,
 ДатаПередачи TIMESTAMP(3) NULL,
 СерийныйНомер VARCHAR(255) NULL,
 Тип UUID NOT NULL,
 Модель UUID NOT NULL,
 Администратор UUID NOT NULL,
 Филиал UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Филиал (
 primaryKey UUID NOT NULL,
 Название VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 РабочаяПочта VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 Директор UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Пользователь (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 РабочаяПочта VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ВозвратКлиентом ADD CONSTRAINT FK126842f41c526d19066194772459c463c6b69201 FOREIGN KEY (Модель) REFERENCES Модель; 
CREATE INDEX Index126842f41c526d19066194772459c463c6b69201 on ВозвратКлиентом (Модель); 

 ALTER TABLE ВозвратКлиентом ADD CONSTRAINT FKe577578bddc62f9c201c3d947f098e596bff5acf FOREIGN KEY (Тип) REFERENCES Тип; 
CREATE INDEX Indexe577578bddc62f9c201c3d947f098e596bff5acf on ВозвратКлиентом (Тип); 

 ALTER TABLE ВозвратКлиентом ADD CONSTRAINT FK1aaac2724dab1739ec5106d250616fc95794abdc FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Index1aaac2724dab1739ec5106d250616fc95794abdc on ВозвратКлиентом (Клиент); 

 ALTER TABLE ВозвратКлиентом ADD CONSTRAINT FK512c83228a0b632dccc13e7550be48ab9373e578 FOREIGN KEY (Филиал) REFERENCES Филиал; 
CREATE INDEX Index512c83228a0b632dccc13e7550be48ab9373e578 on ВозвратКлиентом (Филиал); 

 ALTER TABLE РезервОборуд ADD CONSTRAINT FK32afd687612fff3e8ba616fd6bfa9029619a8709 FOREIGN KEY (Тип) REFERENCES Тип; 
CREATE INDEX Index32afd687612fff3e8ba616fd6bfa9029619a8709 on РезервОборуд (Тип); 

 ALTER TABLE РезервОборуд ADD CONSTRAINT FKd40c04e30bd645e7bef2ed66c98bd4c5489d61d4 FOREIGN KEY (Модель) REFERENCES Модель; 
CREATE INDEX Indexd40c04e30bd645e7bef2ed66c98bd4c5489d61d4 on РезервОборуд (Модель); 

 ALTER TABLE РезервОборуд ADD CONSTRAINT FKc41502a8bd83cc30fb451d5e4271e9d8c0095c48 FOREIGN KEY (Администратор) REFERENCES Пользователь; 
CREATE INDEX Indexc41502a8bd83cc30fb451d5e4271e9d8c0095c48 on РезервОборуд (Администратор); 

 ALTER TABLE РезервОборуд ADD CONSTRAINT FKef3cc03e50d10c9efae65172658d37d112e42f8c FOREIGN KEY (Филиал) REFERENCES Филиал; 
CREATE INDEX Indexef3cc03e50d10c9efae65172658d37d112e42f8c on РезервОборуд (Филиал); 

 ALTER TABLE Филиал ADD CONSTRAINT FKc5c94cede7ba8f3855a8f8dd18f7b76ceb94cedb FOREIGN KEY (Директор) REFERENCES Ответственный; 
CREATE INDEX Indexc5c94cede7ba8f3855a8f8dd18f7b76ceb94cedb on Филиал (Директор); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

