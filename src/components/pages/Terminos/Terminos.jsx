import React from 'react'
import { useNavigate } from 'react-router'
import './styles.css'

export const Terminos = () => {

    const navigate = useNavigate();

    const handleVolver = () => navigate( -1 );

    return (
        <div className="terminos-container animate__animated animate__fadeIn">
            <div className="terminos">
                <h1 className='h1'>Terminos y condiciones</h1>
                <div className="content">
                    ¡Bienvenido a Pet&#39;s care!
                    <br/><br/>
                    Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de
                    Pet&#39;s care, ubicado en <a href="https://pet-s-care-app.pages.dev/">https://pet-s-care-app.pages.dev/</a> .
                    Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No
                    continúes usando Pet&#39;s care si no estás de acuerdo con todos los términos y condiciones
                    establecidos en esta página.
                    <br/><br/>
                    <span className="span">Licencia</span>
                    <br/>
                    A menos que se indique lo contrario, Pet&#39;s care y/o sus licenciantes poseen los derechos de
                    propiedad intelectual de todo el material en Pet&#39;s care. Todos los derechos de propiedad
                    intelectual son reservados. Puedes acceder desde Pet&#39;s care para tu uso personal sujeto a las
                    restricciones establecidas en estos términos y condiciones.
                    <br/><br/>
                    <span className='span'>No debes</span>
                    <br/>
                    <span className="span point">•</span> Copiar o volver a publicar material de Pet&#39;s care
                    <br/>
                    <span className="span point">•</span> Vender, alquilar o sublicenciar material de Pet&#39;s care
                    <br/>
                    <span className="span point">•</span> Reproducir, duplicar o copiar material de Pet&#39;s care
                    <br/>
                    <span className="span point">•</span> Redistribuir contenido de Pet&#39;s care

                    <br/><br/>
                    Este acuerdo comenzará la fecha presente.
                    Partes de este sitio web ofrecen a los usuarios la oportunidad de publicar e intercambiar
                    opiniones e información en determinadas áreas. 
                    <br /><br />
                    Pet&#39;s care no filtra, edita, publica ni revisa los
                    comentarios antes de su presencia en el sitio web. Los comentarios no reflejan los puntos de
                    vista ni las opiniones de Pet&#39;s care, sus agentes y/o afiliados. Los comentarios reflejan los
                    puntos de vista y opiniones de la persona que publica. 
                    <br />
                    En la medida en que lo permitan las
                    leyes aplicables, Pet&#39;s care no será responsable de los comentarios ni de ninguna
                    responsabilidad, daños o gastos causados ​​o sufridos como resultado de cualquier uso o
                    publicación o apariencia de comentarios en este sitio web.
                    <br/>
                    <br/>
                    Pet&#39;s care se reserva el derecho de monitorear todos los comentarios y eliminar los que
                    puedan considerarse inapropiados, ofensivos o que incumplan estos Términos y Condiciones.
                    <br/><br/>
                    <span className="span">Garantizas y declaras que</span>
                    <br />
                    <span className="span point">•</span> Tienes derecho a publicar comentarios en nuestro sitio web y tienes todas las licencias
                    y consentimientos necesarios para hacerlo;
                    <br />
                    <span className="span point">•</span> Los comentarios no invaden ningún derecho de propiedad intelectual, incluidos, entre
                    otros, los derechos de autor, patentes o marcas comerciales de terceros;
                    <br />
                    <span className="span point">•</span> Los comentarios no contienen ningún material difamatorio, calumnioso, ofensivo,
                    indecente o ilegal de otro modo, que sea una invasión de la privacidad.
                    <br />
                    <span className="span point">•</span> Los comentarios no se utilizarán para solicitar o promover negocios o actividades
                    comerciales personalizadas o presentes o actividades ilegales.

                    <br /><br />
                    Por la presente, otorgas a Pet&#39;s care una licencia no exclusiva para usar, reproducir, editar y
                    autorizar a otros a usar, reproducir y editar cualquiera de tus comentarios en todas y cada una
                    de las formas, formatos, o medios.
                    <br/><br/>
                    <span className="span">Hipervínculos a nuestro contenido</span>
                    <br/>
                    Las siguientes organizaciones pueden vincularse a nuestro sitio web sin aprobación previa por
                    escrito:
                    <br />
                    <span className="span point">•</span> Agencias gubernamentales;<br />
                    <span className="span point">•</span> Motores de búsqueda;<br />
                    <span className="span point">•</span> Organizaciones de noticias;<br />
                    <span className="span point">•</span> Los distribuidores de directorios en línea pueden vincularse a nuestro sitio web de la
                    misma manera que hacen hipervínculos a los sitios web de otras empresas que figuran
                    en la lista; y<br />
                    <span className="span point">•</span> Empresas acreditadas en todo el sistema, excepto que soliciten organizaciones sin
                    fines de lucro, centros comerciales de caridad y grupos de recaudación de fondos de
                    caridad que no pueden hacer hipervínculos a nuestro sitio web.
                    <br /><br />
                    <span className="span">Estas organizaciones pueden enlazar a nuestra página de inicio, a publicaciones o a otra
                    información del sitio siempre que el enlace</span>
                    <br />
                    <span className="span">a) </span> no sea engañoso de ninguna manera; <br />
                    <span className="span">b) </span> no implique falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos
                    y/o servicios; y <br />
                    <span className="span">c) </span> encaja en el contexto del sitio de la parte vinculante.
                    <br /><br />
                    <span className="span">Podemos considerar y aprobar otras solicitudes de enlaces de los siguientes tipos de
                    organizaciones</span>
                    <br />
                    <span className="span point">•</span> fuentes de información de consumidores y/o empresas comúnmente conocidas;
                    <br />
                    <span className="span point">•</span> sitios de la comunidad .com;
                    <br />
                    <span className="span point">•</span> asociaciones u otros grupos que representan organizaciones benéficas;
                    <br />
                    <span className="span point">•</span> distribuidores de directorios en línea;
                    <br />
                    <span className="span point">•</span> portales de Internet;
                    <br />
                    <span className="span point">•</span> firmas de contabilidad, derecho y consultoría; y
                    <br />
                    <span className="span point">•</span> instituciones educativas y asociaciones comerciales.
                    <br /><br />
                    <span className="span">Aprobaremos las solicitudes de enlace de estas organizaciones si</span>
                    <br />
                    <span className="span">a) </span> el enlace no nos haría
                    vernos desfavorablemente a nosotros mismos ni a nuestras empresas acreditadas; 
                    <br />
                    <span className="span">b) </span> la
                    organización no tiene registros negativos con nosotros; 
                    <br />
                    <span className="span">c) </span> el beneficio para nosotros de la
                    visibilidad del hipervínculo compensa la ausencia de Pet&#39;s care; y 
                    <br />
                    <span className="span">d) </span> el enlace está en el
                    contexto de información general de recursos.
                    <br /><br />
                    <span className="span">Estas organizaciones pueden enlazar a nuestra página de inicio siempre que el enlace</span>
                    <br />
                    <span className="span">a) </span> no
                    sea engañoso de ninguna manera; 
                    <br />

                    <span className="span">b) </span> no implique falsamente patrocinio, respaldo o
                    aprobación de la parte vinculante y sus productos o servicios; y 
                    <br />

                    <span className="span">c) </span> encaja en el contexto del
                    sitio de la parte vinculante.
                    <br /><br />
                    Si eres una de las organizaciones enumeradas en el párrafo 2 y estás interesada en vincularte
                    a nuestro sitio web, debes informarnos enviando un correo electrónico a Pet&#39;s care. Incluye tu
                    nombre, el nombre de tu organización, la información de contacto, así como la URL de tu sitio,
                    una lista de las URL desde las que tienes la intención de vincular a nuestro sitio web y una lista
                    de las URL de nuestro sitio a las que te gustaría acceder. Espera 2-3 semanas para recibir una
                    respuesta.
                    <br /><br />
                    <span className="span">Las organizaciones aprobadas pueden hacer hipervínculos a nuestro sitio web de la siguiente
                    manera</span>
                    <br />
                    <span className="span point">•</span> Mediante el uso de nuestro nombre corporativo; o
                    <br />
                    <span className="span point">•</span> Mediante el uso del localizador uniforme de recursos al que se está vinculando; o
                    <br />
                    <span className="span point">•</span> Usar cualquier otra descripción de nuestro sitio web al que está vinculado que tenga
                    sentido dentro del contexto y formato del contenido en el sitio de la parte vinculante.
                    <br />
                    No se permitirá el uso del logotipo de Pet&#39;s care u otro material gráfico para vincular sin un
                    acuerdo de licencia de marca comercial.
                    <br /><br />
                    <span className="span">Responsabilidad del contenido</span>
                    <br />
                    No seremos responsables de ningún contenido que aparezca en tu sitio web. Aceptas
                    protegernos y defendernos contra todas las reclamaciones que se presenten en tu sitio web.
                    Ningún enlaces)  debe aparecer en ningún sitio web que pueda interpretarse como
                    difamatorio, obsceno o criminal, o que infrinja, de otra manera viole o defienda la infracción u
                    otra violación de los derechos de terceros.
                    <br /><br />
                    <span className="span">Reserva de derechos</span><br />
                    Nos reservamos el derecho de solicitar que elimines todos los enlaces o cualquier enlace en
                    particular a nuestro sitio web. Apruebas eliminar de inmediato todos los enlaces a nuestro
                    sitio web cuando se solicite. También nos reservamos el derecho de modificar estos términos
                    y condiciones y su política de enlaces en cualquier momento. Al vincular continuamente a
                    nuestro sitio web, aceptas estar vinculado y seguir estos términos y condiciones de
                    vinculación.
                    <br /><br />
                    <span className="span">Eliminación de enlaces de nuestro sitio web</span>
                    <br />
                    Si encuentras algún enlace en nuestro sitio que sea ofensivo por cualquier motivo, puedes
                    contactarnos e informarnos en cualquier momento. Consideraremos las solicitudes para
                    eliminar enlaces, pero no estamos obligados a hacerlo ni a responder directamente.
                    No nos aseguramos de que la información de este sitio web sea correcta. No garantizamos su
                    integridad o precisión, ni prometemos asegurarnos de que el sitio web permanezca disponible
                    o que el material en el sitio se mantenga actualizado.
                    <br /><br />
                    <span className="span">Exención de responsabilidad</span>
                    <br />
                    En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones,
                    garantías y condiciones relacionadas con nuestro sitio web y el uso de este. Nada en este
                    <br /><br />
                    <span className="span">Descargo de responsabilidad</span>
                    <br />
                    <span className="span point">•</span> limitará o excluirá nuestra responsabilidad o la tuya por muerte o lesiones personales;
                    <br />
                    <span className="span point">•</span> limitará o excluirá nuestra responsabilidad o la tuya por fraude o tergiversación
                    fraudulenta;
                    <br />
                    <span className="span point">•</span> limitará cualquiera de nuestras responsabilidades o las tuyas de cualquier manera que
                    no esté permitida por la ley aplicable; o
                    <br />
                    <span className="span point">•</span> excluirá cualquiera de nuestras responsabilidades o las tuyas que no puedan estar
                    excluidas según la ley aplicable.
                    <br />
                    <br />
                    <span className="span">Las limitaciones y prohibiciones de responsabilidad establecidas en esta sección y en otras
                    partes de este descargo de responsabilidad</span> 
                    <br /><br />
                    <span className="span">a) </span> están sujetas al párrafo anterior; y 
                    <br />
                    <span className="span">b) </span> regirá
                    todas las responsabilidades que surjan en virtud de la exención de responsabilidad, incluidas
                    las responsabilidades que surjan en el contrato, en agravio y por incumplimiento de la
                    obligación legal.
                    <br /><br />
                    Siempre que el sitio web y la información y los servicios en el sitio se proporcionen de forma
                    gratuita, no seremos responsables de ninguna pérdida o daño de cualquier naturaleza.
                </div>
                <button onClick={handleVolver} className='btnActualizarMascota'>Volver</button>
            </div>
        </div>
    )
}
