package tesis.services;

import org.springframework.stereotype.Service;
import tesis.dtos.LoginDTO;
import tesis.dtos.UsuarioDTO;
import tesis.dtos.UsuarioDTOPost;
import tesis.dtos.common.MensajeRespuesta;

import java.util.List;

@Service
public interface UsuarioService {

    List<UsuarioDTO> listarUsuarios();
    List<UsuarioDTO> listarUsuariosFiltro(String email);
    List<UsuarioDTO> listarUsuariosByRol(Long idRol);
    UsuarioDTO obtenerUsuarioByEmail(String codigo);
    MensajeRespuesta registrarUsuario(UsuarioDTOPost usuarioDTO);
    MensajeRespuesta bajaUsuario(String emailBajaUsuario);
    MensajeRespuesta cambiarRolUsuario(String email, Long idRol);
    MensajeRespuesta loginUsuario(LoginDTO loginDTO);
    MensajeRespuesta eliminarUsuarioSistema(String id);
    MensajeRespuesta cambiarContraseña(String email, String nuevaPass);
    MensajeRespuesta verificacionCodigo(String email, String codigo);
}