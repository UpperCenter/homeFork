const Config = {
    name: "uppercenter",
    scale: 1,
    Links: [
        [
            "Personal",
            [
                ["Twitter", "https://twitter.com"],
                ["GitHub", "https://github.com"],
                ["YouTube", "https://youtube.co.uk"],
                ["Spotify", "https://open.spotify.com"],
                ["Twitch", "https://twitch.tv"],
                ["OVH Webmail", "https://pro1.mail.ovh.net/owa"],
            ]
        ],
        [
            "Wikis",
            [
                ["ArchWiki", "https://wiki.archlinux.org/"],
                ["Awesome Security", "https://github.com/sbilly/awesome-security"],
                ["USW Referencing", "https://uppercenter.github.io/Psychic-Telegram/usw.pdf"],
                ["Dillinger", "https://dillinger.io/"]
            ]
        ],
        [
            "University",
            [
                ["Uni Outlook", "https://outlook.office365.com/mail/inbox"],
                ["Unilearn", "https://unilearn.southwales.ac.uk"],
                ["OneDrive", "https://bit.ly/One-Drv"],
                ["Azure Software", "https://bit.ly/AzureSoft"],
            ]
        ],
        [
            "InfoSec",
            [
                ["ExploitDB", "https://exploit-db.com"],
                ["GreyNoise", "https://viz.greynoise.io"],
                ["WHOIS", "https://lookup.icann.org"],
                ["IP Address WHOIS", "https://whois.urih.com"],
                ["OpenDirectory", "https://the-eye.eu"],
                ["Email Search", "https://hunter.io"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
