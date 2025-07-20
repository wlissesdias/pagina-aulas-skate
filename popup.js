// Função para alternar o popup de redes sociais
function togglePopup() {
    const popup = document.getElementById('popup');
    
    if (!popup) {
        console.error('Elemento popup não encontrado');
        return;
    }
    
    // Verifica se o popup está visível
    const isVisible = popup.style.display === 'block' || popup.classList.contains('ativo');
    
    if (isVisible) {
        // Esconde o popup
        popup.style.display = 'none';
        popup.classList.remove('ativo');
    } else {
        // Mostra o popup
        popup.style.display = 'block';
        popup.classList.add('ativo');
    }
}

// Função para mostrar cards de informações
function showCard(id) {
    const card = document.getElementById('card' + id);
    if (card) {
        card.style.display = 'block';
    }
}

// Função para esconder cards de informações
function hideCard(id) {
    const card = document.getElementById('card' + id);
    if (card) {
        card.style.display = 'none';
    }
}

// Função para alternar popup do Spotify
function toggleSpotifyPopup() {
    const popup = document.getElementById('spotifyPopup');
    if (popup) {
        popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    }
}

// Função para alternar popup do mapa
function toggleMapPopup() {
    const popup = document.getElementById('mapPopup');
    if (popup) {
        popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    }
}


// Função para alternar menu lateral
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) {
        sideMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
}

// Função para mudar playlist do Spotify
function changePlaylist() {
    const playlistId = document.getElementById("playlistSelector").value;
    const spotifyFrame = document.getElementById("spotifyFrame");
    if (spotifyFrame) {
        spotifyFrame.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
    }
}

// Fechar popups quando clicar fora deles
document.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    const spotifyPopup = document.getElementById('spotifyPopup');
    const mapPopup = document.getElementById('mapPopup');
    
    // Fechar popup de redes sociais
    if (popup && popup.style.display === 'block' && !popup.contains(event.target)) {
        const buttons = document.querySelectorAll('button[onclick*="togglePopup"]');
        let clickedOnButton = false;
        
        buttons.forEach(button => {
            if (button.contains(event.target)) {
                clickedOnButton = true;
            }
        });
        
        if (!clickedOnButton) {
            popup.style.display = 'none';
            popup.classList.remove('ativo');
        }
    }

    
    
    
    // Fechar popup do Spotify
    if (spotifyPopup && spotifyPopup.style.display === 'block' && !spotifyPopup.contains(event.target)) {
        const buttons = document.querySelectorAll('button[onclick*="toggleSpotifyPopup"]');
        let clickedOnButton = false;
        
        buttons.forEach(button => {
            if (button.contains(event.target)) {
                clickedOnButton = true;
            }
        });
        
        if (!clickedOnButton) {
            spotifyPopup.style.display = 'none';
        }
    }
    
    // Fechar popup do mapa
    if (mapPopup && mapPopup.style.display === 'block' && !mapPopup.contains(event.target)) {
        const links = document.querySelectorAll('a[onclick*="toggleMapPopup"]');
        let clickedOnLink = false;
        
        links.forEach(link => {
            if (link.contains(event.target)) {
                clickedOnLink = true;
            }
        });
        
        if (!clickedOnLink) {
            mapPopup.style.display = 'none';
        }
    }
});

// Fechar popups com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const popup = document.getElementById('popup');
        const spotifyPopup = document.getElementById('spotifyPopup');
        const mapPopup = document.getElementById('mapPopup');
        
        if (popup && popup.style.display === 'block') {
            popup.style.display = 'none';
            popup.classList.remove('ativo');
        }
        
        if (spotifyPopup && spotifyPopup.style.display === 'block') {
            spotifyPopup.style.display = 'none';
        }
        
        if (mapPopup && mapPopup.style.display === 'block') {
            mapPopup.style.display = 'none';
        }
    }
}); 