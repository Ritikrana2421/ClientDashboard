document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const newJobButton = document.getElementById('newJobButton');
    const clientTable = document.getElementById('clientTable');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const rows = clientTable.getElementsByTagName('tr');

        for (let i = 1; i < rows.length; i++) {
            const clientId = rows[i].getElementsByTagName('td')[1].textContent.toLowerCase();
            const clientName = rows[i].getElementsByTagName('td')[2].textContent.toLowerCase();

            if (clientId.includes(searchTerm) || clientName.includes(searchTerm)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    });

    newJobButton.addEventListener('click', function() {
        alert('New Job Sheet functionality to be implemented');
    });

    clientTable.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-btn')) {
            alert('View functionality to be implemented');
        } else if (e.target.classList.contains('edit-btn')) {
            alert('Edit functionality to be implemented');
        } else if (e.target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this client?')) {
                alert('Delete functionality to be implemented');
            }
        }
    });
});