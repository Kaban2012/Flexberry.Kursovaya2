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
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "ФИО as \'ФИО\'",
            "Адрес as \'Адрес\'",
            "НомерТелефона as \'Номер телефона\'"})]
    [View("КлиентL", new string[] {
            "ФИО as \'ФИО\'",
            "Адрес as \'Адрес\'",
            "НомерТелефона as \'Номер телефона\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private string fАдрес;
        
        private int fНомерТелефона;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Адрес CustomAttributes)

        // *** End programmer edit section *** (Клиент.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Адрес Get start)

                // *** End programmer edit section *** (Клиент.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Клиент.Адрес Get end)

                // *** End programmer edit section *** (Клиент.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Адрес Set start)

                // *** End programmer edit section *** (Клиент.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Клиент.Адрес Set end)

                // *** End programmer edit section *** (Клиент.Адрес Set end)
            }
        }
        
        /// <summary>
        /// НомерТелефона.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.НомерТелефона CustomAttributes)

        // *** End programmer edit section *** (Клиент.НомерТелефона CustomAttributes)
        public virtual int НомерТелефона
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.НомерТелефона Get start)

                // *** End programmer edit section *** (Клиент.НомерТелефона Get start)
                int result = this.fНомерТелефона;
                // *** Start programmer edit section *** (Клиент.НомерТелефона Get end)

                // *** End programmer edit section *** (Клиент.НомерТелефона Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.НомерТелефона Set start)

                // *** End programmer edit section *** (Клиент.НомерТелефона Set start)
                this.fНомерТелефона = value;
                // *** Start programmer edit section *** (Клиент.НомерТелефона Set end)

                // *** End programmer edit section *** (Клиент.НомерТелефона Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ФИО CustomAttributes)

        // *** End programmer edit section *** (Клиент.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ФИО Get start)

                // *** End programmer edit section *** (Клиент.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Клиент.ФИО Get end)

                // *** End programmer edit section *** (Клиент.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ФИО Set start)

                // *** End programmer edit section *** (Клиент.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Клиент.ФИО Set end)

                // *** End programmer edit section *** (Клиент.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Kursovaya.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Kursovaya.Клиент));
                }
            }
        }
    }
}
