export type Project = {
  id: number
  title: string
  subtitle: string
  category: string
  techOverview: string
  myRole: string
  image: string
  imageAlt: string
  externalLink: string
  externalLinkLabel: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Amazon Sequoia',
    subtitle: 'Next-Gen Storage & Retrieval System',
    category: 'Amazon Robotics · 2023–Present',
    techOverview:
      'Sequoia is Amazon\'s next-generation automated storage and retrieval ecosystem — consolidating inventory into totes, moving them via mobile robots and gantry systems, and integrating robotic arms like Sparrow for picking. It reduces inventory identification time by 75% and order processing time by 25% at the most automated sites.',
    myRole:
      'As NPI TPM, I owned Sequoia\'s product development and beta-exit readiness — driving the system from early alpha to a scaled solution supporting thousands of robotic deployments annually across Amazon\'s global fulfillment network, coordinating hardware, software, operations, and supply chain stakeholders.',
    image: '/images/sequoia.jpg',
    imageAlt: 'Amazon Sequoia automated storage and retrieval system with blue totes and gantry',
    externalLink: 'https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center',
    externalLinkLabel: 'About Amazon',
  },
  {
    id: 2,
    title: 'Amazon Hercules',
    subtitle: 'Autonomous Drive Unit · Pod Movement',
    category: 'Amazon Robotics · 2023–Present',
    techOverview:
      'Hercules is Amazon\'s core autonomous drive unit — it lifts and navigates inventory pods throughout fulfillment centers, replacing associate walking with high-density, robot-driven storage. Part of a fleet of over one million robots operating across Amazon\'s network.',
    myRole:
      'Across Hercules and Titan-supported systems, I have overseen the deployment of more than 45,000 drive units — managing capacity planning, site readiness, large-scale rollouts, and reliability improvements based on production feedback.',
    image: '/images/hercules.jpg',
    imageAlt: 'Amazon Hercules drive units navigating inventory pod field',
    externalLink: 'https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center',
    externalLinkLabel: 'About Amazon',
  },
  {
    id: 3,
    title: 'Amazon Titan',
    subtitle: 'Heavy-Duty Drive Unit · 2,500 lb Capacity',
    category: 'Amazon Robotics · 2023–Present',
    techOverview:
      'Titan is Amazon\'s heavy-duty autonomous drive unit, capable of lifting up to 2,500 lbs — roughly twice the capacity of prior drives. Designed for bulkier, heavier inventory in highly automated next-generation fulfillment centers.',
    myRole:
      'I introduced Titan into beta as a scaled deployment within Amazon\'s fulfillment network, leading site readiness, coordinating supply chain and engineering teams, and establishing the operational playbook for production rollout across multiple facilities.',
    image: '/images/titan.jpg',
    imageAlt: 'Amazon Titan heavy-duty drive unit on fulfillment center floor',
    externalLink: 'https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center',
    externalLinkLabel: 'About Amazon',
  },
  {
    id: 4,
    title: 'Amazon Sparrow',
    subtitle: 'AI-Powered Item Picking · Tote Handling',
    category: 'Amazon Robotics · 2023–Present',
    techOverview:
      'Sparrow is Amazon\'s robotic arm designed to pick individual items from totes within the Sequoia system — using computer vision and AI to identify, grasp, and route items across a wide range of product types.',
    myRole:
      'As NPI TPM on the Sequoia ecosystem, I drove Sparrow\'s integration into the broader ToteASRS deployment — coordinating hardware readiness, validating performance in production environments, and managing the system dependencies that gate scaled rollout.',
    image: '/images/sparrow.jpg',
    imageAlt: 'Amazon Sparrow robotic arm picking items from blue totes',
    externalLink: 'https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center',
    externalLinkLabel: 'About Amazon',
  },
  {
    id: 5,
    title: 'Amazon Robin',
    subtitle: 'Conveyor Robotic Arm · Package Routing',
    category: 'Amazon Robotics · 2022–2023',
    techOverview:
      'Robin is Amazon\'s robotic arm system deployed at conveyor lines throughout fulfillment centers — automating the handling and routing of packages to reduce manual touchpoints and improve throughput at scale.',
    myRole:
      'I led the deployment of 2,000+ Robin stations across Amazon fulfillment centers — owning the execution strategy, site readiness, and cross-functional coordination that drove Robin from early rollout to a scaled presence in the North American network.',
    image: '/images/robin.jpg',
    imageAlt: 'Amazon Robin robotic arm handling packages on conveyor line',
    externalLink: 'https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center',
    externalLinkLabel: 'About Amazon',
  },
  {
    id: 6,
    title: 'Amazon Cardinal',
    subtitle: 'AI Package Handling · Outbound Dock',
    category: 'Amazon Robotics · 2022–2023',
    techOverview:
      'Cardinal is an AI-driven robotic arm that uses computer vision to pick and sort packages up to 50 lbs into GoCarts — a key component of Amazon\'s Outbound Dock Automation system designed to reduce manual labor at fulfillment center outbound operations.',
    myRole:
      'I led the first-ever live fulfillment center deployment of Cardinal as part of the OBDA program — shepherding the technology through initial field testing, alpha graduation, and cross-functional alignment on safety and process changes that established the operational playbook for subsequent sites.',
    image: '/images/cardinal.jpg',
    imageAlt: 'Amazon Cardinal robotic arm picking Amazon packages',
    externalLink: 'https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center',
    externalLinkLabel: 'About Amazon',
  },
  {
    id: 7,
    title: 'Amazon Proteus',
    subtitle: 'First Fully Autonomous Mobile Warehouse Robot',
    category: 'Amazon Robotics · 2022–2023',
    techOverview:
      'Proteus is Amazon\'s first fully autonomous mobile warehouse robot — it safely navigates among employees to move loaded GoCarts of packages toward outbound docks, operating without requiring a segregated safety zone.',
    myRole:
      'As part of the OBDA program, I led Proteus\'s first deployment into a live fulfillment center alongside Cardinal — managing field testing, safety validation, issue resolution, and the handoff criteria that enabled Proteus to operate reliably alongside human workers.',
    image: '/images/proteus.jpg',
    imageAlt: 'Amazon Proteus autonomous mobile robot moving cart in warehouse',
    externalLink: 'https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center',
    externalLinkLabel: 'About Amazon',
  },
  {
    id: 8,
    title: 'Ford Mustang Mach-E',
    subtitle: 'EV Battery Assembly Automation · Wipro PARI',
    category: 'Wipro PARI Robotics · 2020–2021',
    techOverview:
      'Ford\'s Cuautitlán Assembly Plant in Mexico builds the Mustang Mach-E — Ford\'s first mass-market battery-electric vehicle — with highly automated lines for battery systems, drive units, and body assembly.',
    myRole:
      'As Project Manager at Wipro PARI Robotics, I delivered the automated battery assembly line supporting the first Mustang Mach-E — managing end-to-end execution from design coordination and vendor integration through installation, commissioning, and customer handoff to meet aggressive EV program launch timelines.',
    image: '/images/mach-e.jpg',
    imageAlt: 'Ford Mustang Mach-E electric vehicle in motion',
    externalLink: 'https://www.fromtheroad.ford.com/us/en/search-results',
    externalLinkLabel: 'Ford Media',
  },
]
