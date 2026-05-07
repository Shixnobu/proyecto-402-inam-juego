gdjs.menu_32principalCode = {};
gdjs.menu_32principalCode.localVariables = [];
gdjs.menu_32principalCode.idToCallbackMap = new Map();
gdjs.menu_32principalCode.GDNewTiledSpriteObjects1= [];
gdjs.menu_32principalCode.GDNewTiledSpriteObjects2= [];
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1= [];
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects2= [];
gdjs.menu_32principalCode.GDNewTextObjects1= [];
gdjs.menu_32principalCode.GDNewTextObjects2= [];
gdjs.menu_32principalCode.GDcloud_95953Objects1= [];
gdjs.menu_32principalCode.GDcloud_95953Objects2= [];
gdjs.menu_32principalCode.GDNotJamThirdDimension15Objects1= [];
gdjs.menu_32principalCode.GDNotJamThirdDimension15Objects2= [];
gdjs.menu_32principalCode.GDGrass_9595and_9595Tree_9595BackgroundObjects1= [];
gdjs.menu_32principalCode.GDGrass_9595and_9595Tree_9595BackgroundObjects2= [];
gdjs.menu_32principalCode.GDCastles_9595BackgroundObjects1= [];
gdjs.menu_32principalCode.GDCastles_9595BackgroundObjects2= [];
gdjs.menu_32principalCode.GDDino_9595Doux2Objects1= [];
gdjs.menu_32principalCode.GDDino_9595Doux2Objects2= [];
gdjs.menu_32principalCode.GDbloque2Objects1= [];
gdjs.menu_32principalCode.GDbloque2Objects2= [];
gdjs.menu_32principalCode.GDDino_9595Doux3Objects1= [];
gdjs.menu_32principalCode.GDDino_9595Doux3Objects2= [];
gdjs.menu_32principalCode.GDDino_9595Doux4Objects1= [];
gdjs.menu_32principalCode.GDDino_9595Doux4Objects2= [];
gdjs.menu_32principalCode.GDCoin_9595GoldObjects1= [];
gdjs.menu_32principalCode.GDCoin_9595GoldObjects2= [];
gdjs.menu_32principalCode.GDChicken_9595imagenaeObjects1= [];
gdjs.menu_32principalCode.GDChicken_9595imagenaeObjects2= [];
gdjs.menu_32principalCode.GDfireballObjects1= [];
gdjs.menu_32principalCode.GDfireballObjects2= [];
gdjs.menu_32principalCode.GDtxt_9595cdObjects1= [];
gdjs.menu_32principalCode.GDtxt_9595cdObjects2= [];
gdjs.menu_32principalCode.GDFloater_9595enemyObjects1= [];
gdjs.menu_32principalCode.GDFloater_9595enemyObjects2= [];
gdjs.menu_32principalCode.GDWinter_9595Tile_9595Water_9595WavesObjects1= [];
gdjs.menu_32principalCode.GDWinter_9595Tile_9595Water_9595WavesObjects2= [];
gdjs.menu_32principalCode.GDFlyObjects1= [];
gdjs.menu_32principalCode.GDFlyObjects2= [];
gdjs.menu_32principalCode.GDFireball_95952Objects1= [];
gdjs.menu_32principalCode.GDFireball_95952Objects2= [];


