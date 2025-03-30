package tesis.dtos.auxiliar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CambioContraseña {
    private String email;
    private String password;
}
