import { ResearchInfo } from '../types';

export const researchData: ResearchInfo = {
  title: "Investigación en Ciencias del Comportamiento & Modelamiento Bayesiano",
  subtitle: "Estudio experimental de la toma de decisiones, sesgo por el presente y preferencias intertemporales",
  overview: "Mi trabajo de investigación en la UNAM integra la psicología experimental, la economía conductual y el análisis estadístico computacional. Me enfoco en comprender cómo los individuos eligen entre recompensas inmediatas y diferidas a lo largo del tiempo, evaluando la consistencia temporal, el sesgo por el presente y la curvatura de la utilidad individual mediante la tarea Convex Time Budget (CTB).",
  keyTopics: [
    "Preferencias Intertemporales & Descuento Temporal",
    "Tarea Convex Time Budget (CTB)",
    "Modelo de Descuento Exponencial vs. Cuasihiperbólico (Beta-Delta)",
    "Función de Utilidad CRRA (Aversión Relativa al Riesgo Constante)",
    "Efecto de Magnitud en la Tasa de Descuento",
    "Inferencia Bayesiana Jerárquica mediante Cadenas MCMC (JAGS / R)"
  ],
  workflow: [
    {
      stepNumber: 1,
      title: "Pregunta de Investigación",
      subtitle: "Formulación del Fenómeno Conductual",
      description: "Identificación de inconsistencias temporales en la elección, tales como el sesgo por el presente (preferencia desproporcionada por gratificación inmediata) y la moderación según la magnitud de las recompensas.",
      tools: ["Revisión de Literatura", "Economía Conductual", "Psicología Cognitiva"]
    },
    {
      stepNumber: 2,
      title: "Diseño Experimental",
      subtitle: "Tarea Convex Time Budget (CTB)",
      description: "Estructuración de tareas de decisión continua donde el participante asigna un presupuesto monetario o de recursos entre dos fechas (t y t+k) bajo diferentes tasas de interés marginales implícitas.",
      tools: ["R Shiny", "Diseño Intra/Inter Sujeto", "Aleatorización de Estímulos"]
    },
    {
      stepNumber: 3,
      title: "Obtención de Datos",
      subtitle: "Captura & Validación Conductual",
      description: "Registro de las decisiones presupuestarias individuales bajo distintas combinaciones de montos, horizontes de tiempo (t) y plazos de entrega (k), asegurando controles de atención e integridad.",
      tools: ["R", "Limpieza de Datos", "Tratamiento de Restricciones"]
    },
    {
      stepNumber: 4,
      title: "Modelamiento Estadístico",
      subtitle: "Inferencia Jerárquica Bayesiana",
      description: "Estimación bayesiana simultánea de distribuciones posteriores para los parámetros individuales y poblacionales (impaciencia δ, sesgo β, curvatura α) mediante muestreo MCMC en JAGS.",
      tools: ["R2jags", "rjags", "JAGS", "MCMC Chains", "Prior Specs"]
    },
    {
      stepNumber: 5,
      title: "Análisis e Interpretación",
      subtitle: "Diagnósticos de Convergencia & WAIC",
      description: "Evaluación de la convergencia con R-hat, comparación de ajuste entre modelos exponenciales y cuasihiperbólicos usando WAIC/LOO, y extracción de implicaciones psicológicas.",
      tools: ["Diagnósticos Gelman-Rubin", "WAIC", "LOO-CV", "Posterior Plots"]
    }
  ],
  models: [
    {
      name: "Modelo Cuasihiperbólico (Beta-Delta)",
      type: "Descuento Temporal",
      description: "Capta la inconsistencia temporal permitiendo un descuento abrupto para recompensas inmediatas (β < 1) y un descuento exponencial estándar (δ) para recompensas futuras.",
      formulaOrConcept: "U(x_t, x_{t+k}) = u(x_t) + β * δ^k * u(x_{t+k})",
      applications: ["Detección de impaciencia presente", "Evaluación de procrastinación y autocontrol"]
    },
    {
      name: "Función de Utilidad CRRA",
      type: "Estructura de Preferencia",
      description: "Modela la curvatura de la utilidad individual mediante la tasa de aversión relativa al riesgo constante (α), indispensable para separar el descuento temporal de la sensibilidad marginal.",
      formulaOrConcept: "u(x) = (x^(1-α) - 1) / (1-α)",
      applications: ["Separación entre curvatura de utilidad y tasa de descuento", "Análisis de decisiones con CTB"]
    },
    {
      name: "Efecto de Magnitud",
      type: "Fenómeno Conductual",
      description: "Fenómeno por el cual los individuos muestran menor tasa de descuento (mayor paciencia) cuando evalúan recompensas de magnitudes financieras elevadas comparado con sumas pequeñas.",
      formulaOrConcept: "Tasa de Descuento r(S) = f(S) con ∂r/∂S < 0",
      applications: ["Calibración de experimentos de elección", "Modelos de asignación intertemporal"]
    },
    {
      name: "Modelos Jerárquicos Bayesianos",
      type: "Estrategia de Estimación",
      description: "Estructura de multinivel que combina información de todos los participantes (hiperparámetros) para estabilizar la estimación individual, especialmente útil con muestras de tamaño moderado.",
      formulaOrConcept: "θ_i ~ Normal(μ_pop, σ_pop^2)",
      applications: ["Inferencia MCMC", "Población + variabilidad individual"]
    }
  ]
};
