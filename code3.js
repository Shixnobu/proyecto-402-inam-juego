gdjs.Game_32overCode = {};
gdjs.Game_32overCode.localVariables = [];
gdjs.Game_32overCode.idToCallbackMap = new Map();
gdjs.Game_32overCode.GDNewTextObjects1= [];
gdjs.Game_32overCode.GDNewTextObjects2= [];
gdjs.Game_32overCode.GDDino_9595Doux2Objects1= [];
gdjs.Game_32overCode.GDDino_9595Doux2Objects2= [];
gdjs.Game_32overCode.GDbloque2Objects1= [];
gdjs.Game_32overCode.GDbloque2Objects2= [];
gdjs.Game_32overCode.GDDino_9595Doux3Objects1= [];
gdjs.Game_32overCode.GDDino_9595Doux3Objects2= [];
gdjs.Game_32overCode.GDDino_9595Doux4Objects1= [];
gdjs.Game_32overCode.GDDino_9595Doux4Objects2= [];
gdjs.Game_32overCode.GDCoin_9595GoldObjects1= [];
gdjs.Game_32overCode.GDCoin_9595GoldObjects2= [];
gdjs.Game_32overCode.GDChicken_9595imagenaeObjects1= [];
gdjs.Game_32overCode.GDChicken_9595imagenaeObjects2= [];
gdjs.Game_32overCode.GDfireballObjects1= [];
gdjs.Game_32overCode.GDfireballObjects2= [];
gdjs.Game_32overCode.GDtxt_9595cdObjects1= [];
gdjs.Game_32overCode.GDtxt_9595cdObjects2= [];
gdjs.Game_32overCode.GDFloater_9595enemyObjects1= [];
gdjs.Game_32overCode.GDFloater_9595enemyObjects2= [];
gdjs.Game_32overCode.GDWinter_9595Tile_9595Water_9595WavesObjects1= [];
gdjs.Game_32overCode.GDWinter_9595Tile_9595Water_9595WavesObjects2= [];
gdjs.Game_32overCode.GDFlyObjects1= [];
gdjs.Game_32overCode.GDFlyObjects2= [];
gdjs.Game_32overCode.GDFireball_95952Objects1= [];
gdjs.Game_32overCode.GDFireball_95952Objects2= [];


gdjs.Game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino_Doux3"), gdjs.Game_32overCode.GDDino_9595Doux3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length;i<l;++i) {
    if ( gdjs.Game_32overCode.GDDino_9595Doux3Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32overCode.GDDino_9595Doux3Objects1[k] = gdjs.Game_32overCode.GDDino_9595Doux3Objects1[i];
        ++k;
    }
}
gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32overCode.GDDino_9595Doux3Objects1 */
{for(var i = 0, len = gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length ;i < len;++i) {
    gdjs.Game_32overCode.GDDino_9595Doux3Objects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Bleep_02.aac", false, 100, 1);
}
}

}


};

gdjs.Game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.Game_32overCode.GDbloque2Objects1.length = 0;
gdjs.Game_32overCode.GDbloque2Objects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.Game_32overCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.Game_32overCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.Game_32overCode.GDChicken_9595imagenaeObjects1.length = 0;
gdjs.Game_32overCode.GDChicken_9595imagenaeObjects2.length = 0;
gdjs.Game_32overCode.GDfireballObjects1.length = 0;
gdjs.Game_32overCode.GDfireballObjects2.length = 0;
gdjs.Game_32overCode.GDtxt_9595cdObjects1.length = 0;
gdjs.Game_32overCode.GDtxt_9595cdObjects2.length = 0;
gdjs.Game_32overCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.Game_32overCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.Game_32overCode.GDWinter_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Game_32overCode.GDWinter_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Game_32overCode.GDFlyObjects1.length = 0;
gdjs.Game_32overCode.GDFlyObjects2.length = 0;
gdjs.Game_32overCode.GDFireball_95952Objects1.length = 0;
gdjs.Game_32overCode.GDFireball_95952Objects2.length = 0;

gdjs.Game_32overCode.eventsList0(runtimeScene);
gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux2Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux2Objects2.length = 0;
gdjs.Game_32overCode.GDbloque2Objects1.length = 0;
gdjs.Game_32overCode.GDbloque2Objects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux3Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux3Objects2.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux4Objects1.length = 0;
gdjs.Game_32overCode.GDDino_9595Doux4Objects2.length = 0;
gdjs.Game_32overCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.Game_32overCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.Game_32overCode.GDChicken_9595imagenaeObjects1.length = 0;
gdjs.Game_32overCode.GDChicken_9595imagenaeObjects2.length = 0;
gdjs.Game_32overCode.GDfireballObjects1.length = 0;
gdjs.Game_32overCode.GDfireballObjects2.length = 0;
gdjs.Game_32overCode.GDtxt_9595cdObjects1.length = 0;
gdjs.Game_32overCode.GDtxt_9595cdObjects2.length = 0;
gdjs.Game_32overCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.Game_32overCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.Game_32overCode.GDWinter_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Game_32overCode.GDWinter_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Game_32overCode.GDFlyObjects1.length = 0;
gdjs.Game_32overCode.GDFlyObjects2.length = 0;
gdjs.Game_32overCode.GDFireball_95952Objects1.length = 0;
gdjs.Game_32overCode.GDFireball_95952Objects2.length = 0;


return;

}

gdjs['Game_32overCode'] = gdjs.Game_32overCode;
