package tesis.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonaDTO {
    Long id;
    String apellido;
    String nombre;
    String ciudad;
    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate fechaNacimiento;
    String tipoDNI;
    String nroDocumento;
    String calle;
    String altura;
    String telefono1;
    String telefono2;
    String telefonofijo;
    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate fechaModificacion;
    boolean habilitado;
    String emailUsuario;
}
