/* ===================================
   TEAM DATA
=================================== */

const teams = [

{
    name:"Red Bull Racing",
    drivers:"Max Verstappen • Liam Lawson",
    image:"images/Nath&Leandro.jpg",
    class:"redbull",
    drivers:[
        {
            name:"Nathalia Verstappen",
            number:"16",
            description1:"<b>Campeonatos:</b> 4 títulos de pelear aunque no tenga razón.",
            description2:"<b>Descripción:</b> Competitiva, agresiva y convencida de que todos estorban."
        },

        {
            name:"Leandro Hamilton",
            number:"11",
            description1:"<b>Campeonatos:</b> 7 títulos de carreras sprint.",
            description2:"<b>Descripción:</b> Sale rápido… demasiado rápido."
        }
    ]
},    

{
    name:"McLaren",
    drivers:"Lando Norris • Oscar Piastri",
    image:"images/Mario&Jacquie.png",
    class:"mclaren",
    drivers:[
        {
            name:"Mario Norris",
            number:"69",
            description1:"<b>Campeonatos:</b> Campeón de comer sin masticar.",
            description2:"<b>Descripción:</b> Percepción espacial inexistente; la gente aparece de la nada."
        },

        {
            name:"Jacqueline Alonso",
            number:"30",
            description1:"<b>Campeonatos:</b> 5 títulos despertándose a las 5 a.m.",
            description2:"<b>Descripción:</b> Veterana del paddock sobreviviendo madrugadas con Mario Andre."
        }
    ]
},

{
    name:"Mercedes",
    drivers:"George Russell • Kimi Antonelli",
    image:"images/Chucho&Fer.jpg",
    class:"mercedes",
    drivers:[
        {
            name:"Diego Leclerc",
            number:"10",
            description1:"<b>Campeonatos:</b> Campeón mundial de los calambres.",
            description2:"<b>Descripción:</b> Su mayor rival: sus propias piernas."
        },

        {
            name:"Fernanda Sainz",
            number:"55",
            description1:"<b>Campeonatos:</b> 2 títulos de paciencia extrema por aguantar a Diego.",
            description2:"<b>Descripción:</b> Sobrevive a Diego y sus emergencias musculares."
        },

        {
            name:"Nico Baby",
            number:"01",
            description1:"<b>Campeonatos:</b> Bicampeón de destruir paz mental.",
            description2:"<b>Descripción:</b> Especialista en berrinches y siestas tácticas."
        }
    ]
},

{
    name:"Haas",
    drivers:"Charles Leclerc • Lewis Hamilton",
    image:"images/Renato&Gisela.png",
    class:"haas",
    drivers:[
        {
            name:"Renato Occon",
            number:"51",
            description1:"<b>Campeonatos:</b> Maestro del caos.",
            description2:"<b>Descripción:</b> Aparece, genera drama y desaparece.."
        },

        {
            name:"Gissela Bearman",
            number:"81",
            description1:"<b>Campeonatos:</b> Rookie del año.",
            description2:"<b>Descripción:</b> Probablemente ya tiene secretos de todos."
        }
    ]
},

{
    name:"Williams",
    drivers:"Alex Albon • Logan Sargeant",
    image:"images/Gaby&Negro.jpg",
    class:"williams",
    drivers:[
        {
            name:"Gabriela Antonelli",
            number:"12",
            description1:"<b>Campeonatos:</b> Récord mundial de hablar de anime.",
            description2:"<b>Descripción:</b> O estudia medicina o consume yaoi, no hay punto medio.."
        },

        {
            name:"Negro Colapinto",
            number:"43",
            description1:"<b>Campeonatos:</b> Campeón invicto de debates otakus.",
            description2:"<b>Descripción:</b> Tan otaku que aprendió japonés por accidente."
        }
    ]
}





];

/* ===================================
   INITIALIZATION
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    try{
        loadTeams();
    }
    catch(error){
        console.error("Error loading teams:", error);
    }

    updateCountdown();

    setInterval(updateCountdown,1000);

    setupLightbox();

});

/* ===================================
   SPLASH / ENTER PADDOCK
=================================== */

function startRaceSequence(){

    const splash =
        document.getElementById(
            "splash-screen"
        );

    const overlay =
        document.getElementById(
            "race-overlay"
        );

    splash.style.display = "none";

    overlay.style.display = "flex";

    runLightsSequence();
}

/* ===================================
   LIGHTS SEQUENCE
=================================== */

