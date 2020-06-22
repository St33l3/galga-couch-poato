namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    enemy_ship.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    chip_cannons_projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 4 . 
. . . . 5 5 5 5 5 4 5 5 5 5 5 4 
. . . . 5 5 5 5 5 5 5 5 5 5 5 4 
. . . . 5 5 4 5 5 5 4 5 5 5 5 4 
. . . . 5 5 5 5 5 5 5 5 5 5 5 4 
. . . . 5 5 5 5 4 5 5 5 5 5 e . 
. . . . 5 4 5 5 5 5 5 5 4 e . . 
. . . . 5 5 5 5 5 5 5 e e . . . 
. . . . 5 5 5 5 5 4 e . . . . . 
. . . . 5 5 5 5 e e . . . . . . 
. . . . 5 5 4 e . . . . . . . . 
. . . . e e e . . . . . . . . . 
`, spacecraft_player, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let chip_cannons_projectile: Sprite = null
let enemy_ship: Sprite = null
let spacecraft_player: Sprite = null
info.setScore(0)
info.setLife(3)
spacecraft_player = sprites.create(img`
. . c c c c . . . . . . . . . 
. c 7 7 7 6 c . . . . . . . . 
c 6 7 7 7 6 c c c c c c c . . 
c 6 7 7 7 6 c 6 7 7 7 7 7 c . 
c 6 7 7 7 6 c 7 7 7 7 7 6 6 c 
c 6 7 7 7 6 c 6 6 6 6 6 6 6 c 
c 6 7 7 7 6 c c c c c c 6 6 c 
c 6 7 7 7 6 c 7 7 7 7 6 c c c 
c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
c 6 7 7 6 6 c 7 7 7 7 7 6 c . 
c 6 6 6 6 6 c c c c c c c c . 
c 6 6 6 6 6 c 6 7 7 7 7 7 c . 
c 6 6 6 6 6 c 7 7 7 7 7 6 6 c 
c 6 6 6 6 6 c 6 6 6 6 6 6 6 c 
c 6 6 6 6 6 c 6 6 6 6 6 6 6 c 
c 6 6 6 6 6 c 6 6 6 6 6 6 6 c 
. c c c c c c c c c c c c c c 
. c b b c . . . . . c b b c . 
`, SpriteKind.Player)
spacecraft_player.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(spacecraft_player)
game.onUpdateInterval(500, function () {
    enemy_ship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . . . 
. . . . . . . . . 8 8 8 8 . . . 
. . . . 9 9 9 9 8 8 8 8 8 . . . 
. . . 9 9 9 9 9 8 8 8 8 8 . . . 
. . . 2 2 2 2 2 2 2 2 2 8 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    enemy_ship.setVelocity(-100, 0)
    enemy_ship.setPosition(180, Math.randomRange(0, 120))
})
