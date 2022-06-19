import {burningTundraEncountersMacro} from "./burning-tundra.mjs";
import {hexplorationEncountersMacro} from "./hexploration.mjs";

Hooks.on('init', () => {
    game.pf2eQftffTools = {
        macros: {
            burningTundraEncountersMacro,
            hexplorationEncountersMacro,
        }
    }

    game.settings.register("pf2e-qftff-tools", "hexplorationRandomEncounterTable", {
        name: "Hexploration: Random Encounter Table Name",
        hint: "Insert the name of the roll table that is rolled for random encounters",
        default: "",
        config: true,
        type: String,
        scope: "world",
    });
    game.settings.register("pf2e-qftff-tools", "randomEncounterRollMode", {
        name: "Roll Mode",
        scope: "world",
        config: true,
        default: "gmroll",
        type: String,
        choices: {
            publicroll: "Public Roll",
            gmroll: "Private GM Roll",
            blindroll: "Blind GM Roll",
            selfroll: "Self Roll"
        }
    });
});