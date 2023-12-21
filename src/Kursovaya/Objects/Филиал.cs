﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Филиал.
    /// </summary>
    // *** Start programmer edit section *** (Филиал CustomAttributes)

    // *** End programmer edit section *** (Филиал CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФилиалE", new string[] {
            "Название as \'Название\'",
            "Адрес as \'Адрес\'",
            "РабочаяПочта as \'Рабочая почта\'",
            "НомерТелефона as \'Номер телефона\'",
            "Директор as \'Директор\'",
            "Директор.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Директор.ФИО"})]
    [AssociatedDetailViewAttribute("ФилиалE", "ВозвратКлиентом", "ВозвратКлиентомE", true, "", "Возврат клиентом", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ФилиалE", "РезервОборуд", "РезервОборудE", true, "", "Резерв оборуд", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ФилиалE", "Директор", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ФилиалL", new string[] {
            "Название as \'Название\'",
            "Адрес as \'Адрес\'",
            "РабочаяПочта as \'Рабочая почта\'",
            "НомерТелефона as \'Номер телефона\'",
            "Директор.ФИО as \'ФИО\'"})]
    public class Филиал : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазвание;
        
        private string fАдрес;
        
        private string fРабочаяПочта;
        
        private int fНомерТелефона;
        
        private IIS.Kursovaya.Ответственный fДиректор;
        
        private IIS.Kursovaya.DetailArrayOfВозвратКлиентом fВозвратКлиентом;
        
        private IIS.Kursovaya.DetailArrayOfРезервОборуд fРезервОборуд;
        
        // *** Start programmer edit section *** (Филиал CustomMembers)

        // *** End programmer edit section *** (Филиал CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Филиал.Адрес CustomAttributes)

        // *** End programmer edit section *** (Филиал.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Филиал.Адрес Get start)

                // *** End programmer edit section *** (Филиал.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Филиал.Адрес Get end)

                // *** End programmer edit section *** (Филиал.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Филиал.Адрес Set start)

                // *** End programmer edit section *** (Филиал.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Филиал.Адрес Set end)

                // *** End programmer edit section *** (Филиал.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Филиал.Название CustomAttributes)

        // *** End programmer edit section *** (Филиал.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Филиал.Название Get start)

                // *** End programmer edit section *** (Филиал.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Филиал.Название Get end)

                // *** End programmer edit section *** (Филиал.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Филиал.Название Set start)

                // *** End programmer edit section *** (Филиал.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Филиал.Название Set end)

                // *** End programmer edit section *** (Филиал.Название Set end)
            }
        }
        
        /// <summary>
        /// НомерТелефона.
        /// </summary>
        // *** Start programmer edit section *** (Филиал.НомерТелефона CustomAttributes)

        // *** End programmer edit section *** (Филиал.НомерТелефона CustomAttributes)
        public virtual int НомерТелефона
        {
            get
            {
                // *** Start programmer edit section *** (Филиал.НомерТелефона Get start)

                // *** End programmer edit section *** (Филиал.НомерТелефона Get start)
                int result = this.fНомерТелефона;
                // *** Start programmer edit section *** (Филиал.НомерТелефона Get end)

                // *** End programmer edit section *** (Филиал.НомерТелефона Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Филиал.НомерТелефона Set start)

                // *** End programmer edit section *** (Филиал.НомерТелефона Set start)
                this.fНомерТелефона = value;
                // *** Start programmer edit section *** (Филиал.НомерТелефона Set end)

                // *** End programmer edit section *** (Филиал.НомерТелефона Set end)
            }
        }
        
        /// <summary>
        /// РабочаяПочта.
        /// </summary>
        // *** Start programmer edit section *** (Филиал.РабочаяПочта CustomAttributes)

        // *** End programmer edit section *** (Филиал.РабочаяПочта CustomAttributes)
        [StrLen(255)]
        public virtual string РабочаяПочта
        {
            get
            {
                // *** Start programmer edit section *** (Филиал.РабочаяПочта Get start)

                // *** End programmer edit section *** (Филиал.РабочаяПочта Get start)
                string result = this.fРабочаяПочта;
                // *** Start programmer edit section *** (Филиал.РабочаяПочта Get end)

                // *** End programmer edit section *** (Филиал.РабочаяПочта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Филиал.РабочаяПочта Set start)

                // *** End programmer edit section *** (Филиал.РабочаяПочта Set start)
                this.fРабочаяПочта = value;
                // *** Start programmer edit section *** (Филиал.РабочаяПочта Set end)

                // *** End programmer edit section *** (Филиал.РабочаяПочта Set end)
            }
        }
        
        /// <summary>
        /// Филиал.
        /// </summary>
        // *** Start programmer edit section *** (Филиал.Директор CustomAttributes)

        // *** End programmer edit section *** (Филиал.Директор CustomAttributes)
        [PropertyStorage(new string[] {
                "Директор"})]
        [NotNull()]
        public virtual IIS.Kursovaya.Ответственный Директор
        {
            get
            {
                // *** Start programmer edit section *** (Филиал.Директор Get start)

                // *** End programmer edit section *** (Филиал.Директор Get start)
                IIS.Kursovaya.Ответственный result = this.fДиректор;
                // *** Start programmer edit section *** (Филиал.Директор Get end)

                // *** End programmer edit section *** (Филиал.Директор Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Филиал.Директор Set start)

                // *** End programmer edit section *** (Филиал.Директор Set start)
                this.fДиректор = value;
                // *** Start programmer edit section *** (Филиал.Директор Set end)

                // *** End programmer edit section *** (Филиал.Директор Set end)
            }
        }
        
        /// <summary>
        /// Филиал.
        /// </summary>
        // *** Start programmer edit section *** (Филиал.ВозвратКлиентом CustomAttributes)

        // *** End programmer edit section *** (Филиал.ВозвратКлиентом CustomAttributes)
        public virtual IIS.Kursovaya.DetailArrayOfВозвратКлиентом ВозвратКлиентом
        {
            get
            {
                // *** Start programmer edit section *** (Филиал.ВозвратКлиентом Get start)

                // *** End programmer edit section *** (Филиал.ВозвратКлиентом Get start)
                if ((this.fВозвратКлиентом == null))
                {
                    this.fВозвратКлиентом = new IIS.Kursovaya.DetailArrayOfВозвратКлиентом(this);
                }
                IIS.Kursovaya.DetailArrayOfВозвратКлиентом result = this.fВозвратКлиентом;
                // *** Start programmer edit section *** (Филиал.ВозвратКлиентом Get end)

                // *** End programmer edit section *** (Филиал.ВозвратКлиентом Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Филиал.ВозвратКлиентом Set start)

                // *** End programmer edit section *** (Филиал.ВозвратКлиентом Set start)
                this.fВозвратКлиентом = value;
                // *** Start programmer edit section *** (Филиал.ВозвратКлиентом Set end)

                // *** End programmer edit section *** (Филиал.ВозвратКлиентом Set end)
            }
        }
        
        /// <summary>
        /// Филиал.
        /// </summary>
        // *** Start programmer edit section *** (Филиал.РезервОборуд CustomAttributes)

        // *** End programmer edit section *** (Филиал.РезервОборуд CustomAttributes)
        public virtual IIS.Kursovaya.DetailArrayOfРезервОборуд РезервОборуд
        {
            get
            {
                // *** Start programmer edit section *** (Филиал.РезервОборуд Get start)

                // *** End programmer edit section *** (Филиал.РезервОборуд Get start)
                if ((this.fРезервОборуд == null))
                {
                    this.fРезервОборуд = new IIS.Kursovaya.DetailArrayOfРезервОборуд(this);
                }
                IIS.Kursovaya.DetailArrayOfРезервОборуд result = this.fРезервОборуд;
                // *** Start programmer edit section *** (Филиал.РезервОборуд Get end)

                // *** End programmer edit section *** (Филиал.РезервОборуд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Филиал.РезервОборуд Set start)

                // *** End programmer edit section *** (Филиал.РезервОборуд Set start)
                this.fРезервОборуд = value;
                // *** Start programmer edit section *** (Филиал.РезервОборуд Set end)

                // *** End programmer edit section *** (Филиал.РезервОборуд Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФилиалE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФилиалE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФилиалE", typeof(IIS.Kursovaya.Филиал));
                }
            }
            
            /// <summary>
            /// "ФилиалL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФилиалL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФилиалL", typeof(IIS.Kursovaya.Филиал));
                }
            }
        }
    }
}
