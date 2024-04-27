namespace SpriteKind {
    export const fake_projectile = SpriteKind.create()
    export const hud = SpriteKind.create()
    export const balloon = SpriteKind.create()
    export const no_colision = SpriteKind.create()
}
sprites.onCreated(SpriteKind.fake_projectile, function (sprite) {
    timer.background(function () {
        pause(500)
        sprites.destroy(sprite)
    })
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.fake_projectile, function (sprite, otherSprite) {
    if (otherSprite.image.equals(assets.image`Red`)) {
        sprites.destroy(otherSprite)
        info.player2.changeLifeBy(-1)
    } else {
        if (info.player2.life() <= 0) {
            tiles.placeOnRandomTile(sprite, assets.tile`myTile2`)
            info.player2.setLife(10)
            path = scene.aStar(sprite.tilemapLocation(), sprite.tilemapLocation())
            scene.followPath(sprite, path)
        }
    }
})
scene.onPathCompletion(SpriteKind.Enemy, function (sprite, location) {
    if (hard_mode) {
        timer.background(function () {
            fake_projectile_spite = darts.create(assets.image`Blue`, SpriteKind.fake_projectile, mySprite2.x, mySprite2.y)
            fake_projectile_spite.setVelocity(randint(-30, 30), -100)
            fake_projectile_spite = darts.create(assets.image`Blue`, SpriteKind.fake_projectile, mySprite2.x, mySprite2.y)
            fake_projectile_spite.setVelocity(100, randint(-30, 30))
            fake_projectile_spite = darts.create(assets.image`Blue`, SpriteKind.fake_projectile, mySprite2.x, mySprite2.y)
            fake_projectile_spite.setVelocity(randint(-30, 30), 100)
            fake_projectile_spite = darts.create(assets.image`Blue`, SpriteKind.fake_projectile, mySprite2.x, mySprite2.y)
            fake_projectile_spite.setVelocity(-100, randint(-30, 30))
        })
    }
})
scene.onOverlapTile(SpriteKind.fake_projectile, assets.tile`myTile13`, function (sprite, location) {
    if (sprite.image.equals(assets.image`Red`)) {
        if (Math.percentChance(35)) {
            tiles.setTileAt(location, assets.tile`myTile16`)
            if (Math.percentChance(1)) {
                sprites.destroy(sprite)
            }
        }
    } else if (sprite.image.equals(assets.image`Blue`)) {
        tiles.setTileAt(location, assets.tile`myTile15`)
        if (Math.percentChance(1)) {
            sprites.destroy(sprite)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fake_projectile, function (sprite, otherSprite) {
    if (otherSprite.image.equals(assets.image`Blue`)) {
        sprites.destroy(otherSprite)
        info.player1.changeLifeBy(-1)
        scene.cameraShake(2, 100)
    } else {
    	
    }
    if (info.player1.life() <= 0) {
        info.player1.setLife(10)
        respawn_player()
        scene.cameraShake(2, 200)
    }
})
function MakePlayerAnimations () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a 4 f f f f 4 a . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f f f f f f f f . . . . 
        . . e b b f a a a a f b b e . . 
        . . a 1 1 a e e e e a 1 1 a . . 
        . . a c c a e e e e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a 4 f f f f 4 a . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . e 1 f f f f f f f f 1 e . . 
        . . a b b a e e e e a b b a . . 
        . . a d d a e e e e a d d a . . 
        . . f c c f a a a a f c c f . . 
        . . f d d f . . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a 4 f f f f 4 a . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . e b f f f f f f f f b e . . 
        . . a 1 1 a e e e e a 1 1 a . . 
        . . a c c a e e e e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a 4 f f f f 4 a . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f f f f f f f f . . . . 
        . . e 1 f f f f f f f f 1 e . . 
        . . a b b a e e e e a b b a . . 
        . . a d d a e e e e a d d a . . 
        . . f c c f a a a a f c c f . . 
        . . f d d f . . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a 4 f f f f 4 a . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f f f f f f f f . . . . 
        . . e b b f a a a a f b b e . . 
        . . a 1 1 a e e e e a 1 1 a . . 
        . . a c c a e e e e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a 4 f f f f 4 a . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . e b f f f f f f f f b e . . 
        . . a 1 1 a a a a a a 1 1 a . . 
        . . a c c a e e e e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a 4 f f f f 4 a . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . e b f f f f f f f f b e . . 
        . . a 1 1 a a a a a a 1 1 a . . 
        . . a c c a e e e e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a 4 f f f f 4 a . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f f f f f f f f . . . . 
        . . e b f f f f f f f f b e . . 
        . . a 1 1 a e e e e a 1 1 a . . 
        . . a c c a e e e e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . f f e e e e e a . . . . 
        . . . . f a f a a a a a a . . . 
        . . . . f a f 3 3 3 3 3 a . . . 
        . . . . f a f 3 e 3 3 e a . . . 
        . . . . f a f 2 a 2 2 a f . . . 
        . . . . . f f f f f f f f . . . 
        . . . e b b f a a a f b b e . . 
        . . f a e 1 1 a 2 4 f e 1 1 a . 
        . . f a a c c a 3 2 f a c c a . 
        . . f a f d d f a a f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . . f f f e e e e e a . . . 
        . . . . f f a f a a a a a a . . 
        . . . . f f a f 3 3 3 3 3 a . . 
        . . . . f f a f 3 e 3 3 e a . . 
        . . . . f f a f 2 a 2 2 a f . . 
        . . . . . f f f f f f f f f . . 
        . . . e 1 1 f a a a f 1 1 e . . 
        . . f a e b b a 2 4 f e b b a . 
        . . f a a 1 1 a 3 2 f a 1 1 a . 
        . . f a f c c f a a f f c c f . 
        . . . f d d f . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a a a . . . . 
        . . . . . f f e e e e e a . . . 
        . . . . . f a f a a a a a a . . 
        . . . . . f a f 3 3 3 3 3 a . . 
        . . . . . f a f 3 e 3 3 e a . . 
        . . . . . f a f 2 a 2 2 a f . . 
        . . . . . . f f f f f f f f . . 
        . . . e b b f a a a f b b e . . 
        . . f a e 1 1 a 2 4 f e 1 1 a . 
        . . f a a c c a 3 2 f a c c a . 
        . . f a f d d f a a f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . f f e e e e e a . . . . 
        . . . . f a f a a a a a a . . . 
        . . . . f a f 3 3 3 3 3 a . . . 
        . . . . f a f 3 e 3 3 e a . . . 
        . . . . f a f 2 a 2 2 a f . . . 
        . . . . . f f f f f f f f . . . 
        . . . e 1 1 f a a a f 1 1 e . . 
        . . f a e b b a 2 4 f e b b a . 
        . . f a a 1 1 a 3 2 f a 1 1 a . 
        . . f a f c c f a a f f c c f . 
        . . . f d d f . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . f f e e e e e a . . . . 
        . . . . f a f a a a a a a . . . 
        . . . . f a f 3 3 3 3 3 a . . . 
        . . . . f a f 3 e 3 3 e a . . . 
        . . . . f a f 2 a 2 2 a f . . . 
        . . . . . f f f f f f f f . . . 
        . . . e b b f a a a f b b e . . 
        . . f a e 1 1 a 2 4 f e 1 1 a . 
        . . f a a c c a 3 2 f a c c a . 
        . . f a f d d f a a f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . f a a a a a a a . . . . 
        . . . . f f e e e e e a a . . . 
        . . . . f a f a a a a a a . . . 
        . . . . f a f 3 3 3 3 3 a . . . 
        . . . . f a f 3 e 3 3 e a . . . 
        . . . . f a f 2 a 2 2 a f . . . 
        . . . e b f f f f f f f f e . . 
        . . f a e 1 1 a a 3 f e 1 1 a . 
        . . f a a c c a 3 2 f a c c a . 
        . . f a f d d f a a f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . f f e e e e e a . . . . 
        . . . . f a f a a a a a a . . . 
        . . . . f a f 3 3 3 3 3 a . . . 
        . . . . f a f 3 e 3 3 e a . . . 
        . . . . f a f 2 a 2 2 a f . . . 
        . . . e b f f f f f f f f e . . 
        . . f a e 1 1 a a 3 f e 1 1 a . 
        . . f a a c c a 3 2 f a c c a . 
        . . f a f d d f a a f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . f f e e e e e a . . . . 
        . . . . f a f a a a a a a . . . 
        . . . . f a f 3 3 3 3 3 a . . . 
        . . . . f a f 3 e 3 3 e a . . . 
        . . . . f a f 2 a 2 2 a f . . . 
        . . . . . f f f f f f f f . . . 
        . . . e b b f a a a f b b e . . 
        . . f a e 1 1 a 2 4 f e 1 1 a . 
        . . f a a c c a 3 2 f a c c a . 
        . . f a f d d f a a f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a 3 3 3 3 3 3 a . . . . 
        . . . . a 3 e 3 3 e 3 a . . . . 
        . . . . f 2 a 2 2 a 2 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . e b b f a a a a f b b e . . 
        . . a 1 1 a e 4 2 e a 1 1 a . . 
        . . a c c a e 2 3 e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . a f f f f a . . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a 3 3 3 3 3 3 a . . . . 
        . . . . a 3 e 3 3 e 3 a . . . . 
        . . . . f 2 a 2 2 a 2 f . . . . 
        . . e 1 f f f f f f f f 1 e . . 
        . . a b b f a 3 a a f b b a . . 
        . . a 1 1 a e 2 3 e a 1 1 a . . 
        . . f c c f a a a a f c c f . . 
        . . f d d f . . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a 3 3 3 3 3 3 a . . . . 
        . . . . a 3 e 3 3 e 3 a . . . . 
        . . . . f 2 a 2 2 a 2 f . . . . 
        . . e b f f f f f f f f b e . . 
        . . a 1 1 f a 3 a a f 1 1 a . . 
        . . a c c a e 2 3 e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a 3 3 3 3 3 3 a . . . . 
        . . . . a 3 e 3 3 e 3 a . . . . 
        . . . . f 2 a 2 2 a 2 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . e 1 1 f a a a a f 1 1 e . . 
        . . a b b a e 4 2 e a b b a . . 
        . . a 1 1 a e 2 3 e a 1 1 a . . 
        . . f c c f a a a a f c c f . . 
        . . f d d f . . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a 3 3 3 3 3 3 a . . . . 
        . . . . a 3 e 3 3 e 3 a . . . . 
        . . . . f 2 a 2 2 a 2 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . e b b f a a a a f b b e . . 
        . . a 1 1 a e 4 2 e a 1 1 a . . 
        . . a c c a e 2 3 e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . a f f f f a . . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a 3 3 3 3 3 3 a . . . . 
        . . . . a 3 e 3 3 e 3 a . . . . 
        . . . . f 2 a 2 2 a 2 f . . . . 
        . . e b f f f f f f f f b e . . 
        . . a 1 1 f a 3 a a f 1 1 a . . 
        . . a c c a e 2 3 e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a 3 3 3 3 3 3 a . . . . 
        . . . . a 3 e 3 3 e 3 a . . . . 
        . . . . f 2 a 2 2 a 2 f . . . . 
        . . e b f f f f f f f f b e . . 
        . . a 1 1 f a 3 a a f 1 1 a . . 
        . . a c c a e 2 3 e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e e a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a 3 3 3 3 3 3 a . . . . 
        . . . . a 3 e 3 3 e 3 a . . . . 
        . . . . f 2 a 2 2 a 2 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . e b b f a a a a f b b e . . 
        . . a 1 1 a e 4 2 e a 1 1 a . . 
        . . a c c a e 2 3 e a c c a . . 
        . . f d d f a a a a f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e f f . . . . 
        . . . a a a a a a f a f . . . . 
        . . . a 3 3 3 3 3 f a f . . . . 
        . . . a e 3 3 e 3 f a f . . . . 
        . . . f a 2 2 a 2 f a f . . . . 
        . . . f f f f f f f f . . . . . 
        . . e b b f a a a f b b e . . . 
        . a 1 1 e f 4 2 a 1 1 e a f . . 
        . a c c a f 2 3 a c c a a f . . 
        . f d d f f a a f d d f a f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . a e e e e e f f f . . . . 
        . . a a a a a a f a f f . . . . 
        . . a 3 3 3 3 3 f a f f . . . . 
        . . a e 3 3 e 3 f a f f . . . . 
        . . f a 2 2 a 2 f a f f . . . . 
        . . f f f f f f f f f . . . . . 
        . . e 1 1 f a a a f 1 1 e . . . 
        . a b b e f 4 2 a b b e a f . . 
        . a 1 1 a f 2 3 a 1 1 a a f . . 
        . f c c f f a a f c c f a f . . 
        . . f d d f . . . f d d f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a . . . . . . 
        . . . a e e e e e f f . . . . . 
        . . a a a a a a f a f . . . . . 
        . . a 3 3 3 3 3 f a f . . . . . 
        . . a e 3 3 e 3 f a f . . . . . 
        . . f a 2 2 a 2 f a f . . . . . 
        . . f f f f f f f f . . . . . . 
        . . e b b f a a a f b b e . . . 
        . a 1 1 e f 4 2 a 1 1 e a f . . 
        . a c c a f 2 3 a c c a a f . . 
        . f d d f f a a f d d f a f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e f f . . . . 
        . . . a a a a a a f a f . . . . 
        . . . a 3 3 3 3 3 f a f . . . . 
        . . . a e 3 3 e 3 f a f . . . . 
        . . . f a 2 2 a 2 f a f . . . . 
        . . . f f f f f f f f . . . . . 
        . . e 1 1 f a a a f 1 1 e . . . 
        . a b b e f 4 2 a b b e a f . . 
        . a 1 1 a f 2 3 a 1 1 a a f . . 
        . f c c f f a a f c c f a f . . 
        . . f d d f . . . f d d f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e f f . . . . 
        . . . a a a a a a f a f . . . . 
        . . . a 3 3 3 3 3 f a f . . . . 
        . . . a e 3 3 e 3 f a f . . . . 
        . . . f a 2 2 a 2 f a f . . . . 
        . . . f f f f f f f f . . . . . 
        . . e b b f a a a f b b e . . . 
        . a 1 1 e f 4 2 a 1 1 e a f . . 
        . a c c a f 2 3 a c c a a f . . 
        . f d d f f a a f d d f a f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a a a a a a a f . . . . 
        . . . a a e e e e e f f . . . . 
        . . . a a a a a a f a f . . . . 
        . . . a 3 3 3 3 3 f a f . . . . 
        . . . a e 3 3 e 3 f a f . . . . 
        . . . f a 2 2 a 2 f a f . . . . 
        . . e f f f f f f f f b e . . . 
        . a 1 1 e f 3 a a 1 1 e a f . . 
        . a c c a f 2 3 a c c a a f . . 
        . f d d f f a a f d d f a f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e f f . . . . 
        . . . a a a a a a f a f . . . . 
        . . . a 3 3 3 3 3 f a f . . . . 
        . . . a e 3 3 e 3 f a f . . . . 
        . . . f a 2 2 a 2 f a f . . . . 
        . . e f f f f f f f f b e . . . 
        . a 1 1 e f 3 a a 1 1 e a f . . 
        . a c c a f 2 3 a c c a a f . . 
        . f d d f f a a f d d f a f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a e e e e e f f . . . . 
        . . . a a a a a a f a f . . . . 
        . . . a 3 3 3 3 3 f a f . . . . 
        . . . a e 3 3 e 3 f a f . . . . 
        . . . f a 2 2 a 2 f a f . . . . 
        . . . f f f f f f f f . . . . . 
        . . e b b f a a a f b b e . . . 
        . a 1 1 e f 4 2 a 1 1 e a f . . 
        . a c c a f 2 3 a c c a a f . . 
        . f d d f f a a f d d f a f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
}
scene.onOverlapTile(SpriteKind.fake_projectile, assets.tile`myTile0`, function (sprite, location) {
    if (sprite.image.equals(assets.image`Red`)) {
        if (Math.percentChance(35)) {
            tiles.setTileAt(location, assets.tile`myTile1`)
            if (Math.percentChance(1)) {
                sprites.destroy(sprite)
            }
        }
    } else if (sprite.image.equals(assets.image`Blue`)) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        if (Math.percentChance(1)) {
            sprites.destroy(sprite)
        }
    }
})
scene.onOverlapTile(SpriteKind.fake_projectile, assets.tile`myTile15`, function (sprite, location) {
    if (sprite.image.equals(assets.image`Red`)) {
        if (Math.percentChance(35)) {
            tiles.setTileAt(location, assets.tile`myTile16`)
            if (Math.percentChance(1)) {
                sprites.destroy(sprite)
            }
        }
    } else if (sprite.image.equals(assets.image`Blue`)) {
        tiles.setTileAt(location, assets.tile`myTile15`)
        if (Math.percentChance(1)) {
            sprites.destroy(sprite)
        }
    }
})
scene.onOverlapTile(SpriteKind.fake_projectile, assets.tile`myTile16`, function (sprite, location) {
    if (sprite.image.equals(assets.image`Red`)) {
        if (Math.percentChance(35)) {
            tiles.setTileAt(location, assets.tile`myTile16`)
            if (Math.percentChance(1)) {
                sprites.destroy(sprite)
            }
        }
    } else if (sprite.image.equals(assets.image`Blue`)) {
        tiles.setTileAt(location, assets.tile`myTile15`)
        if (Math.percentChance(1)) {
            sprites.destroy(sprite)
        }
    }
})
info.onCountdownEnd(function () {
    if (time_attack) {
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            player_ink += 1
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
            player_ink += 1
        }
        game.splash("You got " + player_ink + " points out of 1180 possible points")
        game.splash("You got " + player_ink + " points out of 1180 possible points")
        game.splash("You got " + player_ink + " points out of 1180 possible points")
        info.setScore(player_ink)
        game.gameOver(true)
    } else {
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            cpu_ink += 1
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            player_ink += 1
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
            cpu_ink += 1
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
            player_ink += 1
        }
        if (player_ink == cpu_ink) {
            game.splash("TIE! player: " + player_ink + "p computer:" + cpu_ink + "p")
            game.splash("TIE! player: " + player_ink + "p computer:" + cpu_ink + "p")
            game.splash("TIE! player: " + player_ink + "p computer:" + cpu_ink + "p")
        } else if (player_ink > cpu_ink) {
            game.splash("PLAYER WINS! player: " + player_ink + "p computer:" + cpu_ink + "p")
            game.splash("PLAYER WINS! player: " + player_ink + "p computer:" + cpu_ink + "p")
            game.splash("PLAYER WINS! player: " + player_ink + "p computer:" + cpu_ink + "p")
        } else if (player_ink < cpu_ink) {
            game.splash("COMPUTER WINS! player: " + player_ink + "p computer:" + cpu_ink + "p")
            game.splash("COMPUTER WINS! player: " + player_ink + "p computer:" + cpu_ink + "p")
            game.splash("COMPUTER WINS! player: " + player_ink + "p computer:" + cpu_ink + "p")
        }
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.fake_projectile, assets.tile`myTile`, function (sprite, location) {
    if (sprite.image.equals(assets.image`Red`)) {
        if (Math.percentChance(35)) {
            tiles.setTileAt(location, assets.tile`myTile1`)
            if (Math.percentChance(1)) {
                sprites.destroy(sprite)
            }
        }
    } else if (sprite.image.equals(assets.image`Blue`)) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        if (Math.percentChance(1)) {
            sprites.destroy(sprite)
        }
    }
})
sprites.onDestroyed(SpriteKind.fake_projectile, function (sprite) {
    if (sprite.image.equals(assets.image`Red`)) {
        extraEffects.createSpreadEffectOnAnchor(sprite, ShootRed, 100, 5, 100)
    } else if (sprite.image.equals(assets.image`Blue`)) {
        extraEffects.createSpreadEffectOnAnchor(sprite, ShootBlue, 100, 5, 100)
    }
})
function make_enemy () {
    mySprite2 = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, SpriteKind.Enemy)
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c d f f f f d c . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . b b b f 8 8 8 8 f b b b . . 
        . . c 1 1 c b b b b c 1 1 c . . 
        . . c c c c b b b b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c d f f f f d c . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . b 1 f f f f f f f f 1 b . . 
        . . c b b c 8 8 8 8 c b b c . . 
        . . c d d c b b b b c d d c . . 
        . . f c c f c c c c f c c f . . 
        . . f d d f . . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c d f f f f d c . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . b b f f f f f f f f b b . . 
        . . c 1 1 c 8 8 8 8 c 1 1 c . . 
        . . c c c c b b b b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c d f f f f d c . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . b 1 f f f f f f f f 1 b . . 
        . . c b b c 8 8 8 8 c b b c . . 
        . . c d d c b b b b c d d c . . 
        . . f c c f c c c c f c c f . . 
        . . f d d f . . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c d f f f f d c . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . b b b f 8 8 8 8 f b b b . . 
        . . c 1 1 c b b b b c 1 1 c . . 
        . . c c c c b b b b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c d f f f f d c . . . . 
        . . . . f b f f f f b f . . . . 
        . . . . f b f f f f b f . . . . 
        . . . . f b f f f f b f . . . . 
        . . b b f f f f f f f f b b . . 
        . . c 1 1 c 8 8 8 8 c 1 1 c . . 
        . . c c c c b b b b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c d f f f f d c . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . b b f f f f f f f f b b . . 
        . . c 1 1 c 8 8 8 8 c 1 1 c . . 
        . . c c c c b b b b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c d f f f f d c . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f 8 f f f f 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . b b f f f f f f f f b b . . 
        . . c 1 1 c 8 8 8 8 c 1 1 c . . 
        . . c c c c b b b b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . f f b b b b b c . . . . 
        . . . . f c f c c c c c c . . . 
        . . . . f c f 9 9 9 9 9 c . . . 
        . . . . f c f 9 b 9 9 b c . . . 
        . . . . f c f 8 c 8 8 c f . . . 
        . . . . . f f f f f f f f . . . 
        . . . b b b f c c c f b b b . . 
        . . f c b 1 1 c 8 1 f b 1 1 c . 
        . . f c c c c c 9 8 f c c c c . 
        . . f c f d d f c c f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . f f f b b b b b c . . . 
        . . . . f f c f c c c c c c . . 
        . . . . f f c f 9 9 9 9 9 c . . 
        . . . . f f c f 9 b 9 9 b c . . 
        . . . . f f c f 8 c 8 8 c f . . 
        . . . . . f f f f f f f f f . . 
        . . . b 1 1 f c c c f 1 1 b . . 
        . . f c b b b c 8 1 f b b b c . 
        . . f c c 1 1 c 9 8 f c 1 1 c . 
        . . f c f c c f c c f f c c f . 
        . . . f d d f . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c c c . . . . 
        . . . . . f f b b b b b c . . . 
        . . . . . f c f c c c c c c . . 
        . . . . . f c f 9 9 9 9 9 c . . 
        . . . . . f c f 9 b 9 9 b c . . 
        . . . . . f c f 8 c 8 8 c f . . 
        . . . . . . f f f f f f f f . . 
        . . . b b b f c c c f b b b . . 
        . . f c b 1 1 c 8 1 f b 1 1 c . 
        . . f c c c c c 9 8 f c c c c . 
        . . f c f d d f c c f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . f f b b b b b c . . . . 
        . . . . f c f c c c c c c . . . 
        . . . . f c f 9 9 9 9 9 c . . . 
        . . . . f c f 9 b 9 9 b c . . . 
        . . . . f c f 8 c 8 8 c f . . . 
        . . . . . f f f f f f f f . . . 
        . . . b 1 1 f c c c f 1 1 b . . 
        . . f c b b b c 8 1 f b b b c . 
        . . f c c 1 1 c 9 8 f c 1 1 c . 
        . . f c f c c f c c f f c c f . 
        . . . f d d f . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . f f b b b b b c . . . . 
        . . . . f c f c c c c c c . . . 
        . . . . f c f 9 9 9 9 9 c . . . 
        . . . . f c f 9 b 9 9 b c . . . 
        . . . . f c f 8 c 8 8 c f . . . 
        . . . . . f f f f f f f f . . . 
        . . . b b b f c c c f b b b . . 
        . . f c b 1 1 c 8 1 f b 1 1 c . 
        . . f c c c c c 9 8 f c c c c . 
        . . f c f d d f c c f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . f c c c c c c c . . . . 
        . . . . f f b b b b b c c . . . 
        . . . . f c f c c c c c c . . . 
        . . . . f c f 9 9 9 9 9 c . . . 
        . . . . f c f 9 b 9 9 b c . . . 
        . . . . f c f 8 c 8 8 c f . . . 
        . . . b b f f f f f f f f b . . 
        . . f c b 1 1 c 8 1 f b 1 1 c . 
        . . f c c c c c 9 8 f c c c c . 
        . . f c f d d f c c f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . f f b b b b b c . . . . 
        . . . . f c f c c c c c c . . . 
        . . . . f c f 9 9 9 9 9 c . . . 
        . . . . f c f 9 b 9 9 b c . . . 
        . . . . f c f 8 c 8 8 c f . . . 
        . . . b b f f f f f f f f b . . 
        . . f c b 1 1 c 8 1 f b 1 1 c . 
        . . f c c c c c 9 8 f c c c c . 
        . . f c f d d f c c f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . f f b b b b b c . . . . 
        . . . . f c f c c c c c c . . . 
        . . . . f c f 9 9 9 9 9 c . . . 
        . . . . f c f 9 b 9 9 b c . . . 
        . . . . f c f 8 c 8 8 c f . . . 
        . . . . . f f f f f f f f . . . 
        . . . b b b f c c c f b b b . . 
        . . f c b 1 1 c 8 1 f b 1 1 c . 
        . . f c c c c c 9 8 f c c c c . 
        . . f c f d d f c c f f d d f . 
        . . . f c c f . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 b 9 9 b 9 c . . . . 
        . . . . f 8 c 8 8 c 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . 8 b b f c c c c f b b 8 . . 
        . . c 1 1 c b 1 8 b c 1 1 c . . 
        . . c b b c b 8 9 b c b b c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . c f f f f c . . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 b 9 9 b 9 c . . . . 
        . . . . f 8 c 8 8 c 8 f . . . . 
        . . 8 1 f f f f f f f f 1 8 . . 
        . . c b b f c 9 c c f b b c . . 
        . . c 1 1 c b 8 9 b c 1 1 c . . 
        . . f c c f c c c c f c c f . . 
        . . f d d f . . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 b 9 9 b 9 c . . . . 
        . . . . f 8 c 8 8 c 8 f . . . . 
        . . 8 b f f f f f f f f b 8 . . 
        . . c 1 1 f c 9 c c f 1 1 c . . 
        . . c c c c b 8 9 b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 b 9 9 b 9 c . . . . 
        . . . . f 8 c 8 8 c 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . 8 1 1 f c c c c f 1 1 8 . . 
        . . c b b c b 1 8 b c b b c . . 
        . . c 1 1 c b 8 9 b c 1 1 c . . 
        . . f c c f c c c c f c c f . . 
        . . f d d f . . . . f d d f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 b 9 9 b 9 c . . . . 
        . . . . f 8 c 8 8 c 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . 8 b b f c c c c f b b 8 . . 
        . . c 1 1 c b 1 8 b c 1 1 c . . 
        . . c b b c b 8 9 b c b b c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . c f f f f c . . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 b 9 9 b 9 c . . . . 
        . . . . f 8 c 8 8 c 8 f . . . . 
        . . b b f f f f f f f f b b . . 
        . . c 1 1 f c 9 c c f 1 1 c . . 
        . . c c c c b 8 9 b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 b 9 9 b 9 c . . . . 
        . . . . f 8 c 8 8 c 8 f . . . . 
        . . b b f f f f f f f f b b . . 
        . . c 1 1 f c 9 c c f 1 1 c . . 
        . . c c c c b 8 9 b c c c c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 b 9 9 b 9 c . . . . 
        . . . . f 8 c 8 8 c 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . 8 b b f c c c c f b b 8 . . 
        . . c 1 1 c b 1 8 b c 1 1 c . . 
        . . c b b c b 8 9 b c b b c . . 
        . . f d d f c c c c f d d f . . 
        . . f c c f . . . . f c c f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b f f . . . . 
        . . . c c c c c c f c f . . . . 
        . . . c 9 9 9 9 9 f c f . . . . 
        . . . c b 9 9 b 9 f c f . . . . 
        . . . f c 8 8 c 8 f c f . . . . 
        . . . f f f f f f f f . . . . . 
        . . b b b f c c c f b b b . . . 
        . c 1 1 b f 1 8 c 1 1 b c f . . 
        . c c c c f 8 9 c c c c c f . . 
        . f d d f f c c f d d f c f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c . . . . . 
        . . . c b b b b b f f f . . . . 
        . . c c c c c c f c f f . . . . 
        . . c 9 9 9 9 9 f c f f . . . . 
        . . c b 9 9 b 9 f c f f . . . . 
        . . f c 8 8 c 8 f c f f . . . . 
        . . f f f f f f f f f . . . . . 
        . . b 1 1 f c c c f 1 1 b . . . 
        . c b b b f 1 8 c b b b c f . . 
        . c 1 1 c f 8 9 c 1 1 c c f . . 
        . f c c f f c c f c c f c f . . 
        . . f d d f . . . f d d f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . c b b b b b f f . . . . . 
        . . c c c c c c f c f . . . . . 
        . . c 9 9 9 9 9 f c f . . . . . 
        . . c b 9 9 b 9 f c f . . . . . 
        . . f c 8 8 c 8 f c f . . . . . 
        . . f f f f f f f f . . . . . . 
        . . b b b f c c c f b b b . . . 
        . c 1 1 b f 1 8 c 1 1 b c f . . 
        . c c c c f 8 9 c c c c c f . . 
        . f d d f f c c f d d f c f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b f f . . . . 
        . . . c c c c c c f c f . . . . 
        . . . c 9 9 9 9 9 f c f . . . . 
        . . . c b 9 9 b 9 f c f . . . . 
        . . . f c 8 8 c 8 f c f . . . . 
        . . . f f f f f f f f . . . . . 
        . . b 1 1 f c c c f 1 1 b . . . 
        . c b b b f 1 8 c b b b c f . . 
        . c 1 1 c f 8 9 c 1 1 c c f . . 
        . f c c f f c c f c c f c f . . 
        . . f d d f . . . f d d f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b f f . . . . 
        . . . c c c c c c f c f . . . . 
        . . . c 9 9 9 9 9 f c f . . . . 
        . . . c b 9 9 b 9 f c f . . . . 
        . . . f c 8 8 c 8 f c f . . . . 
        . . . f f f f f f f f . . . . . 
        . . b b b f c c c f b b b . . . 
        . c 1 1 b f 1 8 c 1 1 b c f . . 
        . c c c c f 8 9 c c c c c f . . 
        . f d d f f c c f d d f c f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c c c c c c c f . . . . 
        . . . c c b b b b b f f . . . . 
        . . . c c c c c c f c f . . . . 
        . . . c 9 9 9 9 9 f c f . . . . 
        . . . c b 9 9 b 9 f c f . . . . 
        . . . f c 8 8 c 8 f c f . . . . 
        . . b f f f f f f f f b b . . . 
        . c 1 1 b f 1 8 c 1 1 b c f . . 
        . c c c c f 8 9 c c c c c f . . 
        . f d d f f c c f d d f c f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b f f . . . . 
        . . . c c c c c c f c f . . . . 
        . . . c 9 9 9 9 9 f c f . . . . 
        . . . c b 9 9 b 9 f c f . . . . 
        . . . f c 8 8 c 8 f c f . . . . 
        . . b f f f f f f f f b b . . . 
        . c 1 1 b f 1 8 c 1 1 b c f . . 
        . c c c c f 8 9 c c c c c f . . 
        . f d d f f c c f d d f c f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b f f . . . . 
        . . . c c c c c c f c f . . . . 
        . . . c 9 9 9 9 9 f c f . . . . 
        . . . c b 9 9 b 9 f c f . . . . 
        . . . f c 8 8 c 8 f c f . . . . 
        . . . f f f f f f f f . . . . . 
        . . b b b f c c c f b b b . . . 
        . c 1 1 b f 1 8 c 1 1 b c f . . 
        . c c c c f 8 9 c c c c c f . . 
        . f d d f f c c f d d f c f . . 
        . . f c c f . . . f c c f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
    cpu_spawned = true
}
scene.onOverlapTile(SpriteKind.fake_projectile, assets.tile`myTile1`, function (sprite, location) {
    if (sprite.image.equals(assets.image`Red`)) {
        if (Math.percentChance(35)) {
            tiles.setTileAt(location, assets.tile`myTile1`)
            if (Math.percentChance(1)) {
                sprites.destroy(sprite)
            }
        }
    } else if (sprite.image.equals(assets.image`Blue`)) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        if (Math.percentChance(1)) {
            sprites.destroy(sprite)
        }
    }
})
function respawn_player () {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
    mySprite.x += 4
    mySprite.y += 4
}
info.player1.onLifeZero(function () {
	
})
info.player2.onLifeZero(function () {
	
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Enemy, 100, function (sprite) {
    if (!(scene.spriteIsFollowingPath(sprite))) {
        if (Math.percentChance(25)) {
            path = scene.aStar(sprite.tilemapLocation(), tiles.getTilesByType(assets.tile`myTile`)._pickRandom())
        } else if (Math.percentChance(25)) {
            path = scene.aStar(sprite.tilemapLocation(), tiles.getTilesByType(assets.tile`myTile13`)._pickRandom())
        } else if (Math.percentChance(25)) {
            path = scene.aStar(sprite.tilemapLocation(), tiles.getTilesByType(assets.tile`myTile1`)._pickRandom())
        } else if (Math.percentChance(25)) {
            path = scene.aStar(sprite.tilemapLocation(), tiles.getTilesByType(assets.tile`myTile16`)._pickRandom())
        }
        scene.followPath(sprite, path, 50)
    } else {
    	
    }
})
let swim_form = false
let cpu_spawned = false
let cpu_ink = 0
let player_ink = 0
let mySprite2: Sprite = null
let fake_projectile_spite: Dart = null
let path: tiles.Location[] = []
let hard_mode = false
let time_attack = false
let mySprite: Sprite = null
let ShootBlue: SpreadEffectData = null
let ShootRed: SpreadEffectData = null
ShootRed = extraEffects.createCustomSpreadEffectData(
[
1,
4,
2,
2,
3
],
false,
extraEffects.createGrowingSizeTable(3),
extraEffects.createPercentageRange(50, 100),
extraEffects.createPercentageRange(50, 100),
extraEffects.createTimeRange(100, 100)
)
ShootBlue = extraEffects.createCustomSpreadEffectData(
[
1,
9,
11,
8,
8
],
false,
extraEffects.createGrowingSizeTable(3),
extraEffects.createPercentageRange(50, 100),
extraEffects.createPercentageRange(50, 100),
extraEffects.createTimeRange(100, 100)
)
extraEffects.createSpreadEffectAt(ShootRed, 75, 55, 100, 4, 100)
stats.turnStats(true)
let maps = [
tileUtil.createSmallMap(tilemap`level15`),
tileUtil.createSmallMap(tilemap`level30`),
tileUtil.createSmallMap(tilemap`level33`),
tileUtil.createSmallMap(tilemap`level38`)
]
scene.setBackgroundImage(assets.image`Ink`)
pauseUntil(() => controller.A.isPressed())
mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
story.showPlayerChoices("turf war", "time attack")
if (story.checkLastAnswer("turf war")) {
    time_attack = false
    hard_mode = game.ask("Hard mode?")
    tiles.setCurrentTilemap(maps._pickRandom())
    tileUtil.setWalls(assets.tile`myTile5`, true)
    tileUtil.setWalls(assets.tile`myTile12`, true)
    make_enemy()
    respawn_player()
    info.startCountdown(90)
    info.player2.setLife(10)
    info.player1.setLife(10)
} else if (story.checkLastAnswer("time attack")) {
    time_attack = true
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level15`))
    respawn_player()
    info.startCountdown(30)
} else {
    game.reset()
}
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
let statusbar = statusbars.create(20, 3, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setColor(2, 10, 4)
statusbar.setBarBorder(1, 15)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
game.setGameOverPlayable(true, music.createSoundEffect(WaveShape.Sine, 1, 0, 0, 0, 1, SoundExpressionEffect.None, InterpolationCurve.Linear), false)
MakePlayerAnimations()
game.onUpdate(function () {
    controller.moveSprite(mySprite, 50, 50)
    mySprite.setFlag(SpriteFlag.Invisible, false)
    swim_form = false
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile16`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile7`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`))) {
        if (controller.B.isPressed()) {
            controller.moveSprite(mySprite, 75, 75)
            mySprite.setFlag(SpriteFlag.Invisible, true)
            swim_form = true
        }
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile15`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`))) {
        controller.moveSprite(mySprite, 25, 25)
    }
})
game.onUpdateInterval(700, function () {
    if (swim_form) {
        if (info.player1.life() < 10) {
            info.player1.changeLifeBy(1)
            scene.cameraShake(2, 100)
        }
    }
})
forever(function () {
    if (cpu_spawned) {
        if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingUp))) {
            fake_projectile_spite = darts.create(assets.image`Blue`, SpriteKind.fake_projectile, mySprite2.x, mySprite2.y)
            fake_projectile_spite.setVelocity(randint(-30, 30), -100)
        } else if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingRight))) {
            fake_projectile_spite = darts.create(assets.image`Blue`, SpriteKind.fake_projectile, mySprite2.x, mySprite2.y)
            fake_projectile_spite.setVelocity(100, randint(-30, 30))
        } else if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingDown))) {
            fake_projectile_spite = darts.create(assets.image`Blue`, SpriteKind.fake_projectile, mySprite2.x, mySprite2.y)
            fake_projectile_spite.setVelocity(randint(-30, 30), 100)
        } else if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingLeft))) {
            fake_projectile_spite = darts.create(assets.image`Blue`, SpriteKind.fake_projectile, mySprite2.x, mySprite2.y)
            fake_projectile_spite.setVelocity(-100, randint(-30, 30))
        }
        if (hard_mode) {
            pause(75)
        } else {
            pause(125)
        }
    }
})
forever(function () {
    if (controller.A.isPressed() && (statusbar.value >= 1 && !(swim_form))) {
        extraEffects.createSpreadEffectOnAnchor(mySprite, ShootRed, 100, 10, 50)
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp))) {
            fake_projectile_spite = darts.create(assets.image`Red`, SpriteKind.fake_projectile, mySprite.x, mySprite.y)
            fake_projectile_spite.setVelocity(randint(-30, 30), -100)
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
            fake_projectile_spite = darts.create(assets.image`Red`, SpriteKind.fake_projectile, mySprite.x, mySprite.y)
            fake_projectile_spite.setVelocity(100, randint(-30, 30))
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown))) {
            fake_projectile_spite = darts.create(assets.image`Red`, SpriteKind.fake_projectile, mySprite.x, mySprite.y)
            fake_projectile_spite.setVelocity(randint(-30, 30), 100)
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
            fake_projectile_spite = darts.create(assets.image`Red`, SpriteKind.fake_projectile, mySprite.x, mySprite.y)
            fake_projectile_spite.setVelocity(-100, randint(-30, 30))
        }
        statusbar.value += -2
    }
    pause(125)
})
game.onUpdateInterval(150, function () {
    if (!(controller.A.isPressed())) {
        statusbar.value += 1
    }
    if (swim_form) {
        if (hard_mode) {
            statusbar.value += 2
        } else {
            statusbar.value += 5
        }
    }
})
game.onUpdateInterval(1250, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile15`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`))) {
        info.changeLifeBy(-1)
    }
})