gdjs.menu_32principalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[k] = gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[k] = gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 1", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Nightmare.aac", true, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_04.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.menu_32principalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menu_32principalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menu_32principalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.menu_32principalCode.GDNewTextObjects1.length = 0;
gdjs.menu_32principalCode.GDNewTextObjects2.length = 0;
gdjs.menu_32principalCode.GDcloud_95953Objects1.length = 0;
gdjs.menu_32principalCode.GDcloud_95953Objects2.length = 0;
gdjs.menu_32principalCode.GDNotJamThirdDimension15Objects1.length = 0;
gdjs.menu_32principalCode.GDNotJamThirdDimension15Objects2.length = 0;
gdjs.menu_32principalCode.GDGrass_9595and_9595Tree_9595BackgroundObjects1.length = 0;
gdjs.menu_32principalCode.GDGrass_9595and_9595Tree_9595BackgroundObjects2.length = 0;
gdjs.menu_32principalCode.GDCastles_9595BackgroundObjects1.length = 0;
gdjs.menu_32principalCode.GDCastles_9595BackgroundObjects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.menu_32principalCode.GDbloque2Objects1.length = 0;
gdjs.menu_32principalCode.GDbloque2Objects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.menu_32principalCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.menu_32principalCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.menu_32principalCode.GDChicken_9595imagenaeObjects1.length = 0;
gdjs.menu_32principalCode.GDChicken_9595imagenaeObjects2.length = 0;
gdjs.menu_32principalCode.GDfireballObjects1.length = 0;
gdjs.menu_32principalCode.GDfireballObjects2.length = 0;
gdjs.menu_32principalCode.GDtxt_9595cdObjects1.length = 0;
gdjs.menu_32principalCode.GDtxt_9595cdObjects2.length = 0;
gdjs.menu_32principalCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.menu_32principalCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.menu_32principalCode.GDWinter_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.menu_32principalCode.GDWinter_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.menu_32principalCode.GDFlyObjects1.length = 0;
gdjs.menu_32principalCode.GDFlyObjects2.length = 0;
gdjs.menu_32principalCode.GDFireball_95952Objects1.length = 0;
gdjs.menu_32principalCode.GDFireball_95952Objects2.length = 0;

gdjs.menu_32principalCode.eventsList0(runtimeScene);
gdjs.menu_32principalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menu_32principalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.menu_32principalCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.menu_32principalCode.GDNewTextObjects1.length = 0;
gdjs.menu_32principalCode.GDNewTextObjects2.length = 0;
gdjs.menu_32principalCode.GDcloud_95953Objects1.length = 0;
gdjs.menu_32principalCode.GDcloud_95953Objects2.length = 0;
gdjs.menu_32principalCode.GDNotJamThirdDimension15Objects1.length = 0;
gdjs.menu_32principalCode.GDNotJamThirdDimension15Objects2.length = 0;
gdjs.menu_32principalCode.GDGrass_9595and_9595Tree_9595BackgroundObjects1.length = 0;
gdjs.menu_32principalCode.GDGrass_9595and_9595Tree_9595BackgroundObjects2.length = 0;
gdjs.menu_32principalCode.GDCastles_9595BackgroundObjects1.length = 0;
gdjs.menu_32principalCode.GDCastles_9595BackgroundObjects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.menu_32principalCode.GDbloque2Objects1.length = 0;
gdjs.menu_32principalCode.GDbloque2Objects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.menu_32principalCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.menu_32principalCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.menu_32principalCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.menu_32principalCode.GDChicken_9595imagenaeObjects1.length = 0;
gdjs.menu_32principalCode.GDChicken_9595imagenaeObjects2.length = 0;
gdjs.menu_32principalCode.GDfireballObjects1.length = 0;
gdjs.menu_32principalCode.GDfireballObjects2.length = 0;
gdjs.menu_32principalCode.GDtxt_9595cdObjects1.length = 0;
gdjs.menu_32principalCode.GDtxt_9595cdObjects2.length = 0;
gdjs.menu_32principalCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.menu_32principalCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.menu_32principalCode.GDWinter_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.menu_32principalCode.GDWinter_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.menu_32principalCode.GDFlyObjects1.length = 0;
gdjs.menu_32principalCode.GDFlyObjects2.length = 0;
gdjs.menu_32principalCode.GDFireball_95952Objects1.length = 0;
gdjs.menu_32principalCode.GDFireball_95952Objects2.length = 0;


return;

}

gdjs['menu_32principalCode'] = gdjs.menu_32principalCode;
