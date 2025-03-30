package tesis.repositories.auxiliar;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tesis.entities.auxiliar.CiudadEntity;

import java.util.List;

@Repository
public interface CiudadJpaRepository extends JpaRepository<CiudadEntity, Long> {
    void deleteById(Long id);
    boolean existsById(Long id);
    boolean existsByDescripcion(String descripcion);
    List<CiudadEntity> getAllByProvincia_IdOrderByDescripcion(Long id);
    List<CiudadEntity> getAllByOrderByDescripcion();
    CiudadEntity getByCodigoPostal(String codigoPostal);
}
