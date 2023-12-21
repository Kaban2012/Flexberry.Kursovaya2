package Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: РезервОборуд
 */
@Entity(name = "IISKursovayaРезервОборуд")
@Table(schema = "public", name = "РезервОборуд")
public class RezervOborud {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаПоступления")
    private Date датапоступления;

    @Column(name = "ПереданоКлиенту")
    private Boolean переданоклиенту;

    @Column(name = "ДатаПередачи")
    private Date датапередачи;

    @Column(name = "СерийныйНомер")
    private String серийныйномер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tip")
    @Convert("Tip")
    @Column(name = "Тип", length = 16, unique = true, nullable = false)
    private UUID _tipid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tip", insertable = false, updatable = false)
    private Tip tip;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Model")
    @Convert("Model")
    @Column(name = "Модель", length = 16, unique = true, nullable = false)
    private UUID _modelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Model", insertable = false, updatable = false)
    private Model model;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Administrator")
    @Convert("Administrator")
    @Column(name = "Администратор", length = 16, unique = true, nullable = false)
    private UUID _administratorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Administrator", insertable = false, updatable = false)
    private Polzovatel administrator;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Filial")
    @Convert("Filial")
    @Column(name = "Филиал", length = 16, unique = true, nullable = false)
    private UUID _filialid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Filial", insertable = false, updatable = false)
    private Filial filial;


    public RezervOborud() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаПоступления() {
      return датапоступления;
    }

    public void setДатаПоступления(Date датапоступления) {
      this.датапоступления = датапоступления;
    }

    public Boolean getПереданоКлиенту() {
      return переданоклиенту;
    }

    public void setПереданоКлиенту(Boolean переданоклиенту) {
      this.переданоклиенту = переданоклиенту;
    }

    public Date getДатаПередачи() {
      return датапередачи;
    }

    public void setДатаПередачи(Date датапередачи) {
      this.датапередачи = датапередачи;
    }

    public String getСерийныйНомер() {
      return серийныйномер;
    }

    public void setСерийныйНомер(String серийныйномер) {
      this.серийныйномер = серийныйномер;
    }


}