import React from 'react';
import './RelacionesPublicas.css';
const RelacionesPublicas = () => {
  return (
    <div className='rp-container'>
      <div className='rp-content'>
          <p>
            Teletón es una iniciativa increíble que trabaja incansablemente para mejorar la vida de miles de niños y personas con discapacidades en todo el mundo. Donar a Teletón es una forma poderosa de marcar la diferencia y contribuir a una sociedad más inclusiva y compasiva.
          </p>
          <p>
            Cada donación importa y tiene un impacto significativo. A través de las generosas contribuciones de personas como tú, Teletón puede ofrecer atención médica de calidad, terapias, rehabilitación y apoyo a las personas con discapacidades y sus familias. Además, financia investigaciones innovadoras y programas educativos que mejoran la calidad de vida de las personas con discapacidades.
          </p>
          <p>
            Tu donación no solo brinda esperanza y ayuda a quienes más lo necesitan, sino que también promueve un mundo donde todos tienen igualdad de oportunidades. Ayuda a construir un futuro más brillante y promueve la inclusión. ¡Únete a la causa y dona hoy a Teletón!
          </p>
          <button onClick={() => window.open('https://teleton.org', '_blank')}>Visita Teletón</button>

      </div>

    </div>
  );
}

export default RelacionesPublicas;
