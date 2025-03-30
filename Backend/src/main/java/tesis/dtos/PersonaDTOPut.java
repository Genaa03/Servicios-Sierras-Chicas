package tesis.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonaDTOPut {
    String apellido;
    String nombre;
    Long idCiudad;
    LocalDate fechaNacimiento;
    Long idTipoDNI;
    String nroDocumento;
    String calle;
    String altura;
    String telefono1;
    String telefono2;
    String telefonofijo;
}