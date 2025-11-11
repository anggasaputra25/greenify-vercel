// Plant data with owner and date
const plantsData = [{
        type: 'large-tree',
        owner: 'Sarah Johnson',
        date: '2025-10-15',
        icon: 'fa-tree',
        color: 'text-green-700',
        size: 'text-7xl',
        trunk: true,
        trunkSize: 'w-4 h-12'
    },
    {
        type: 'giant-tree',
        owner: 'Michael Chen',
        date: '2025-10-28',
        icon: 'fa-tree',
        color: 'text-green-800',
        size: 'text-8xl',
        trunk: true,
        trunkSize: 'w-5 h-14'
    },
    {
        type: 'flower',
        owner: 'Sarah Johnson',
        date: '2025-10-18',
        icon: 'fa-flower',
        color: 'text-pink-500',
        size: 'text-5xl',
        stem: true
    },
    {
        type: 'medium-tree',
        owner: 'Sarah Johnson',
        date: '2025-10-20',
        icon: 'fa-tree',
        color: 'text-green-600',
        size: 'text-6xl',
        trunk: true,
        trunkSize: 'w-3 h-10'
    },
    {
        type: 'sprout',
        owner: 'Michael Chen',
        date: '2025-10-22',
        icon: 'fa-spa',
        color: 'text-green-500',
        size: 'text-4xl'
    },
    {
        type: 'flower-red',
        owner: 'Michael Chen',
        date: '2025-10-25',
        icon: 'fa-flower',
        color: 'text-red-400',
        size: 'text-4xl',
        stem: true
    },
    {
        type: 'sprout-small',
        owner: 'Emma Davis',
        date: '2025-11-05',
        icon: 'fa-spa',
        color: 'text-green-600',
        size: 'text-3xl'
    },
    {
        type: 'seedling',
        owner: 'Michael Chen',
        date: '2025-11-01',
        icon: 'fa-seedling',
        color: 'text-green-500',
        size: 'text-5xl'
    },
    {
        type: 'small-tree',
        owner: 'Michael Chen',
        date: '2025-11-03',
        icon: 'fa-tree',
        color: 'text-green-600',
        size: 'text-5xl',
        trunk: true,
        trunkSize: 'w-2 h-8'
    },
    {
        type: 'medium-tree-2',
        owner: 'Emma Davis',
        date: '2025-11-07',
        icon: 'fa-tree',
        color: 'text-green-700',
        size: 'text-6xl',
        trunk: true,
        trunkSize: 'w-3 h-10'
    }
];

// Function to create plant HTML
function createPlantHTML(plant, index) {
    const animationClass = plant.type.includes('tree') ?
        (index % 2 === 0 ? 'plant-sway' : 'plant-sway-reverse') :
        (plant.type.includes('flower') ? 'flower' : 'plant-grow');

    const delay = index * 0.1;

    let plantHTML = `
        <div class="flex flex-col items-center plant-container ${animationClass}" 
                style="animation-delay: ${delay}s;">
            
            <!-- Tooltip -->
            <div class="plant-tooltip">
                <div class="owner-name"><i class="fa-solid fa-user"></i> ${plant.owner}</div>
                <div class="plant-date"><i class="fa-solid fa-calendar"></i> ${formatDate(plant.date)}</div>
                <div class="plant-type"><i class="fa-solid fa-${plant.icon}"></i> ${getPlantTypeName(plant.type)}</div>
            </div>
            
            <div class="plant-glow">
                <i class="fa-solid ${plant.icon} ${plant.color} ${plant.size}"
                    style="filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));"></i>
            </div>
    `;

    if (plant.trunk) {
        plantHTML += `
            <div class="${plant.trunkSize} bg-linear-to-b from-amber-700 to-amber-900 rounded-t-lg shadow-lg"></div>
        `;
    }

    if (plant.stem) {
        plantHTML += `
            <div class="w-2 h-8 bg-green-600 rounded-full"></div>
        `;
    }

    plantHTML += `</div>`;
    return plantHTML;
}

// Function to get plant type name
function getPlantTypeName(type) {
    const names = {
        'large-tree': 'Large Tree',
        'flower': 'Flower',
        'medium-tree': 'Medium Tree',
        'sprout': 'Sprout',
        'flower-red': 'Flower Red',
        'giant-tree': 'Giant Tree',
        'seedling': 'Seedling',
        'small-tree': 'Small Tree',
        'sprout-small': 'Sprout Small',
        'medium-tree-2': 'Medium Tree 2'
    };
    return names[type] || 'Plant';
}

// Function to format date in English
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-EN', options);
}

// Render all plants
function renderPlants() {
    const container = document.getElementById('plantsContainer');
    container.innerHTML = plantsData.map((plant, index) =>
        createPlantHTML(plant, index)
    ).join('');
}

// Initialize
renderPlants();