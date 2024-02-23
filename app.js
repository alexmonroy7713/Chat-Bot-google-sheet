const { GoogleSpreadsheet } = require('google-spreadsheet');
const fs = require('fs');
const RESPONSES_SHEET_ID = '1_E6XOkhaKA6PoUwau_whN41H4QrftXW2KsTz_hXvB-U'; //Aquí pondras el ID de tu hoja de Sheets
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
const CREDENTIALS = JSON.parse(fs.readFileSync('./credenciales.json'));
const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
    addAnswer,
} = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock');

/*                       Para añadir o eliminar alguna pregunta sigue los siguientes pasos:
1) ➡️ Crea el addAnswer
2) ➡️ Crea la variable del STATUS
3) ➡️ Añade el nombre de la columna de Sheets junto con su variable
                      */

















    const flowSecundario = addKeyword([]).addAnswer([
      '👋 ¡Gracias por hablar conmigo! Fue genial ayudarte. Si tienes más preguntas, regresa al menú principal. ¡Estoy aquí para ayudarte siempre! 😊🌟',
      '',
      'Para volver al menú principal, simplemente escribe "Hola", "Hello", "Hi" o "Alo". ¡Hasta pronto! 👋'
      ]);
    
    
    // Definir flujos de la universidad
    const flowDocumentos = addKeyword(['5', 'cinco', 'documentos']).addAnswer(
      'Puedes ver los documentos necesarios desde el siguiente link 🌐')
    .addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'
    
    ], null, null, [flowSecundario]);
    
    const flowCosMatricula = addKeyword(['4', 'cuatro','matricula']).addAnswer(
      'Puedes ver el costo de la matricula desde el siguiente link 🌐')
    .addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'
    
    
    ], null, null, [flowSecundario]);
    
    const flowLimSolicitud = addKeyword(['3', 'tres','limite']).addAnswer(
      'Puedes ver el liite de solicitud desde el siguiente link 🌐')
    .addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'
    
    ], null, null, [flowSecundario]);
    
    const flowProSolicitud = addKeyword(['2', 'dos', 'solicitud'])
    .addAnswer('Puedes hacer tu proceso de solicitud desde el siguiente link 🌐')
    .addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'
    
    ], null, null, [flowSecundario]);
    
    const flowRequisitos = addKeyword(['1', 'uno', 'requisitos'])
    
    .addAnswer(
      'Puedes ver los requisitos desde el siguiente link 🌐')
    .addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'
    
    ], null, null, [flowSecundario]);
    //inica flujo de administracion
    const flowAdmision = addKeyword(['1', 'uno',]).addAnswer([
      '🙌 Perfecto. Aquí tienes algunas opciones dentro del menú de Admisión:',
      '1️⃣ Requisitos de Admisión',
      '2️⃣ Proceso de Solicitud',
      '3️⃣ Fechas Límite de Solicitud',
      '4️⃣ Costos de Matrícula',
      '5️⃣ Documentos Necesarios',
    
    ], null, null, [flowRequisitos,flowProSolicitud, flowLimSolicitud, flowCosMatricula, flowDocumentos]);
    
    
    const flowRobotica = addKeyword(['1', 'uno']).addAnswer(
      'Puedes ver los detalles de la carrera desde el siguiente link 🌐')
    .addAnswer(['Enlace Ingeniería en Robótica Computacional : 📄',
    'https://upsrj.edu.mx/ingenieria-en-robotica-computacional/ 📎'
    ], null, null, [flowSecundario]);
    
    const flowTerapia = addKeyword(['2', 'dos']).addAnswer(
      'Puedes ver los detalles de la carrera desde el siguiente link 🌐')
    .addAnswer(['Enlace Licenciatura en Terapia Física: 📄',
    'https://upsrj.edu.mx/terapia-fisica-2/ 📎'
    ], null, null, [flowSecundario]);
    
    const flowSoftware = addKeyword(['3', 'tres']).addAnswer(
      'Puedes ver los detalles de la carrera desde el siguiente link 🌐')
    .addAnswer(['Enlace Ingeniería en Software: 📄',
    'https://upsrj.edu.mx/ingenieria-en-software/ 📎',
    ], null, null, [flowSecundario]);
    
    const flowMetrologia = addKeyword(['4', 'cuatro'])
    .addAnswer(
      'Puedes ver los detalles de la carrera desde el siguiente link 🌐')
    .addAnswer(['Enlace Ingeniería en Metrología Industrial: 📄',
    'https://upsrj.edu.mx/metrologia-industrial/ 📎'
    ], null, null, [flowSecundario]);
    
    const flowAutomotriz = addKeyword(['5', 'CInco'])
    
    .addAnswer(
      'Puedes ver los detalles de la carrera desde el siguiente link 🌐')
    .addAnswer(['Enlace Ingeniería en Sistemas Automotrices: 📄',
    'https://upsrj.edu.mx/sistemas-automotrices/ 📎'
    ], null, null, [flowSecundario]);
    
    const flowAnimacion = addKeyword(['6', 'seis'])
    .addAnswer(
      'Puedes ver los detalles de la carrera desde el siguiente link 🌐')
    .addAnswer(['Enlace Ingeniería en Animación y Efectos Visuales: 📄',
    'https://upsrj.edu.mx/animacion-y-efectos-visuales/ 📎'
    ], null, null, [flowSecundario]);
    
    //Licenciaturas
    const flowLicenciaturas = addKeyword(['1', 'uno', 'licenciaturas','regresar', ]).addAnswer([
      '🙌 Perfecto. Aquí tienes las opciones dentro del menú de las ingenieras y licenciatura:',
    '1️⃣ Ingeniería en Robótica Computacional 🤖💻',
    '2️⃣ Licenciatura en Terapia Física 💪👩‍⚕️',
    '3️⃣ Ingeniería en Software 💻👨‍💻',
    '4️⃣ Ingeniería en Metrología Industrial 🔧📏🏭',
    '5️⃣ Ingeniería en Sistemas Automotrices 🚗🔧',
    '6️⃣ Ingeniería en Animación y Efectos Visuales 🎬🎨🚀',
    ], null, null, [flowRobotica,flowTerapia,flowSoftware,flowMetrologia,flowAutomotriz,flowAnimacion]);
    
    const flowMasCalidad = addKeyword(['2', 'dos']).addAnswer(
      'Puedes ver los detalles de la Maestria desde el siguiente link 🌐')
    .addAnswer(['Enlace Maestría en Calidad y Metrología Industrial: 📄',
    'https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias-2/ 📎'
      
    ], null, null, [flowSecundario]);
    
    const flowMasEnseñanza = addKeyword(['1', 'uno']).addAnswer(
      'Puedes ver los detalles de la Maestria desde el siguiente link 🌐')
    .addAnswer(['Enlace Maestría en Enseñanza de las Ciencias: 📄',
    'https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias/📎'
      
    ], null, null, [flowSecundario]);
    //maestrias
    const flowMaestrias = addKeyword(['2', 'dos','maestrias']).addAnswer([
      '🙌 Perfecto. Aquí tienes las opciones dentro del menú de Mestrías:',
    '1️⃣ Maestría en Enseñanza de las Ciencias 🎓🔬',
    '2️⃣ Maestría en Calidad y Metrología Industrial 🎓🔧📏',
    ], null, null, [flowMasEnseñanza, flowMasCalidad]);
    //inicia el flujo de carreas
    const flowProgramasAcademicos = addKeyword(['2', 'dos']).addAnswer([
      '🙌 Perfecto. Aquí tienes algunas opciones dentro del menú de Programas Académicos:',
      '1️⃣ ingenierias y licenciatura',
      '2️⃣ Maestrías 🎓📚',
      
    ], null, null, [flowLicenciaturas, flowMaestrias]);
    
    
    const flowBecaExcelencia= addKeyword(['1', '2',]).addAnswer([
      'Beca Excelencia 🎗️',
      '',
      'Se otorga para distinguir a los alumnos que hayan alcanzado los mejores promedios de calificaciones en el cuatrimestre inmediato anterior. Esta beca comprende la condonación hasta del 100% del monto correspondiente al pago de la cuota de reinscripción. Superior o igual a 9.5 deberá ser el promedio inmediato anterior.🦉',
      '',
      'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
      'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
      
    ], null, null, [flowSecundario]);
    const flowBecaAcademica= addKeyword(['2', 'dos',]).addAnswer([
      'Beca Academica 📚',
      '',
      'Esta beca comprende la condonación hasta de un 80% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que hayan conservado un promedio comprendido en el intervalo de 8.5 a 9.4',
      '',
      'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
      'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
    
      
      
    ], null, null, [flowSecundario]);
    const flowBecaExtension= addKeyword(['3', 'tres',]).addAnswer([
      'Beca Extension 🏋️‍♂️🎭',
      '',
      'Se otorga a los alumnos regulares que tengan una participación deportiva y/o cultural relevante en equipo o grupos representativos de la Universidad, o estén inscritos en algún programa de Cultura Verde (sustentabilidad) participando en eventos locales, estatales, regionales, nacionales o internacionales. Esta beca comprende la condonación hasta el 90% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que hayan manteniendo un promedio mínimo de 8.0.',
      '',
      'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐', 
      'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
    
      
      
    ], null, null, [flowSecundario]);
    
    const flowBecaApoyoEconómico= addKeyword(['4', 'cuatro',]).addAnswer([
      'Beca Apoyo Economico 💰',
      '',
      'Esta beca comprende la condonación de hasta un 70% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que demuestren no contar con recursos económicos suficientes para continuar sus estudios y conservan un promedio mínimo de 8.0.',
      '',
      'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
      'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
    
      
      
    ], null, null, [flowSecundario]);
    const flowBecaEspecial= addKeyword(['5', 'cinco',]).addAnswer([
      'Beca Especial 🌟',
      '',
      'Esta beca comprende la condonación de un porcentaje de la cuota de reinscripción definido. Se otorga a los alumnos regulares bajo las siguientes características:',
      '',
      'Que acrediten una condición de vulnerabilidad (madres solteras, indígenas u otras).',
      'Alumnos de la Licenciatura en Terapia Física que realizan su periodo de Servicio Social en modalidad CIFRHS o en otra institución, en este caso los alumnos estarán exentos de realizar servicio becario por el Consejo de Calidad de la UPSRJ.',
      '',
      'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
      'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
      
    ], null, null, [flowSecundario]);
    
    const flowBecasEstudiantes = addKeyword(['3', 'tres']).addAnswer([
      '🏫 ¡Becas disponibles en la Universidad Politécnica de Santa Rosa! 🎓',
      '',
      'Modalidades de beca:',
    
      '1️⃣ Beca Excelencia 🏆',
      '2️⃣ Beca Académica 📚',
      '3️⃣ Beca Extensión 🏋️‍♂️🎭n',
      '4️⃣ Beca Apoyo Económico 💰',
      '5️⃣ Beca Especial 🌟',
      '',
      
      '¡Estamos aquí para ayudarte en tu camino educativo! 🌟',
    ], null, null, [flowBecaExcelencia,flowBecaAcademica, flowBecaEspecial,flowBecaApoyoEconómico,flowBecaExtension]);
    
    // Definir flujo de Denisse
    const flowDenisse = addKeyword(['2008mt']).addAnswer([
      'Te quiero mucho, este proyecto es para ti.',
      'Me sacas canas verdes, pero siempre te voy a querer',
      'Porque eres mi mayor orgullo.',
    ], null, null, [flowSecundario]);
    
    // Definir flujo de la universidad
    const flowUniversidad = addKeyword(['1', 'uno']).addAnswer([
     '📚 ¡Hola! ¡Bienvenido/a a los servicios escolares de la Universidad Politécnica de Santa Rosa Jauregui (UPSRJ)!',
    '¿En qué puedo ayudarte hoy? 😊',
    '1️⃣ Admisión 👉🎓',
    '2️⃣ Programas Académicos 📘',
    '3️⃣ Becas a estudiantes 🎓💼',
    
    ], null, null, [flowAdmision, flowProgramasAcademicos, flowBecasEstudiantes]);
    
    // Resto del código...
    
    //Codigo para la clinica de fisioterapia
    
    
    // Flujo Clionica de Fisioterapia
    
    const flowUbicacion = addKeyword(['1', 'uno'])
    .addAnswer([
      '🏢 La clínica está ubicada en https://goo.gl/maps/ZGTYY79t7Nn2Foxi7 ',
      '⚠️ OJO, los horarios del link son de la universidad, no de la clinica🗓️❌',
      ' ',
      '🕐 Nuestros horarios de atención son de lunes a viernes de 8:00 a 14:00 horas.🗓️ ',
    ], null, null, [flowSecundario]);
    
    
    const flowUbicacionUsuarioNuevo = addKeyword([])
    .addAnswer([
      '🏢 La clínica está ubicada en https://goo.gl/maps/ZGTYY79t7Nn2Foxi7 ',
      '⚠️ OJO, los horarios del link son de la universidad, no de la clinica🗓️❌',
      ' ',
      '🕐 Nuestros horarios de atención son de lunes a viernes de 8:00 a 14:00 horas.🗓️ ',
    ], null, null, [flowSecundario]);
    // Flujo Proceso de Tratamiento
    
    const flowContacto = addKeyword(['4', 'cuatro', 'contacto', 'Contacto', 'CONTACTO' , 'Contacto'])
    .addAnswer([
    
    "Para agendar una cita puedes hacerlo de las siguientes maneras: 🌐🗓️",
    " ",
    "1️⃣ Llamando al número de teléfono: 📞 [número de teléfono] ☎️",
    "2️⃣ Enviando un correo electrónico a: 📧 [correo electrónico] 📩",
    "3️⃣ Enviando un mensaje de WhatsApp al número: 📱 [número de teléfono] 📲",
    " ",
    "¿Continuamos?, envia la palabra 'ubicacion' o un 'si' para saber la ubicacion 📝",
    ], null, null, [flowUbicacionUsuarioNuevo]);
    
    const flowCostos = addKeyword([])
    .addAnswer([
      '🏥 Nuestros costos son los siguientes: 💰',
      ' ',
      '📝Valoración inicial: ¡Para personas nuevas en nuestra clínica! Solo por 85 pesos. Durante esta valoración, nuestros fisioterapeutas te evaluarán detalladamente y diseñarán un plan de tratamiento personalizado. 📋🩺',
      ' ',
      '📋Sesión fisioterapéutica: Después de la valoración, nuestras sesiones regulares tienen un costo de solo 35 pesos. Recibirás tratamientos especiales, terapias manuales, ejercicios y estiramientos para mejorar tu bienestar. 💆‍♂️💪',
      ' ',
      '📋¿Le gustaria tener el contacto?, envie la palabra "Contacto"😌',
    ], null, null, [flowContacto, flowSecundario]);
    
    
    const flowServicios = addKeyword(['2', 'dos', 'servicios', 'Servicios', 'SERVICIOS'])
    .addAnswer([
      '🏥 Nuestros servicios incluyen:🚑💕',
      ' ',
      '🔍 Evaluación personalizada',
      '💪 Terapia de rehabilitación',
      '😌 Masajes terapéuticos',
      '🏋️‍♀️ Ejercicios y estiramientos guiados ',
      '🩹 Tratamiento de dolores crónicos',
      '🚶‍♂️ Prevención de lesiones',
      ' ',
      '👩‍⚕️ 🏃‍♂️💫 Ven y descubre cómo podemos mejorar tu bienestar. 😊🏥',
      ' ',
      '👉 Envia la palabra "costos" o "continuar" para informate sobre costos 📝👈',
    ], null, null, [flowCostos]);
    
    const flowRequerimientos = addKeyword([])
    .addAnswer([
    
      '🏥 Proceso de Preparación para tu Cita de Fisioterapia 🚶‍♂️💼',
      ' ',
      '✅ Llegar a tiempo! ⌚📝',
      ' ',
      '✅ Vestimenta adecuada: Usa ropa cómoda que te permita moverte fácilmente. ¡Podrías necesitar exponer ciertas áreas del cuerpo durante el tratamiento! 👕👖💆‍♀️',
      ' ',
      '✅ Traer informes médicos: Si tienes informes, radiografías o documentos relevantes sobre tu condición, tráelos contigo para que los revise el fisioterapeuta. 📋🔬',
      ' ',
      '✅ Comunicar tus necesidades: ¡No dudes en hablar con el fisioterapeuta sobre tus preocupaciones! Es esencial para adaptar el tratamiento a tus necesidades. 💬💁‍♂️',
      ' ',
      '✅ Hidratación🚰💧',
      ' ',
      '✅ Comer ligero: ¡Evita comidas pesadas justo antes de la sesión! 🍽️🥗',
      ' ',
      '✅ Realizar ejercicios en casa: Si te asignan ejercicios para hacer en casa, asegúrate de seguir las instrucciones y hacerlos constantemente. 🏡🏋️‍♀️',
      ' ',
      '✅ Sigue las recomendaciones: Si te dan recomendaciones sobre cuidados posteriores, ¡síguelas para obtener mejores resultados! 📝✅',
      ' ',
      '👉 Envia "servicios" para saber de los procesos de tratamiento 📝👈',
    ], null, null, [flowServicios]);
    
    
    const flowProcesoTratamientoEspecifico = addKeyword(['1','uno', 'si', 'Si', 'SI', 'sí', 'Sí', 'SÍ', '1', 'uno'])
    .addAnswer([
    
      'Proceso de Rehabilitación Personalizado: 💪🏥',
      ' ',
      'Paso 1: Evaluación Detallada 📋🩺',
      '- Nuestro equipo evaluará tu condición y necesidades para diseñar un plan de tratamiento personalizado.',
      ' ',
      'Paso 2: Plan de Tratamiento Único 💡📝',
      '- Crearemos un plan adaptado a ti, considerando tu condición física, gravedad de la lesión, edad y otros factores de salud.',
      ' ',
      'Paso 3: Monitoreo y Ajustes 🔄👀',
      '- Estaremos atentos a tu progreso y haremos ajustes en el tratamiento según sea necesario.',
      ' ',
      'Paso 4: Apoyo Constante 🤗💬',
      '- Estamos aquí para responder tus preguntas y brindarte apoyo en todo momento.',
      ' ',
      'Nuestro objetivo es ayudarte a alcanzar tus metas de bienestar y mejorar tu calidad de vida.😊🏥💪 ',
      ' ',
      '👉 Envia "Continuar" para saber de los requerimientos previos a las citas📝👈',
    
    ], null, null, [flowRequerimientos]);
    
    const flowProcesoTratamiento = addKeyword(['3', 'tres', 'tratamiento', 'Tratamiento', 'TRATAMIENTO'])
    .addAnswer([
      '🏋️‍♂️ La duración promedio de una sesión de terapia es de 1 hora. La cantidad de sesiones necesarias puede variar según el tratamiento y la condición del paciente. Nuestros fisioterapeutas evaluarán tu situación y te darán una recomendación específica.',
      ' ',
      '👉 ¿Te gustaria saber mas sobre los procesos de tratamiento?📝👈',
      ' ',
      '1️⃣ Si',
      '2️⃣ No, quiero saber sobre los requisitos previos a la cita', 
      ' ',
      '👉 Recuerda puedes enviar el numero o la palabra 📝👈',
    ], null, null, [flowProcesoTratamientoEspecifico, flowRequerimientos]);
    
    
    
    const flowUsuarioReal = addKeyword(['1', 'uno'])
    .addAnswer([
      '¿En qué puedo ayudarte hoy?👩🏽‍💻',
      ' ',
      '1️⃣ Ubicación y Horarios',
      '2️⃣ Servicios y Costos',
      '3️⃣ Proceso de Tratamiento y Requerimientos',
      '4️⃣ Contacto',
      '5️⃣ Cierre de la conversación',
    
    ], null, null, [flowUbicacion, flowServicios, flowProcesoTratamiento, flowContacto, flowSecundario]);
    // Flujo Servicios y Costos
    
    
    const FlowPapelDelaFisioterapia = addKeyword([])
    .addAnswer([
      '🏥 👩‍⚕️ El papel del fisioterapeuta 👨‍⚕️',
    
      'El fisioterapeuta es como un detective de la salud 🕵️‍♂️ este diseña el mejor plan de tratamiento para ti.',
      'que nos ayudan en : ',
      ' ',
      '1️⃣ Alivio del dolor: reduce el dolor crónico y agudo a través de terapias y ejercicios específicos. 💆‍♂️💊🌟',
      '',
      '2️⃣ Recuperación de lesiones rehabilitación y recuperación después de una lesión o cirugía. 🏥💪💼',
      '',
      '3️⃣ Mejora de la movilidad:  aumenta la flexibilidad, fuerza y rango de movimiento de las articulaciones y músculos. 🚶‍♀️💪🤸‍♂️',
      '',
      '4️⃣ Prevención de lesiones: consejos y ejercicios para evitar futuras lesiones y mejorar el rendimiento físico. 🛡️🏋️‍♀️💡',
      '',
      '5️⃣ Promoción de la salud:  mejorar la salud y el bienesta de las personas. 🌟💚😊',
      '',
      '👉 Envia "tratamiento" , para continuar 📝👈'
    ], null, null, [flowProcesoTratamiento, flowSecundario]);
    
    const flowUsuarioPotencial = addKeyword(['2', 'dos'])
    .addAnswer([
      '🏥Hola soy Denisse de nuevo👩🏽‍💻📚, solo para decirte que seras guiada/o por un proceso informativo📝👈',
      ' ',
      '👉 Y tendras que enviar la palabra que se te indique o de lo contrario intuire que ya quieres terminarlo',
      ' ',
      '👉 Envia "Continuar"  📝👈',
    ], null, null, [FlowPapelDelaFisioterapia]);
    
    const flowRservar = addKeyword(['4','Reservar','reservar']).addAnswer([
      '👋 ¡Perfecto,para continuar Escribe "SI"',
      '',
      
      ]);
  
    
    // Flujo Principal de la Clínica
    const flowClinica = addKeyword(['2', 'dos', 'segunda', 'clinica', 'fisioterapia'])
    .addAnswer('🙋🏽‍♀️ ¡Hola! Bienvenido/a a la clinica.')
    .addAnswer([
      '🏥 ¿Eres paciente de la clínica?',
      ' ',
      '1️⃣ Por supuesto, ya soy paciente',
      '2️⃣ No soy paciente, pero me gustaría serlo',
      '4️⃣Reservar citas',
    
      ' ',
      '👉 Recuerda que para seleccionar una opción, solo debes escribir el número correspondiente. 📝👈'
    ], null, null, [flowRservar,flowUsuarioReal, flowUsuarioPotencial,flowSecundario]);
    // Resto del código...
    // Definir flujo principal
    const flowPrincipal = addKeyword(['hola', 'hello', 'hi', 'ole', 'alo'])
    .addAnswer('🙋🏽‍♀️ ¡Hola! Soy Denisse, tu asistente virtual👩🏽‍💻📚')
    .addAnswer([
      '¡🌐🎓 Bienvenido/a a la universidad politécnica de santa rosa jauregui!',
      '¿En qué puedo ayudarle hoy?',
      ' ',
      '1️⃣ Información sobre la universidad 🏢',
      '2️⃣ Clínica de fisioterapia 🏥',
      '3️⃣ Por ahora no necesito nada ❌',
    ], null, null, [flowUniversidad, flowDenisse, flowClinica, flowSecundario]);
    let STATUS = {}



    const flowReservarCita = addKeyword('SI','SI','si ').addAnswer('Gracias,Bienvinidos ala Agencia de la clinica y gracias  por elegirnos! Para poder agendar tu cita , necesitamos algunos datos')
    .addAnswer(
      'Dime tu sexo',
      {capture:true},
      async (ctx,{flowDynamic}) =>{
    
    telefono = ctx.from
    sexo = STATUS[telefono] = {...STATUS[telefono], sexo : ctx.body}                //➡️ Variable del STATUS
    telefono = STATUS[telefono] = {...STATUS[telefono], telefono : ctx.from}        // Variable del STATUS
                                                                                  // Ejemplo // NOMBRE VARIABLE = TATUS[telefono], NOMBRE VARIABLE : ctx.body
    
    
    
    
    flowDynamic()
    })
    
    .addAnswer(
    'Dime tu nombre',
    {capture:true},
    async (ctx,{flowDynamic}) =>{
       
    telefono = ctx.from
    nombre = STATUS[telefono] = {...STATUS[telefono], nombre : ctx.body}
    
    
    flowDynamic()
    })
    
    .addAnswer(
    'Dime tus apellidos',
    {capture:true},
    async (ctx,{flowDynamic}) =>{
    
    
    telefono = ctx.from
    apellidos = STATUS[telefono] = {...STATUS[telefono], apellidos : ctx.body}      //Variable del STATUS
    console.log(STATUS[telefono].sexo)
    flowDynamic()
    })
    .addAnswer('¿Qué edad tienes?',
    {capture:true},
    async (ctx,{flowDynamic}) =>{
    
    
        telefono = ctx.from
        edad = STATUS[telefono] = {...STATUS[telefono], edad : ctx.body}            //Variable del STATUS
    
    
    
    
    /////////////////////       ESTA FUNCION AÑADE UNA FILA A SHEETS    /////////////////////////
       ingresarDatos();  
       async function ingresarDatos(){
        console.log(STATUS[telefono].sexo)
        let rows = [{
       // Ejemplo: // CABECERA DE SHEET : VARIABLE        //                             ➡️   Paso 3 - Aquí añades las variables creadas
       
        Sexo: STATUS[telefono].sexo,    
        Nombre: STATUS[telefono].nombre,
        Apellidos: STATUS[telefono].apellidos,
        Telefono: STATUS[telefono].telefono,
        Edad: STATUS[telefono].edad
       
            }];
       
    
    
        await doc.useServiceAccountAuth({
              client_email: CREDENTIALS.client_email,
              private_key: CREDENTIALS.private_key
          });
          await doc.loadInfo();
          let sheet = doc.sheetsByIndex[0];
          for (let index = 0; index < rows.length; index++) {
              const row = rows[index];
              await sheet.addRow(row);}
    }
    
    
    
    
    
    await flowDynamic ([{body:`Perfecto ${STATUS[telefono].nombre}, espero que te haya parecido sencillo el formulario 😁`}])
    
    await flowDynamic ([{body:`Perfecto , puedes concultar tus datos escribiendo "Consultar Datos"😁`}])
    
    
    
    
    
    
    
    
    });
    
    
    
    
    //////////////////////////// FLUJO PARA CONSULTAR DATOS /////////////////////////////////////////////////////////
    
    
    
    
    const flowConsultar = addKeyword('Consultar mis datos','🔍 Consultar mis datos 🔍')
    .addAnswer(['Dame unos segundo, estoy buscando tus datos dentro del sistema... 🔍'])
    .addAnswer(['Según el teléfono del cuál me estas escribiendo, tengo estos datos:'],{delay:3000}, async (ctx, {flowDynamic}) =>{
    telefono = ctx.from
    
    
    
    
    const consultar = await consultarDatos(telefono)
    
    
    
    
    const Sexo = consultados['Sexo']                        // AQUI DECLARAMOS LAS VARIABLES CON LOS DATOS QUE NOS TRAEMOS DE LA FUNCION         VVVVVVVVV
    const Nombre = consultados['Nombre']
    const Apellidos = consultados['Apellidos']
    const Telefono = consultados['Telefono']
    const Edad = consultados['Edad']
    
    
    
    
    await flowDynamic(`- *Sexo*: ${Sexo}\n- *Nombre*: ${Nombre}\n- *Apellidos*: ${Apellidos}\n- *Telefono*: ${Telefono}\n- *Edad*: ${Edad}`)
    
    
    
    
    
    
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    /////////////////////       ESTA FUNCION CONSULTA LOS DATOS DE UNA FILA !SEGÚN EL TELÉFONO!    /////////////////////////
    
    
    
    
    
    
    
    
       async function consultarDatos(telefono){
        await doc.useServiceAccountAuth({
            client_email: CREDENTIALS.client_email,
            private_key: CREDENTIALS.private_key
        });
        await doc.loadInfo();
        let sheet = doc.sheetsByTitle['Chatboot-ss'];                        // AQUÍ DEBES PONER EL NOMBRE DE TU HOJA
       
       
       
        consultados = [];
    
    
    
    
        let rows = await sheet.getRows();
        for (let index = 0; index < rows.length; index++) {
            const row = rows[index];
            if (row.Telefono === telefono) {
               
                consultados['Sexo'] = row.Sexo                      // AQUÍ LE PEDIMOS A LA FUNCION QUE CONSULTE LOS DATOS QUE QUEREMOS CONSULTAR EJEMPLO:
                consultados['Nombre'] = row.Nombre        
                consultados['Apellidos'] = row.Apellidos                  // consultados['EL NOMBRE QUE QUIERAS'] = row.NOMBRE DE LA COLUMNA DE SHEET
                consultados['Telefono'] = row.Telefono
                consultados['Edad'] = row.Edad
    
    
    
    
            }
               
    }
               
    return consultados
    
    
    
    
    };
       
    const main = async () => {
      const adapterDB = new MockAdapter();
      const adapterFlow = createFlow([flowPrincipal,flowReservarCita]);
      const adapterProvider = createProvider(BaileysProvider);
  
      createBot({
          flow: adapterFlow,
          provider: adapterProvider,
          database: adapterDB,
      });








    QRPortalWeb()
}








main()
