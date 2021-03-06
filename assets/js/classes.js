function Fight (enemy, enemy_lvl) {
  this.character = cookies.character;
  this.player_lvl = parseInt(cookies.lvl);
  this.enemy = enemy;
  this.enemy_lvl = enemy_lvl;

  //Keeps track of health
  this.player_health = parseInt(data.creatures[this.character].basestats.hp)
  this.enemy_health = parseInt(data.creatures[this.enemy].basestats.hp)

  //Keeps track of attack, defense and type
  this.player_attack = parseInt(data.creatures[this.character].basestats.attack)
  this.enemy_attack = parseInt(data.creatures[this.enemy].basestats.attack)
  this.player_defense = parseInt(data.creatures[this.character].basestats.defense)
  this.enemy_defense = parseInt(data.creatures[this.enemy].basestats.defense)
  this.player_type = data.creatures[this.character].basestats.type
  this.enemy_type = data.creatures[this.enemy].basestats.type

  this.update_health = function () {
    $(".fight_area > .creatures > .player > paper-progress").attr("value", (this.player_health / data.creatures[this.character].hp) * 100)
    $(".fight_area > .creatures > .enemy > paper-progress").attr("value", (this.enemy_health / data.creatures[this.enemy].hp) * 100)
  }

  this.set_display = function () {
    //setting h1 with names and lvl of creatures
    $('.fight_area > .creatures > .player > h1 > span.name').html(this.character);
    $('.fight_area > .creatures > .enemy > h1 > span.name').html(this.enemy);
    $('.fight_area > .creatures > .player > h1 > span.lvl > span').html(this.player_lvl);
    $('.fight_area > .creatures > .enemy > h1 > span.lvl > span').html(this.enemy_lvl);

    this.update_health()
  };
}