// Player data
const players = [
    {
        name: "Finna",
        number: 112352639
    },
    {
        name: "Freya",
        number: 112460022
    },
    {
        name: "Hennex",
        number: 111660308
    },
    {
        name: "Indi",
        number: 111693052
    },
    {
        name: "Lenka",
        number: 112804288
    },
    {
        name: "Lila",
        number: 112545514
    },
    {
        name: "Ragnar",
        number: 112356241
    }
]

const characterId = 112460022;
const character = "freya";

// App data
const apps = [
    {
        name: "Rogue's Toolkit",
        icon: "roguetool.png",
        content: `
            <div class="app-header">
                <h2>Rogue's Toolkit</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Rogue's Toolkit app content here -->
            <div class="roguetool">
                Unlock Cost: One-time 1,000 gp
                <div class="statuses">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                Grants the ability to pick digital locks. If you have time to look through a tutorial, advantage on physical locks.
            </div>
        `
    },
    {
        name: "Shadow Step",
        icon: "shadowstep.png",
        content: `
            <div class="app-header">
                <h2>Shadow Step</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Shadow Step app content -->
            <div class="shadowstep">
                Unlock Cost: Free
                <div class="statuses">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                Buy blueprints, guard movements, and security measures for your location of choice, if available. Prices vary per item.
            </div>
        `
    },
    {
        name: "Wraith Wallet",
        icon: "wraith.png",
        content: `
            <div class="app-header">
                <h2>Wraith Wallet</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Wraith Wallet app content here -->
            <div class="wraithwallet">
                Unlock Cost: 20% transaction fee.
                <div class="statuses">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                Use this to get in touch with a broker to convert some of your money to available currency in Wraith Wallet, which will be used for untraceable transactions in the Shadow Bazaar.
            </div>
        `
    },
    {
        name: "Hex Hacker",
        icon: "hexhacker.png",
        content: `
            <div class="app-header">
                <h2>Hex Hacker</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Hex Hacker app content here -->
            <div class="treasure">
                Unlock Cost: Prices vary based on situation and require an infernal contract.
                <div class="statuses">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                Temporarily disable or manipulate magical items and barriers with the help of infernal associates.
            </div>
        `
    },
    {
        name: "Goblinbaba",
        icon: "goblinbaba.png",
        content: `
            <div class="app-header">
                <h2>Goblinbaba</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Goblinbaba app content here -->
            <div class="map">
                Unlock Cost: Free
                <div class="statuses">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                TBD. Just ask DM for now. Black market goods to buy smuggled / illegal magical items, cursed artifacts, and banned potions.
                <ul>
                    <li>Goblin: 5-7 days, 0 gp</li>
                    <li>Chief: 3-5 days, 50 gp</li>
                    <li>Hobgoblin: 2 days, 200 gp</li>
                    <li>Bugbear: now, 500 gp</li>
                </ul>
            </div>
        `
    },
    {
        name: "NecroChat",
        icon: "necrochat.png",
        content: `
            <div class="app-header">
                <h2>NecroChat</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add NecroChat app content here -->
            <div class="necrochat">
                Unlock Cost: 1sp per token to speak with dead. This includes words you say and the words that the target says.
                <div class="statuses">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                Speak with the dead, word by word.
            </div>
        `
    },
    {
        name: "Heistmates",
        icon: "heistmates.png",
        content: `
            <div class="app-header">
                <h2>Heistmates</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Heistmates app content here -->
            <div class="heistmates">
                Unlock Cost: 10% transaction fee.
                <div class="statuses">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                TBD. Anonymously hire mercenaries, assassins, etc., with payments and contracts handled through the app and Wraith Wallet.
            </div>
        `
    },
    {
        name: "Forgemaster",
        icon: "forgemaster.png",
        content: `
            <div class="app-header">
                <h2>Forgemaster</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Forgemaster app content here -->
            <div class="forgemaster">
                Unlock Cost: 50 gp for each guide OR 5,000 gp for unlimited access
                <div class="statuses">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                Detailed guides and tools for forging and creating fakes of magical and mundane items.
            </div>
        `
    },
    {
        name: "Potion Pirate",
        icon: "potionpirate.png",
        content: `
            <div class="app-header">
                <h2>Potion Pirate</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Potion Pirate app content here -->
            <div class="potionpirate">
                Unlock Cost: Free.
                <div class="statusese">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                Learn the recipe of a potion to make it yourself. Price of the ingredients will be 50% of fair market value of the potion.
                Pricing by potion tiers.
                <ul>
                    <li>Common: 50 gp</li>
                    <li>Uncommon: 250 gp</li>
                    <li>Rare: 500 gp</li>
                    <li>Very Rare: 1000 gp</li>
                </ul>
                Potion ingredients can be requisitioned for third-party brewing via Goblinbaba, but price will be 60% of fair market value of the potion before shipping.
            </div>
        `
    },
    {
        name: "WeCant",
        icon: "wecant.png",
        content: `
            <div class="app-header">
                <h2>WeCant</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add WeCant app content here -->
            <div class="wecant">
                Unlock Cost: One-time 100 gp.
                <div class="statusese">
                    <div class="disabled">Finna</div>
                    <div class="disabled">Freya</div>
                    <div class="disabled">Hennex</div>
                    <div class="disabled">Indi</div>
                    <div class="disabled">Lenka</div>
                    <div class="enabled">Lila</div>
                    <div class="disabled">Ragnar</div>
                </div>
                Preferred anonymous, encrypted communication for Shadow Bazaar members.
            </div>
        `
    },
    // {
    //     name: "Illusionist Pro",
    //     icon: "spellmart.png",
    //     content: `
    //         <div class="app-header">
    //             <h2>Spell Mart</h2>
    //             <button class="close-btn">&times;</button>
    //         </div>
    //         <!-- Add Spell Mart app content here -->
    //         <div class="spellmart">
    //             Unlock Cost: Free, or Spell Mart Plus for 50 gp a month
    //             <div class="statuses">
    //                 <div class="enabled">Finna</div>
    //                 <div class="enabled">Freya</div>
    //                 <div class="enabled">Hennex</div>
    //                 <div class="enabled">Indi</div>
    //                 <div class="enabled">Lenka</div>
    //                 <div class="enabled">Lila</div>
    //                 <div class="enabled">Ragnar</div>
    //             </div>
    //             Coming soon. Talk to DM.
    //             </br>
    //             Shipping Options:
    //             <ul>
    //                 <li>Standard: 5-7 days, 0 gp</li>
    //                 <li>Power: 3-5 days, 10 gp</li>
    //                 <li>Plus: 2 days, 20 gp</li>
    //                 <li>Wish: now, 100 gp</li>
    //             </ul>
    //         </div>
    //     `
    // },
    // Add the remaining apps here
];

