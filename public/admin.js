// New file: public/admin.js
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('/results');
        if (!response.ok) {
            throw new Error('Failed to fetch results');
        }
        const results = await response.json();
        
        // Display total participants
        document.getElementById('total-participants').textContent = results.length;
        
        if (results.length === 0) {
            return;
        }
        
        // Calculate averages
        const traits = ['extraversion', 'agreeableness', 'conscientiousness', 'neuroticism', 'openness'];
        const averages = traits.reduce((acc, trait) => {
            const sum = results.reduce((s, r) => s + r[trait], 0);
            acc[trait] = Math.round(sum / results.length);
            return acc;
        }, {});
        
        // Create average chart
        const avgCtx = document.getElementById('averageChart').getContext('2d');
        new Chart(avgCtx, {
            type: 'bar',
            data: {
                labels: ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness'],
                datasets: [{
                    label: 'Average Traits (%)',
                    data: [averages.extraversion, averages.agreeableness, averages.conscientiousness, averages.neuroticism, averages.openness],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
        
        // Calculate sex distribution
        const sexCounts = results.reduce((acc, r) => {
            acc[r.sex] = (acc[r.sex] || 0) + 1;
            return acc;
        }, {});
        const sexLabels = Object.keys(sexCounts);
        const sexData = Object.values(sexCounts);
        
        // Create sex pie chart
        const sexCtx = document.getElementById('sexChart').getContext('2d');
        new Chart(sexCtx, {
            type: 'pie',
            data: {
                labels: sexLabels,
                datasets: [{
                    data: sexData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
        
        // Populate table
        const tbody = document.querySelector('#results-table tbody');
        results.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.name}</td>
                <td>${row.age}</td>
                <td>${row.sex}</td>
                <td>${row.extraversion}</td>
                <td>${row.agreeableness}</td>
                <td>${row.conscientiousness}</td>
                <td>${row.neuroticism}</td>
                <td>${row.openness}</td>
                <td>${row.timestamp}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error loading admin data:', error);
        alert('Error loading results: ' + error.message);
    }
});