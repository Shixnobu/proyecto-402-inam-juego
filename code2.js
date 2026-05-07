gdjs.Escena3Code = {};
gdjs.Escena3Code.localVariables = [];
gdjs.Escena3Code.idToCallbackMap = new Map();
gdjs.Escena3Code.GDbloqueObjects1= [];
gdjs.Escena3Code.GDbloqueObjects2= [];
gdjs.Escena3Code.GDDino_9595AnaxObjects1= [];
gdjs.Escena3Code.GDDino_9595AnaxObjects2= [];
gdjs.Escena3Code.GDNewSpriteObjects1= [];
gdjs.Escena3Code.GDNewSpriteObjects2= [];
gdjs.Escena3Code.GDBackground_9595Blue_9595DesertObjects1= [];
gdjs.Escena3Code.GDBackground_9595Blue_9595DesertObjects2= [];
gdjs.Escena3Code.GDSummer_9595Tile_9595Water_9595WavesObjects1= [];
gdjs.Escena3Code.GDSummer_9595Tile_9595Water_9595WavesObjects2= [];
gdjs.Escena3Code.GDGrassObjects1= [];
gdjs.Escena3Code.GDGrassObjects2= [];
gdjs.Escena3Code.GDForest_9595BackgroundObjects1= [];
gdjs.Escena3Code.GDForest_9595BackgroundObjects2= [];
gdjs.Escena3Code.GDDoorObjects1= [];
gdjs.Escena3Code.GDDoorObjects2= [];
gdjs.Escena3Code.GDtxt_9595monedasObjects1= [];
gdjs.Escena3Code.GDtxt_9595monedasObjects2= [];
gdjs.Escena3Code.GDNewSprite2Objects1= [];
gdjs.Escena3Code.GDNewSprite2Objects2= [];
gdjs.Escena3Code.GDULTIObjects1= [];
gdjs.Escena3Code.GDULTIObjects2= [];
gdjs.Escena3Code.GDCDObjects1= [];
gdjs.Escena3Code.GDCDObjects2= [];
gdjs.Escena3Code.GDFlag_9595BlueObjects1= [];
gdjs.Escena3Code.GDFlag_9595BlueObjects2= [];
gdjs.Escena3Code.GDNewSprite3Objects1= [];
gdjs.Escena3Code.GDNewSprite3Objects2= [];
gdjs.Escena3Code.GDflyObjects1= [];
gdjs.Escena3Code.GDflyObjects2= [];
gdjs.Escena3Code.GDbeeObjects1= [];
gdjs.Escena3Code.GDbeeObjects2= [];
gdjs.Escena3Code.GDDino_9595Doux2Objects1= [];
gdjs.Escena3Code.GDDino_9595Doux2Objects2= [];
gdjs.Escena3Code.GDbloque2Objects1= [];
gdjs.Escena3Code.GDbloque2Objects2= [];
gdjs.Escena3Code.GDDino_9595Doux3Objects1= [];
gdjs.Escena3Code.GDDino_9595Doux3Objects2= [];
gdjs.Escena3Code.GDDino_9595Doux4Objects1= [];
gdjs.Escena3Code.GDDino_9595Doux4Objects2= [];
gdjs.Escena3Code.GDCoin_9595GoldObjects1= [];
gdjs.Escena3Code.GDCoin_9595GoldObjects2= [];
gdjs.Escena3Code.GDChicken_9595imagenaeObjects1= [];
gdjs.Escena3Code.GDChicken_9595imagenaeObjects2= [];
gdjs.Escena3Code.GDfireballObjects1= [];
gdjs.Escena3Code.GDfireballObjects2= [];
gdjs.Escena3Code.GDtxt_9595cdObjects1= [];
gdjs.Escena3Code.GDtxt_9595cdObjects2= [];
gdjs.Escena3Code.GDFloater_9595enemyObjects1= [];
gdjs.Escena3Code.GDFloater_9595enemyObjects2= [];
gdjs.Escena3Code.GDWinter_9595Tile_9595Water_9595WavesObjects1= [];
gdjs.Escena3Code.GDWinter_9595Tile_9595Water_9595WavesObjects2= [];
gdjs.Escena3Code.GDFlyObjects1= [];
gdjs.Escena3Code.GDFlyObjects2= [];
gdjs.Escena3Code.GDFireball_95952Objects1= [];
gdjs.Escena3Code.GDFireball_95952Objects2= [];


gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects = Hashtable.newFrom({"Fireball_2": gdjs.Escena3Code.GDFireball_95952Objects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDChicken_95959595imagenaeObjects1Objects = Hashtable.newFrom({"Chicken_imagenae": gdjs.Escena3Code.GDChicken_9595imagenaeObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects = Hashtable.newFrom({"Fireball_2": gdjs.Escena3Code.GDFireball_95952Objects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFlyObjects1Objects = Hashtable.newFrom({"Fly": gdjs.Escena3Code.GDFlyObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects = Hashtable.newFrom({"Fireball_2": gdjs.Escena3Code.GDFireball_95952Objects1});
gdjs.Escena3Code.asyncCallback19933668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Escena3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Fireball_2"), gdjs.Escena3Code.GDFireball_95952Objects2);

{for(var i = 0, len = gdjs.Escena3Code.GDFireball_95952Objects2.length ;i < len;++i) {
    gdjs.Escena3Code.GDFireball_95952Objects2[i].getBehavior("Flippable").flipX(true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "1up 7.aac", false, 100, 1);
}
gdjs.Escena3Code.localVariables.length = 0;
}
gdjs.Escena3Code.idToCallbackMap.set(19933668, gdjs.Escena3Code.asyncCallback19933668);
gdjs.Escena3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Escena3Code.localVariables);
for (const obj of gdjs.Escena3Code.GDFireball_95952Objects1) asyncObjectsList.addObject("Fireball_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Escena3Code.asyncCallback19933668(runtimeScene, asyncObjectsList)), 19933668, asyncObjectsList);
}
}

}


};gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects = Hashtable.newFrom({"Fireball_2": gdjs.Escena3Code.GDFireball_95952Objects1});
gdjs.Escena3Code.asyncCallback19939188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Escena3Code.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "1up 7.aac", false, 100, 1);
}
gdjs.Escena3Code.localVariables.length = 0;
}
gdjs.Escena3Code.idToCallbackMap.set(19939188, gdjs.Escena3Code.asyncCallback19939188);
gdjs.Escena3Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Escena3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0), (runtimeScene) => (gdjs.Escena3Code.asyncCallback19939188(runtimeScene, asyncObjectsList)), 19939188, asyncObjectsList);
}
}

}


};gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Escena3Code.GDDoorObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDChicken_95959595imagenaeObjects1Objects = Hashtable.newFrom({"Chicken_imagenae": gdjs.Escena3Code.GDChicken_9595imagenaeObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDCoin_95959595GoldObjects1Objects = Hashtable.newFrom({"Coin_Gold": gdjs.Escena3Code.GDCoin_9595GoldObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDCDObjects1Objects = Hashtable.newFrom({"CD": gdjs.Escena3Code.GDCDObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDfireballObjects1Objects = Hashtable.newFrom({"fireball": gdjs.Escena3Code.GDfireballObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFlyObjects1Objects = Hashtable.newFrom({"Fly": gdjs.Escena3Code.GDFlyObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDWinter_95959595Tile_95959595Water_95959595WavesObjects1Objects = Hashtable.newFrom({"Winter_Tile_Water_Waves": gdjs.Escena3Code.GDWinter_9595Tile_9595Water_9595WavesObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFlyObjects1Objects = Hashtable.newFrom({"Fly": gdjs.Escena3Code.GDFlyObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects = Hashtable.newFrom({"Fireball_2": gdjs.Escena3Code.GDFireball_95952Objects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFlyObjects1Objects = Hashtable.newFrom({"Fly": gdjs.Escena3Code.GDFlyObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena3Code.GDDino_9595AnaxObjects1});
gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDChicken_95959595imagenaeObjects1Objects = Hashtable.newFrom({"Chicken_imagenae": gdjs.Escena3Code.GDChicken_9595imagenaeObjects1});
gdjs.Escena3Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length;i<l;++i) {
    if ( gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Escena3Code.GDDino_9595AnaxObjects1[k] = gdjs.Escena3Code.GDDino_9595AnaxObjects1[i];
        ++k;
    }
}
gdjs.Escena3Code.GDDino_9595AnaxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length;i<l;++i) {
    if ( !(gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Escena3Code.GDDino_9595AnaxObjects1[k] = gdjs.Escena3Code.GDDino_9595AnaxObjects1[i];
        ++k;
    }
}
gdjs.Escena3Code.GDDino_9595AnaxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken_imagenae"), gdjs.Escena3Code.GDChicken_9595imagenaeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fireball_2"), gdjs.Escena3Code.GDFireball_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Escena3Code.GDFlyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDChicken_95959595imagenaeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFlyObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDChicken_9595imagenaeObjects1 */
/* Reuse gdjs.Escena3Code.GDFlyObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDChicken_9595imagenaeObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDChicken_9595imagenaeObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Escena3Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19932428);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);
gdjs.Escena3Code.GDFireball_95952Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects, (( gdjs.Escena3Code.GDDino_9595AnaxObjects1.length === 0 ) ? 0 :gdjs.Escena3Code.GDDino_9595AnaxObjects1[0].getPointX("center")) + 30, (( gdjs.Escena3Code.GDDino_9595AnaxObjects1.length === 0 ) ? 0 :gdjs.Escena3Code.GDDino_9595AnaxObjects1[0].getPointY("center")) + 30, "");
}
{for(var i = 0, len = gdjs.Escena3Code.GDFireball_95952Objects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDFireball_95952Objects1[i].addForce(200, 0, 1);
}
}

{ //Subevents
gdjs.Escena3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19939396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);
gdjs.Escena3Code.GDFireball_95952Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects, (( gdjs.Escena3Code.GDDino_9595AnaxObjects1.length === 0 ) ? 0 :gdjs.Escena3Code.GDDino_9595AnaxObjects1[0].getPointX("center")) + 30, (( gdjs.Escena3Code.GDDino_9595AnaxObjects1.length === 0 ) ? 0 :gdjs.Escena3Code.GDDino_9595AnaxObjects1[0].getPointY("center")) + 30, "");
}
{for(var i = 0, len = gdjs.Escena3Code.GDFireball_95952Objects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDFireball_95952Objects1[i].addForce(-(200), 0, 1);
}
}
{for(var i = 0, len = gdjs.Escena3Code.GDFireball_95952Objects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDFireball_95952Objects1[i].getBehavior("Flippable").flipX(false);
}
}

{ //Subevents
gdjs.Escena3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Escena3Code.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "you win", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length;i<l;++i) {
    if ( gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Escena3Code.GDDino_9595AnaxObjects1[k] = gdjs.Escena3Code.GDDino_9595AnaxObjects1[i];
        ++k;
    }
}
gdjs.Escena3Code.GDDino_9595AnaxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken_imagenae"), gdjs.Escena3Code.GDChicken_9595imagenaeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDChicken_95959595imagenaeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length;i<l;++i) {
    if ( !(gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.Escena3Code.GDDino_9595AnaxObjects1[k] = gdjs.Escena3Code.GDDino_9595AnaxObjects1[i];
        ++k;
    }
}
gdjs.Escena3Code.GDDino_9595AnaxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19941452);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(1);
}
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("Resizable").setSize(64, 53);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin_Gold"), gdjs.Escena3Code.GDCoin_9595GoldObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Variable", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("puntaje", variable);
}
gdjs.Escena3Code.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDCoin_95959595GoldObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDCoin_9595GoldObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_monedas"), gdjs.Escena3Code.GDtxt_9595monedasObjects1);
{for(var i = 0, len = gdjs.Escena3Code.GDCoin_9595GoldObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDCoin_9595GoldObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Escena3Code.GDtxt_9595monedasObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDtxt_9595monedasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup 7.aac", false, 100, 1);
}
}
gdjs.Escena3Code.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("CD"), gdjs.Escena3Code.GDCDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDCDObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDCDObjects1 */
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_cd"), gdjs.Escena3Code.GDtxt_9595cdObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_monedas"), gdjs.Escena3Code.GDtxt_9595monedasObjects1);
{for(var i = 0, len = gdjs.Escena3Code.GDCDObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDCDObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].getBehavior("Resizable").setSize(96, 96);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.Escena3Code.GDtxt_9595cdObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDtxt_9595cdObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}
{for(var i = 0, len = gdjs.Escena3Code.GDtxt_9595monedasObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDtxt_9595monedasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("fireball"), gdjs.Escena3Code.GDfireballObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDfireballObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDfireballObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_monedas"), gdjs.Escena3Code.GDtxt_9595monedasObjects1);
{for(var i = 0, len = gdjs.Escena3Code.GDfireballObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDfireballObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(20);
}
{for(var i = 0, len = gdjs.Escena3Code.GDtxt_9595monedasObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDtxt_9595monedasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Escena3Code.GDFlyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFlyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Winter_Tile_Water_Waves"), gdjs.Escena3Code.GDWinter_9595Tile_9595Water_9595WavesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDWinter_95959595Tile_95959595Water_95959595WavesObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Escena3Code.GDFlyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFlyObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "09 - street punks fighting to save the princess.aac", false, 10, -(50));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fireball_2"), gdjs.Escena3Code.GDFireball_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.Escena3Code.GDFlyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFireball_959595952Objects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDFlyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDFlyObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken_imagenae"), gdjs.Escena3Code.GDChicken_9595imagenaeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena3Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena3Code.mapOfGDgdjs_9546Escena3Code_9546GDChicken_95959595imagenaeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena3Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena3Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena3Code.GDDino_9595AnaxObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.Escena3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena3Code.GDbloqueObjects1.length = 0;
gdjs.Escena3Code.GDbloqueObjects2.length = 0;
gdjs.Escena3Code.GDDino_9595AnaxObjects1.length = 0;
gdjs.Escena3Code.GDDino_9595AnaxObjects2.length = 0;
gdjs.Escena3Code.GDNewSpriteObjects1.length = 0;
gdjs.Escena3Code.GDNewSpriteObjects2.length = 0;
gdjs.Escena3Code.GDBackground_9595Blue_9595DesertObjects1.length = 0;
gdjs.Escena3Code.GDBackground_9595Blue_9595DesertObjects2.length = 0;
gdjs.Escena3Code.GDSummer_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena3Code.GDSummer_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena3Code.GDGrassObjects1.length = 0;
gdjs.Escena3Code.GDGrassObjects2.length = 0;
gdjs.Escena3Code.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Escena3Code.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Escena3Code.GDDoorObjects1.length = 0;
gdjs.Escena3Code.GDDoorObjects2.length = 0;
gdjs.Escena3Code.GDtxt_9595monedasObjects1.length = 0;
gdjs.Escena3Code.GDtxt_9595monedasObjects2.length = 0;
gdjs.Escena3Code.GDNewSprite2Objects1.length = 0;
gdjs.Escena3Code.GDNewSprite2Objects2.length = 0;
gdjs.Escena3Code.GDULTIObjects1.length = 0;
gdjs.Escena3Code.GDULTIObjects2.length = 0;
gdjs.Escena3Code.GDCDObjects1.length = 0;
gdjs.Escena3Code.GDCDObjects2.length = 0;
gdjs.Escena3Code.GDFlag_9595BlueObjects1.length = 0;
gdjs.Escena3Code.GDFlag_9595BlueObjects2.length = 0;
gdjs.Escena3Code.GDNewSprite3Objects1.length = 0;
gdjs.Escena3Code.GDNewSprite3Objects2.length = 0;
gdjs.Escena3Code.GDflyObjects1.length = 0;
gdjs.Escena3Code.GDflyObjects2.length = 0;
gdjs.Escena3Code.GDbeeObjects1.length = 0;
gdjs.Escena3Code.GDbeeObjects2.length = 0;
gdjs.Escena3Code.GDDino_9595Doux2Objects1.length = 0;
gdjs.Escena3Code.GDDino_9595Doux2Objects2.length = 0;
gdjs.Escena3Code.GDbloque2Objects1.length = 0;
gdjs.Escena3Code.GDbloque2Objects2.length = 0;
gdjs.Escena3Code.GDDino_9595Doux3Objects1.length = 0;
gdjs.Escena3Code.GDDino_9595Doux3Objects2.length = 0;
gdjs.Escena3Code.GDDino_9595Doux4Objects1.length = 0;
gdjs.Escena3Code.GDDino_9595Doux4Objects2.length = 0;
gdjs.Escena3Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Escena3Code.GDCoin_9595GoldObjects2.length = 0;
gdjs.Escena3Code.GDChicken_9595imagenaeObjects1.length = 0;
gdjs.Escena3Code.GDChicken_9595imagenaeObjects2.length = 0;
gdjs.Escena3Code.GDfireballObjects1.length = 0;
gdjs.Escena3Code.GDfireballObjects2.length = 0;
gdjs.Escena3Code.GDtxt_9595cdObjects1.length = 0;
gdjs.Escena3Code.GDtxt_9595cdObjects2.length = 0;
gdjs.Escena3Code.GDFloater_9595enemyObjects1.length = 0;
gdjs.Escena3Code.GDFloater_9595enemyObjects2.length = 0;
gdjs.Escena3Code.GDWinter_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena3Code.GDWinter_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena3Code.GDFlyObjects1.length = 0;
gdjs.Escena3Code.GDFlyObjects2.length = 0;
gdjs.Escena3Code.GDFireball_95952Objects1.length = 0;
gdjs.Escena3Code.GDFireball_95952Objects2.length = 0;

gdjs.Escena3Code.eventsList2(runtimeScene);
gdjs.Escena3Code.GDbloqueObjects1.length = 0;
gdjs.Escena3Code.GDbloqueObjects2.length = 0;
gdjs.Escena3Code.GDDino_9595AnaxObjects1.length = 0;
gdjs.Escena3Code.GDDino_9595AnaxObjects2.length = 0;
gdjs.Escena3Code.GDNewSpriteObjects1.length = 0;
gdjs.Escena3Code.GDNewSpriteObjects2.length = 0;
gdjs.Escena3Code.GDBackground_9595Blue_9595DesertObjects1.length = 0;
gdjs.Escena3Code.GDBackground_9595Blue_9595DesertObjects2.length = 0;
gdjs.Escena3Code.GDSummer_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena3Code.GDSummer_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena3Code.GDGrassObjects1.length = 0;
gdjs.Escena3Code.GDGrassObjects2.length = 0;
gdjs.Escena3Code.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Escena3Code.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Escena3Code.GDDoorObjects1.length = 0;
gdjs.Escena3Code.GDDoorObjects2.length = 0;
gdjs.Escena3Code.GDtxt_9595monedasObjects1.length = 0;
gdjs.Escena3Code.GDtxt_9595monedasObjects2.length = 0;
gdjs.Escena3Code.GDNewSprite2Objects1.length = 0;
gdjs.Escena3Code.GDNewSprite2Objects2.length = 0;
gdjs.Escena3Code.GDULTIObjects1.length = 0;
gdjs.Escena3Code.GDULTIObjects2.length = 0;
gdjs.Escena3Code.GDCDObjects1.length = 0;
gdjs.Escena3Code.GDCDObjects2.length = 0;
gdjs.Escena3Code.GDFlag_9595BlueObjects1.length = 0;
gdjs.Escena3Code.GDFlag_9595BlueObjects2.length = 0;
gdjs.Escena3Code.GDNewSprite3Objects1.length = 0;
gdjs.Escena3Code.GDNewSprite3Objects2.length = 0;
gdjs.Escena3Code.GDflyObjects1.length = 0;
gdjs.Escena3Code.GDflyObjects2.length = 0;
gdjs.Escena3Code.GDbeeObjects1.length = 0;
gdjs.Escena3Code.GDbeeObjects2.length = 0;
gdjs.Escena3Code.GDDino_9595Doux2Objects1.length = 0;
gdjs.Escena3Code.GDDino_9595Doux2Objects2.length = 0;
gdjs.Escena3Code.GDbloque2Objects1.length = 0;
gdjs.Escena3Code.GDbloque2Objects2.length = 0;
gdjs.Escena3Code.GDDino_9595Doux3Objects1.length = 0;
gdjs.Escena3Code.GDDino_9595Doux3Objects2.length = 0;
gdjs.Escena3Code.GDDino_9595Doux4Objects1.length = 0;
gdjs.Escena3Code.GDDino_9595Doux4Objects2.length = 0;
gdjs.Escena3Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Escena3Code.GDCoin_9595GoldObjects2.length = 0;
gdjs.Escena3Code.GDChicken_9595imagenaeObjects1.length = 0;
gdjs.Escena3Code.GDChicken_9595imagenaeObjects2.length = 0;
gdjs.Escena3Code.GDfireballObjects1.length = 0;
gdjs.Escena3Code.GDfireballObjects2.length = 0;
gdjs.Escena3Code.GDtxt_9595cdObjects1.length = 0;
gdjs.Escena3Code.GDtxt_9595cdObjects2.length = 0;
gdjs.Escena3Code.GDFloater_9595enemyObjects1.length = 0;
gdjs.Escena3Code.GDFloater_9595enemyObjects2.length = 0;
gdjs.Escena3Code.GDWinter_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena3Code.GDWinter_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena3Code.GDFlyObjects1.length = 0;
gdjs.Escena3Code.GDFlyObjects2.length = 0;
gdjs.Escena3Code.GDFireball_95952Objects1.length = 0;
gdjs.Escena3Code.GDFireball_95952Objects2.length = 0;


return;

}

gdjs['Escena3Code'] = gdjs.Escena3Code;