function runLightsSequence(){

    const lights =
        document.querySelectorAll(
            ".race-light"
        );

    lights.forEach(light => {

        light.classList.remove("active");

    });

    lights.forEach((light,index)=>{

        setTimeout(()=>{

            light.classList.add("active");

        },(index+1)*1000);

    });

    setTimeout(()=>{

        lights.forEach(light=>{

            light.classList.remove("active");

        });

        launchRace();

    },6500);
}

/* ===================================
   LIGHTS OUT
=================================== */

function launchRace(){

    const overlay =
        document.getElementById(
            "race-overlay"
        );

    const music =
        document.getElementById(
            "raceMusic"
        );

    const main =
        document.getElementById(
            "main-content"
        );

    overlay.style.transition =
        "transform 1s ease";

    overlay.style.transform =
        "translateX(100%)";

    music.volume = 0.7;

    music.play().catch(() => {

        console.log(
            "Audio bloqueado por navegador"
        );

    });

    setTimeout(()=>{

        overlay.style.display = "none";

        main.style.display = "block";

        document
            .getElementById(
                "countdown"
            )
            .scrollIntoView({

                behavior:"smooth"

            });

    },1000);
}

/* ===================================
   COUNTDOWN
=================================== */

function updateCountdown(){

    const targetDate =
        new Date(
            "2026-06-19T16:00:00"
        );

    const now =
        new Date();

    const diff =
        targetDate - now;

    if(diff <= 0){

        document.getElementById(
            "days"
        ).textContent = "0";

        document.getElementById(
            "hours"
        ).textContent = "0";

        document.getElementById(
            "minutes"
        ).textContent = "0";

        document.getElementById(
            "seconds"
        ).textContent = "0";

        return;
    }

    const days =
        Math.floor(
            diff / 86400000
        );

    const hours =
        Math.floor(
            (diff % 86400000)
            / 3600000
        );

    const minutes =
        Math.floor(
            (diff % 3600000)
            / 60000
        );

    const seconds =
        Math.floor(
            (diff % 60000)
            / 1000
        );

    document.getElementById(
        "days"
    ).textContent = days;

    document.getElementById(
        "hours"
    ).textContent = hours;

    document.getElementById(
        "minutes"
    ).textContent = minutes;

    document.getElementById(
        "seconds"
    ).textContent = seconds;
}

/* ===================================
   LOAD TEAMS
=================================== */

function loadTeams(){

    const container =
        document.getElementById(
            "teamsContainer"
        );

    container.innerHTML = "";

    teams.forEach(team=>{

        const driversHtml =
            team.drivers.map(driver=>{

                const names =
                    driver.name.split(" ");

                const firstName =
                    names[0];

                const lastName =
                    names.slice(1).join(" ");

                return `

                <div class="driver-profile">

                    <div class="driver-number">

                        #${driver.number}

                    </div>

                    <div class="driver-name">

                        <span class="first-name">

                            ${firstName}

                        </span>

                        <span class="last-name">

                            ${lastName}

                        </span>

                    </div>

                    <p>

                        ${driver.description1}

                    </p>
                    <p>

                        ${driver.description2}

                    </p>

                </div>

                `;

            }).join("");

        container.innerHTML += `

        <div class="team-card ${team.class}">

            <div class="team-header">

                ${team.name}

            </div>

            <img
                src="${team.image}"
                alt="${team.name}"
                onclick="openImage('${team.image}')">

            <div class="drivers-container">

                ${driversHtml}

            </div>

        </div>

        `;
    });
}

/* ===================================
   LIGHTBOX
=================================== */

function setupLightbox(){

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const image =
        document.getElementById(
            "lightboxImage"
        );

    lightbox.addEventListener("click",(e)=>{

        if(e.target !== image){

            closeImage();

        }

    });

}

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        closeImage();

    }

});

function openImage(src){

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const image =
        document.getElementById(
            "lightboxImage"
        );

    image.src = src;

    lightbox.style.display =
        "flex";
}

function closeImage(){

    document.getElementById(
        "lightbox"
    ).style.display = "none";
}

/* ===================================
   OPTIONAL HELPERS
=================================== */

function stopMusic(){

    const music =
        document.getElementById(
            "raceMusic"
        );

    music.pause();

    music.currentTime = 0;
}

function pauseMusic(){

    document
        .getElementById(
            "raceMusic"
        )
        .pause();
}

function resumeMusic(){

    document
        .getElementById(
            "raceMusic"
        )
        .play();
}