// Generate app icons on the home screen
const homeScreen = document.querySelector(".home-screen");
apps.forEach((app, index) => {
    const appIcon = document.createElement("div");
    appIcon.classList.add("app-icon");
    appIcon.innerHTML = `
        <img src="${app.icon}" alt="${app.name}">
        <span>${app.name}</span>
    `;
    appIcon.addEventListener("click", () => openApp(index));
    homeScreen.appendChild(appIcon);
});

// Open app
function openApp(index) {
    const appContainer = document.querySelector(".app-container");
    appContainer.innerHTML = apps[index].content;
    appContainer.style.display = "block";

    const closeBtn = appContainer.querySelector(".close-btn");
    closeBtn.addEventListener("click", closeApp);

    // Call openSpellbookSync when the Spellbook Sync app is opened
    if (apps[index].name === "Spellbook Sync") {
        openSpellbookSync();
    }
}
// Close app
function closeApp() {
    const appContainer = document.querySelector(".app-container");
    appContainer.style.display = "none";
}

const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", () => {
    closeApp();
  });


// // Fetch spells from the D&D Beyond API for a specific character
// async function fetchSpells(characterId) {
//     const response = await fetch(`https://character-service.dndbeyond.com/character/v5/character/${characterId}`, {
//         headers: {
//             'Access-Control-Allow-Origin': '*'
//         }
//     });
//     const data = await response.json();
//     console.log(data);
//     return data.spells;
// }

// // Fetch spells from the D&D Beyond API for a specific character
// async function fetchSpells(character) {
//     const response = fetch(`./${character}.json`);
//     const data = response.json();
//     console.log(data);
//     return data.spells;
// }

// // Render spell list for a specific character
// async function renderSpellList(characterId) {
//     const spellList = document.querySelector(".spell-list");
//     const spells = await fetchSpells(characterId);

//     spellList.innerHTML = ''; // Clear the spell list before rendering

//     spells.forEach(spell => {
//         const spellItem = document.createElement("div");
//         spellItem.classList.add("spell-item");
//         spellItem.innerHTML = `
//             <h3>${spell.definition.name}</h3>
//             <p>Level: ${spell.definition.level}</p>
//             <p>School: ${spell.definition.school}</p>
//             <p>Components: ${spell.definition.components}</p>
//         `;
//         spellList.appendChild(spellItem);
//     });
// }

// // Render spell list for a specific character
// async function renderSpellList(character) {
//     const spellList = document.querySelector(".spell-list");
//     const spells = await fetchSpells(character);

//     spellList.innerHTML = ''; // Clear the spell list before rendering

//     spells.forEach(spell => {
//         const spellItem = document.createElement("div");
//         spellItem.classList.add("spell-item");
//         spellItem.innerHTML = `
//             <h3>${spell.definition.name}</h3>
//             <p>Level: ${spell.definition.level}</p>
//             <p>School: ${spell.definition.school}</p>
//             <p>Components: ${spell.definition.components}</p>
//         `;
//         spellList.appendChild(spellItem);
//     });
// }

// Call renderSpellList when the Spellbook Sync app is opened
function openSpellbookSync() {
    // ... (Previous code)
    // renderSpellList(characterId);
    // renderSpellList(character);
}