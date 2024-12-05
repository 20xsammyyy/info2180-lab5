document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded fired!");

    // Country Lookup Button
    const lookupButton = document.getElementById('lookup');
    lookupButton.addEventListener('click', function() {
        console.log("Lookup Country button clicked");
        const countryInput = document.getElementById('country').value;

        fetch(`world.php?country=${encodeURIComponent(countryInput)}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching country data:', error);
                document.getElementById('result').innerHTML = 'Error fetching data';
            });
    });

    // City Lookup Button
    const cityLookupButton = document.getElementById('lookup-cities');
    cityLookupButton.addEventListener('click', function() {
        console.log("Lookup Cities button clicked");
        const countryInput = document.getElementById('country').value;

        fetch(`world.php?country=${encodeURIComponent(countryInput)}&lookup=cities`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching city data:', error);
                document.getElementById('result').innerHTML = 'Error fetching data';
            });
    });
});
