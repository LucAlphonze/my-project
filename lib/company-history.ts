export type CompanyMilestone = {
    year: string
    title: string
    description: string
}

export const companyMilestones: CompanyMilestone[] = [
    {
        year: '1974',
        title: 'Los orígenes',
        description:
            'Emiliano Juan Sanz da inicio a las actividades de transporte de combustibles para Shell CAPSA, operando como empresa unipersonal para abastecer estaciones de servicio en la ciudad de Córdoba.',
    },
    {
        year: '1976',
        title: 'Alianza operativa',
        description:
            'Se integra a una unión de empresas de transporte destinadas a cubrir la logística y el abastecimiento de YPF (Sociedad del Estado) en la ciudad y provincia de Córdoba.',
    },
    {
        year: '1996',
        title: 'Consolidación e identidad',
        description:
            'Nace Emiliano Sanz e Hijos S.A. A partir de esta etapa, la empresa afianza su relación comercial con YPF, incrementando de manera sostenida el volumen y alcance de sus servicios junto a las transformaciones históricas de la petrolera estatal.',
    },
]

export const companyFacts = [
    {
        value: '+50',
        label: 'años de experiencia en el sector logístico',
    },
    {
        value: '7.000 m²',
        label: 'de base operativa estratégica en Córdoba',
    },
    {
        value: '+50',
        label: 'camiones propios y subcontratados',
    },
]
