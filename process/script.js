document.getElementById('moreTips').addEventListener('click', function() {
    const tipsList = document.querySelector('#tips ul');
    const newTips = [
        'Schedule a vet check-up soon after adoption.',
        'Ensure you have all necessary supplies before bringing your pet home.',
        'Consider pet insurance for unexpected health issues.'
    ];

    newTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    this.style.display = 'none'; // Hide the button after showing more tips
});