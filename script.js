// Establecer fecha actual
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('current-date').textContent = currentDate.toLocaleDateString('es-ES', options);

// Navegación entre CV y carta
const cvBtn = document.getElementById('cv-btn');
const letterBtn = document.getElementById('letter-btn');
const cvContent = document.getElementById('cv-content');
const letterContent = document.getElementById('letter-content');
const backToCvBtn = document.getElementById('back-to-cv-btn');

cvBtn.addEventListener('click', function(e) {
    e.preventDefault();
    cvContent.classList.remove('hidden');
    letterContent.classList.add('hidden');
    cvBtn.classList.add('active');
    letterBtn.classList.remove('active');
});

letterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    cvContent.classList.add('hidden');
    letterContent.classList.remove('hidden');
    cvBtn.classList.remove('active');
    letterBtn.classList.add('active');
});

if (backToCvBtn) {
    backToCvBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cvContent.classList.remove('hidden');
        letterContent.classList.add('hidden');
        cvBtn.classList.add('active');
        letterBtn.classList.remove('active');
        window.scrollTo(0, 0);
    });
}

// Funcionalidad de impresión/descarga
document.getElementById('print-cv-btn').addEventListener('click', function() {
    window.print();
});

document.getElementById('print-letter-btn').addEventListener('click', function() {
    window.print();
});

document.getElementById('download-cv-btn').addEventListener('click', function() {
    alert('Funcionalidad de descarga de PDF activada. En un entorno real, esto generaría un PDF del CV.');
    // En implementación real, aquí iría código para generar PDF
});

document.getElementById('download-letter-btn').addEventListener('click', function() {
    alert('Funcionalidad de descarga de PDF activada. En un entorno real, esto generaría un PDF de la carta.');
    // En implementación real, aquí iría código para generar PDF
});

// Mejorar experiencia móvil
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 600) {
        document.querySelector('.container').style.padding = '10px';
    }
});