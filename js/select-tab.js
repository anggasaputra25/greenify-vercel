document.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('#tabContainer');
    const tabButtons = tabContainer.querySelectorAll('button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => {
                btn.classList.remove('bg-[#00855E]', 'text-white');
                btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:bg-gray-100');
            });
            
            button.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:bg-gray-100');
            button.classList.add('bg-[#00855E]', 'text-white');
        });
    });
});