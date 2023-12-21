package Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Филиал
 */
@Entity(name = "IISKursovayaФилиал")
@Table(schema = "public", name = "Филиал")
public class Filial {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Название")
    private String название;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "РабочаяПочта")
    private String рабочаяпочта;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Direktor")
    @Convert("Direktor")
    @Column(name = "Директор", length = 16, unique = true, nullable = false)
    private UUID _direktorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Direktor", insertable = false, updatable = false)
    private Otvetstvennyj direktor;

    @OneToMany(mappedBy = "filial", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VozvratKlientom> vozvratklientoms;

    @OneToMany(mappedBy = "filial", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<RezervOborud> rezervoboruds;


    public Filial() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getРабочаяПочта() {
      return рабочаяпочта;
    }

    public void setРабочаяПочта(String рабочаяпочта) {
      this.рабочаяпочта = рабочаяпочта;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }


}