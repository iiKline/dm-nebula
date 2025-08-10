import assaultRifles from '@/data/weapons/assaultRifles'

const specialCamouflages = {
  'XM4': {
    multiplayer: {
      'Muddled': { amount: 30, type: 'kills_shortly_after_sprinting' },
      'Machina': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      'Liquify': { amount: 300, type: 'kills_with_napalm_burst_equipped' },
      'Mainframe': { amount: 30, type: 'vermin_eliminations' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'AK-74': {
    multiplayer: {
      'Whitecap': { amount: 50, type: 'kills_while_strategist_combat_specialty_is_active' },
      'Vengeance': { amount: 20, type: 'kills_with_underbarrel_launcher' },
    },

    zombies: {
      'Chlorine': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
      'Haunted': { amount: 300, type: 'kills_while_pack_a_punched' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'AMES 85': {
    multiplayer: {
      'Heatstroke': { type: 'one_kill_without_taking_damage', times: 30 },
      'Burial': { amount: 2, type: 'kills_without_reloading', times: 10 },
    },

    zombies: {
      'Hyperion': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      'Graveyard': { amount: 300, type: 'kills_with_brain_rot_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'GPR 91': {
    multiplayer: {
      'Ambush': { amount: 30, type: 'kills_shortly_after_sprinting' },
      'Cacti Cathode': { amount: 50, type: 'kills_while_moving' },
    },

    zombies: {
      'Night Stalker': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
      'Frostblossom': { amount: 100, type: 'zombie_kills_while_affected_by_tactical' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Model L': {
    multiplayer: {
      'Cherry Blossom': { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' },
      'Cedar': { amount: 50, type: 'kills_with_suppressor' },
    },

    zombies: {
      'Ghost Blossom': { amount: 75, type: 'armored_zombie_kills' },
      'Walnut': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Goblin Mk2': {
    multiplayer: {
      'Astral Cry': { type: 'one_kill_without_taking_damage', times: 30 },
      'Hammerhead': { amount: 20, type: 'kills_with_underbarrel_launcher' },
    },

    zombies: {
      'Astral Pride': { amount: 10, type: 'mangler_kills' },
      'Blood Scent': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'AS VAL': {
    multiplayer: {
      'Crimson Steppes': { amount: 50, type: 'kills_while_recon_combat_specialty_is_active' },
      'Elk': { amount: 30, type: 'hipfire_kills' },
    },

    zombies: {
      'Malachite': { amount: 30, type: 'parasite_kills' },
      'Mountain Goat': { amount: 300, type: 'kills_with_dead_wire_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Krig C': {
    multiplayer: {
      'Monochrome': { amount: 30, type: 'kills_shortly_after_sprinting' },
      'Dreadshade': { amount: 50, type: 'kills_while_moving' },
    },

    zombies: {
      'Sunny Splash': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
      'Crowsbane': { amount: 100, type: 'zombie_kills_while_affected_by_tactical' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Cypher 091': {
    multiplayer: {
      'Scorching Slash': { type: 'one_kill_without_taking_damage', times: 30 },
      'Rotmist': { amount: 2, type: 'kills_without_reloading', times: 10 },
    },

    zombies: {
      'Glacial Blast': { amount: 100, type: 'zombie_kills_after_using_field_upgrade' },
      'Entropy': { amount: 75, type: 'armored_zombie_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Kilo 141': {
    multiplayer: {
      'Virusscape': { amount: 30, type: 'kills_shortly_after_sprinting' },
      'Jade': { amount: 50, type: 'kills_with_suppressor' },
    },

    zombies: {
      'Netspore': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
      'Jasper': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'CR-56 AMAX': {
    multiplayer: {
      'Teal Tiger': { type: 'one_kill_without_taking_damage', times: 30 },
      'Glade': { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' },
    },

    zombies: {
      'Yellow Tiger': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      'Everfrost': { amount: 100, type: 'zombie_kills_while_affected_by_tactical' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

    'FFAR 1': {
    multiplayer: {
      'Strain': { type: 'one_kill_without_taking_damage', times: 30 },
      'Ruche': { amount: 50, type: 'kills_while_strategist_combat_specialty_is_active' },
    },

    zombies: {
      'Blight': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
      'Crease': { amount: 100, type: 'zombie_kills_while_affected_by_tactical' },
    },

    warzone: {
      'Plague': { amount: 5, type: 'kills_in_a_single_match', times: 3 },
      'Crimp': { amount: 5, type: 'kills_shortly_after_sprinting' },
    },
  },

  'ABR A1': {
    multiplayer: {
      'Brine': { type: 'one_kill_without_taking_damage', times: 30 },
      'Shadow': { amount: 2, type: 'kills_without_reloading', times: 10 },
    },

    zombies: {
      'Current': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
      'Bloom': { amount: 300, type: 'zombie_kills_while_affected_by_tactical' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },
}

export default {
  ...assaultRifles.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        // Military
        'Granite': { amount: 5, type: 'headshots' },
        'Woodland': { amount: 10, type: 'headshots' },
        'Savanna': { amount: 15, type: 'headshots' },
        'Splinter': { amount: 20, type: 'headshots' },
        'Moss': { amount: 30, type: 'headshots' },
        'Saboteur': { amount: 40, type: 'headshots' },
        'Digital': { amount: 50, type: 'headshots' },
        'Tide': { amount: 75, type: 'headshots' },
        'Red Tiger': { amount: 100, type: 'headshots' },

        // Special
        ...specialCamouflages[weapon]?.multiplayer,

        // Mastery
        'Gold': { amount: 10, type: 'double_kills' },
        'Diamond': { amount: 3, type: 'kills_without_dying', times: 10 },
        'Dark Spine': { amount: 3, type: 'triple_kills' },
        'Dark Matter': { amount: 5, type: 'kills_without_dying', times: 3 },
      },

      zombies: {
        // Military
        'Slate': { amount: 100, type: 'critical_kills' },
        'Desert': { amount: 200, type: 'critical_kills' },
        'Evergreen': { amount: 300, type: 'critical_kills' },
        'Rugged': { amount: 400, type: 'critical_kills' },
        'Grim': { amount: 600, type: 'critical_kills' },
        'Stripe': { amount: 800, type: 'critical_kills' },
        'Oceanic': { amount: 1000, type: 'critical_kills' },
        'Whiteout': { amount: 1500, type: 'critical_kills' },
        'Purple Tiger': { amount: 2000, type: 'critical_kills' },

        // Special
        ...specialCamouflages[weapon]?.zombies,

        // Mastery
        'Mystic Gold': { amount: 10, type: 'rapid_kills', times: 15 },
        'Opal': { amount: 30, type: 'special_zombie_eliminations' },
        'Afterlife': { amount: 20, type: 'consecutive_kills_without_taking_damage', times: 10 },
        'Nebula': { amount: 10, type: 'elite_zombie_kills' },
      },

      warzone: {
        // Military
        'Quartz': { amount: 5, type: 'eliminations' },
        'Tundra': { amount: 10, type: 'eliminations' },
        'Canyon': { amount: 15, type: 'eliminations' },
        'Pine': { amount: 20, type: 'eliminations' },
        'Undergrowth': { amount: 30, type: 'eliminations' },
        'Snakeskin': { amount: 40, type: 'eliminations' },
        'Siberia': { amount: 50, type: 'eliminations' },
        'Smolder': { amount: 75, type: 'eliminations' },
        'Blue Tiger': { amount: 100, type: 'eliminations' },

        // Special
        ...specialCamouflages[weapon]?.warzone,

        // Mastery
        'Gold Tiger': { amount: 5, type: 'kills_while_most_wanted' },
        "King's Ransom": { amount: 3, type: 'kills_without_dying', times: 5 },
        'Catalyst': { amount: 5, type: 'kills_on_affected_enemies_with_tacticals' },
        'Abyss': { amount: 5, type: 'kills_without_dying', times: 2 },
      },
    }

    return acc
  }, {}),
}