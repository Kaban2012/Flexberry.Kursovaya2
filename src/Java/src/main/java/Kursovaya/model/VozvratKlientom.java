package Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ВозвратКлиентом
 */
@Entity(name = "IISKursovayaВозвратКлиентом")
@Table(schema = "public", name = "ВозвратКлиентом")
public class VozvratKlientom {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаПоступления")
    private Date датапоступления;

    @Column(name = "ДатаУстановки")
    private Date датаустановки;

    @Column(name = "СерийныйНомер")
    private String серийныйномер;

    @Column(name = "ПричинаВозврата")
    private String причинавозврата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Model")
    @Convert("Model")
    @Column(name = "Модель", length = 16, unique = true, nullable = false)
    private UUID _modelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Model", insertable = false, updatable = false)
    private Model model;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tip")
    @Convert("Tip")
    @Column(name = "Тип", length = 16, unique = true, nullable = false)
    private UUID _tipid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tip", insertable = false, updatable = false)
    private Tip tip;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Filial")
    @Convert("Filial")
    @Column(name = "Филиал", length = 16, unique = true, nullable = false)
    private UUID _filialid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Filial", insertable = false, updatable = false)
    private Filial filial;


    public VozvratKlientom() {
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

    public Date getДатаУстановки() {
      return датаустановки;
    }

    public void setДатаУстановки(Date датаустановки) {
      this.датаустановки = датаустановки;
    }

    public String getСерийныйНомер() {
      return серийныйномер;
    }

    public void setСерийныйНомер(String серийныйномер) {
      this.серийныйномер = серийныйномер;
    }

    public String getПричинаВозврата() {
      return причинавозврата;
    }

    public void setПричинаВозврата(String причинавозврата) {
      this.причинавозврата = причинавозврата;
    }


}