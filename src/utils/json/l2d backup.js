const l2dData = [
  { 'group': '777', 'name': 'Blanc', 'id': 'c270' },
  { 'group': '777', 'name': 'Blanc White Rabbit', 'id': 'c270_01' },
  { 'group': '777', 'name': 'Blanc No.77 Batter', 'id': 'c270_02' },
  { 'group': '777', 'name': 'Blanc Fortune Express', 'id': 'c270_03' },
  { 'group': '777', 'name': 'Noir', 'id': 'c271' },
  { 'group': '777', 'name': 'Noir Black Rabbit', 'id': 'c271_01' },
  { 'group': '777', 'name': 'Noir Baseball Cheerleader', 'id': 'c271_02' },
  { 'group': '777', 'name': 'Rouge', 'id': 'c272' },
  { 'group': '777', 'name': 'Rouge Unlucky Rabbit', 'id': 'c272_01' },

  { 'group': 'A.C.P.U.', 'name': 'Poli', 'id': 'c030' },
  { 'group': 'A.C.P.U.', 'name': 'Poli Sweet Holic', 'id': 'c030_01' },
  { 'group': 'A.C.P.U.', 'name': 'Poli Cheer Up Police', 'id': 'c030_02' },
  { 'group': 'A.C.P.U.', 'name': 'Miranda', 'id': 'c032' },
  { 'group': 'A.C.P.U.', 'name': 'Miranda Thief of Justice', 'id': 'c032_01' },
  { 'group': 'A.C.P.U.', 'name': 'Quiry', 'id': 'c033' },
  { 'group': 'A.C.P.U.', 'name': 'Poli@Favorite', 'id': 'favorite_c030' },
  { 'group': 'A.C.P.U.', 'name': 'Miranda@Favorite', 'id': 'favorite_c032' },

  { 'group': 'Absolute', 'name': 'Emma', 'id': 'c090' },
  { 'group': 'Absolute', 'name': 'Emma Color Me Red', 'id': 'c090_01' },
  { 'group': 'Absolute', 'name': 'Emma Office Therapy', 'id': 'c090_02' },
  { 'group': 'Absolute', 'name': 'Vesti', 'id': 'c091' },
  { 'group': 'Absolute', 'name': 'Vesti Ark Mage', 'id': 'c091_01' },
  { 'group': 'Absolute', 'name': 'Eunhwa', 'id': 'c092' },
  { 'group': 'Absolute', 'name': 'Emma: Tactical Upgrade', 'id': 'c093' },
  { 'group': 'Absolute', 'name': 'Emma: Tactical Upgrade Secret Therapy', 'id': 'c093_01' },
  { 'group': 'Absolute', 'name': 'Vesti: Tactical Upgrade', 'id': 'c094' },
  { 'group': 'Absolute', 'name': 'Vesti: Tactical Upgrade Pure Beginner', 'id': 'c094_01' },
  { 'group': 'Absolute', 'name': 'Eunhwa: Tactical Upgrade', 'id': 'c095' },
  { 'group': 'Absolute', 'name': 'Eunhwa: Tactical Upgrade Day Off', 'id': 'c095_01' },

  { 'group': 'Aegis', 'name': 'Mast', 'id': 'c350' },
  { 'group': 'Aegis', 'name': 'Mast A Pirate\'s Heart', 'id': 'c350_01' },
  { 'group': 'Aegis', 'name': 'Mast the Driver', 'id': 'c350_02' },
  { 'group': 'Aegis', 'name': 'Mast: Outdated', 'id': 'c350_old' },
  { 'group': 'Aegis', 'name': 'Anchor', 'id': 'c351' },
  { 'group': 'Aegis', 'name': 'Anchor the Diver', 'id': 'c351_01' },
  { 'group': 'Aegis', 'name': 'Helm', 'id': 'c352' },
  { 'group': 'Aegis', 'name': 'Helm Chandelier', 'id': 'c352_01' },
  { 'group': 'Aegis', 'name': 'Helm Post-Shower Moment', 'id': 'c352_02' },
  { 'group': 'Aegis', 'name': 'Helm: Aquamarine', 'id': 'c353' },
  { 'group': 'Aegis', 'name': 'Mast: Romantic Maid', 'id': 'c354' },
  { 'group': 'Aegis', 'name': 'Mast: Romantic Maid Tea Service', 'id': 'c354_01' },
  { 'group': 'Aegis', 'name': 'Anchor: Innocent Maid', 'id': 'c355' },
  { 'group': 'Aegis', 'name': 'Helm@Favorite', 'id': 'favorite_c352' },

  { 'group': 'Best Seller', 'name': 'Phantom', 'id': 'c580' },
  { 'group': 'Best Seller', 'name': 'Arcana', 'id': 'c581' },
  { 'group': 'Best Seller', 'name': 'Label', 'id': 'c582' },
  { 'group': 'Best Seller', 'name': 'Arcana: Fortune Mate', 'id': 'c583' },

  { 'group': 'Botanic Garden', 'name': 'Flora', 'id': 'c411' },
  { 'group': 'Botanic Garden', 'name': 'Trina', 'id': 'c412' },
  { 'group': 'Botanic Garden', 'name': 'Trina Natural White', 'id': 'c412_01' },

  { 'group': 'Cafe Sweety', 'name': 'Sugar', 'id': 'c140' },
  { 'group': 'Cafe Sweety', 'name': 'Sugar Hard-Boiled', 'id': 'c140_01' },
  { 'group': 'Cafe Sweety', 'name': 'Sugar Wild Backyard', 'id': 'c140_02' },
  { 'group': 'Cafe Sweety', 'name': 'Milk', 'id': 'c141' },
  { 'group': 'Cafe Sweety', 'name': 'Milk Extreme Fighter', 'id': 'c141_01' },
  { 'group': 'Cafe Sweety', 'name': 'Frima', 'id': 'c142' },
  { 'group': 'Cafe Sweety', 'name': 'Frima Sea of Sloth', 'id': 'c142_01' },
  { 'group': 'Cafe Sweety', 'name': 'Milk Blooming Bunny', 'id': 'c143' },
  { 'group': 'Cafe Sweety', 'name': 'Milk@Favorite', 'id': 'favorite_c141' },
  { 'group': 'Cafe Sweety', 'name': 'Frima@Favorite', 'id': 'favorite_c142' },

  { 'group': 'Cooking Oil', 'name': 'Bready', 'id': 'c520' },
  { 'group': 'Cooking Oil', 'name': 'Bready Frosty Bite', 'id': 'c520_01' },
  { 'group': 'Cooking Oil', 'name': 'Crust', 'id': 'c521' },










  



]