gdjs.Escena_321Code = {};
gdjs.Escena_321Code.localVariables = [];
gdjs.Escena_321Code.idToCallbackMap = new Map();
gdjs.Escena_321Code.GDbloqueObjects1= [];
gdjs.Escena_321Code.GDbloqueObjects2= [];
gdjs.Escena_321Code.GDDino_9595AnaxObjects1= [];
gdjs.Escena_321Code.GDDino_9595AnaxObjects2= [];
gdjs.Escena_321Code.GDBackground_9595Blue_9595DesertObjects1= [];
gdjs.Escena_321Code.GDBackground_9595Blue_9595DesertObjects2= [];
gdjs.Escena_321Code.GDSummer_9595Tile_9595Water_9595WavesObjects1= [];
gdjs.Escena_321Code.GDSummer_9595Tile_9595Water_9595WavesObjects2= [];
gdjs.Escena_321Code.GDGrassObjects1= [];
gdjs.Escena_321Code.GDGrassObjects2= [];
gdjs.Escena_321Code.GDForest_9595BackgroundObjects1= [];
gdjs.Escena_321Code.GDForest_9595BackgroundObjects2= [];
gdjs.Escena_321Code.GDDoorObjects1= [];
gdjs.Escena_321Code.GDDoorObjects2= [];
gdjs.Escena_321Code.GDtxt_9595monedasObjects1= [];
gdjs.Escena_321Code.GDtxt_9595monedasObjects2= [];
gdjs.Escena_321Code.GDNewSprite2Objects1= [];
gdjs.Escena_321Code.GDNewSprite2Objects2= [];
gdjs.Escena_321Code.GDULTIObjects1= [];
gdjs.Escena_321Code.GDULTIObjects2= [];
gdjs.Escena_321Code.GDCDObjects1= [];
gdjs.Escena_321Code.GDCDObjects2= [];
gdjs.Escena_321Code.GDDino_9595Doux2Objects1= [];
gdjs.Escena_321Code.GDDino_9595Doux2Objects2= [];
gdjs.Escena_321Code.GDbloque2Objects1= [];
gdjs.Escena_321Code.GDbloque2Objects2= [];
gdjs.Escena_321Code.GDDino_9595Doux3Objects1= [];
gdjs.Escena_321Code.GDDino_9595Doux3Objects2= [];
gdjs.Escena_321Code.GDDino_9595Doux4Objects1= [];
gdjs.Escena_321Code.GDDino_9595Doux4Objects2= [];
gdjs.Escena_321Code.GDCoin_9595GoldObjects1= [];
gdjs.Escena_321Code.GDCoin_9595GoldObjects2= [];
gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1= [];
gdjs.Escena_321Code.GDChicken_9595imagenaeObjects2= [];
gdjs.Escena_321Code.GDfireballObjects1= [];
gdjs.Escena_321Code.GDfireballObjects2= [];
gdjs.Escena_321Code.GDtxt_9595cdObjects1= [];
gdjs.Escena_321Code.GDtxt_9595cdObjects2= [];
gdjs.Escena_321Code.GDFloater_9595enemyObjects1= [];
gdjs.Escena_321Code.GDFloater_9595enemyObjects2= [];
gdjs.Escena_321Code.GDWinter_9595Tile_9595Water_9595WavesObjects1= [];
gdjs.Escena_321Code.GDWinter_9595Tile_9595Water_9595WavesObjects2= [];
gdjs.Escena_321Code.GDFlyObjects1= [];
gdjs.Escena_321Code.GDFlyObjects2= [];
gdjs.Escena_321Code.GDFireball_95952Objects1= [];
gdjs.Escena_321Code.GDFireball_95952Objects2= [];


gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDFireball_959595952Objects1Objects = Hashtable.newFrom({"Fireball_2": gdjs.Escena_321Code.GDFireball_95952Objects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDChicken_95959595imagenaeObjects1Objects = Hashtable.newFrom({"Chicken_imagenae": gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDFireball_959595952Objects1Objects = Hashtable.newFrom({"Fireball_2": gdjs.Escena_321Code.GDFireball_95952Objects1});
gdjs.Escena_321Code.asyncCallback19846220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Escena_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Fireball_2"), gdjs.Escena_321Code.GDFireball_95952Objects2);

{for(var i = 0, len = gdjs.Escena_321Code.GDFireball_95952Objects2.length ;i < len;++i) {
    gdjs.Escena_321Code.GDFireball_95952Objects2[i].getBehavior("Flippable").flipX(true);
}
}
gdjs.Escena_321Code.localVariables.length = 0;
}
gdjs.Escena_321Code.idToCallbackMap.set(19846220, gdjs.Escena_321Code.asyncCallback19846220);
gdjs.Escena_321Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Escena_321Code.localVariables);
for (const obj of gdjs.Escena_321Code.GDFireball_95952Objects1) asyncObjectsList.addObject("Fireball_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Escena_321Code.asyncCallback19846220(runtimeScene, asyncObjectsList)), 19846220, asyncObjectsList);
}
}

}


};gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDFireball_959595952Objects1Objects = Hashtable.newFrom({"Fireball_2": gdjs.Escena_321Code.GDFireball_95952Objects1});
gdjs.Escena_321Code.asyncCallback19848284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Escena_321Code.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "1up 7.aac", false, 100, 1);
}
gdjs.Escena_321Code.localVariables.length = 0;
}
gdjs.Escena_321Code.idToCallbackMap.set(19848284, gdjs.Escena_321Code.asyncCallback19848284);
gdjs.Escena_321Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Escena_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0), (runtimeScene) => (gdjs.Escena_321Code.asyncCallback19848284(runtimeScene, asyncObjectsList)), 19848284, asyncObjectsList);
}
}

}


};gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDChicken_95959595imagenaeObjects1Objects = Hashtable.newFrom({"Chicken_imagenae": gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Escena_321Code.GDDoorObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDChicken_95959595imagenaeObjects1Objects = Hashtable.newFrom({"Chicken_imagenae": gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDChicken_95959595imagenaeObjects1Objects = Hashtable.newFrom({"Chicken_imagenae": gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDCoin_95959595GoldObjects1Objects = Hashtable.newFrom({"Coin_Gold": gdjs.Escena_321Code.GDCoin_9595GoldObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDCDObjects1Objects = Hashtable.newFrom({"CD": gdjs.Escena_321Code.GDCDObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDfireballObjects1Objects = Hashtable.newFrom({"fireball": gdjs.Escena_321Code.GDfireballObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDWinter_95959595Tile_95959595Water_95959595WavesObjects1Objects = Hashtable.newFrom({"Winter_Tile_Water_Waves": gdjs.Escena_321Code.GDWinter_9595Tile_9595Water_9595WavesObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects = Hashtable.newFrom({"Dino_Anax": gdjs.Escena_321Code.GDDino_9595AnaxObjects1});
gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDFloater_95959595enemyObjects1Objects = Hashtable.newFrom({"Floater_enemy": gdjs.Escena_321Code.GDFloater_9595enemyObjects1});
gdjs.Escena_321Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length;i<l;++i) {
    if ( gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Escena_321Code.GDDino_9595AnaxObjects1[k] = gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i];
        ++k;
    }
}
gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length;i<l;++i) {
    if ( !(gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_321Code.GDDino_9595AnaxObjects1[k] = gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i];
        ++k;
    }
}
gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken_imagenae"), gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fireball_2"), gdjs.Escena_321Code.GDFireball_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDFireball_959595952Objects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDChicken_95959595imagenaeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Bleep_01.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("Flippable").flipX(false);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19845348);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);
gdjs.Escena_321Code.GDFireball_95952Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDFireball_959595952Objects1Objects, (( gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length === 0 ) ? 0 :gdjs.Escena_321Code.GDDino_9595AnaxObjects1[0].getPointX("center")) + 30, (( gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length === 0 ) ? 0 :gdjs.Escena_321Code.GDDino_9595AnaxObjects1[0].getPointY("center")) + 30, "");
}
{for(var i = 0, len = gdjs.Escena_321Code.GDFireball_95952Objects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDFireball_95952Objects1[i].addForce(200, 0, 1);
}
}

{ //Subevents
gdjs.Escena_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19846964);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);
gdjs.Escena_321Code.GDFireball_95952Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDFireball_959595952Objects1Objects, (( gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length === 0 ) ? 0 :gdjs.Escena_321Code.GDDino_9595AnaxObjects1[0].getPointX("center")) + 30, (( gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length === 0 ) ? 0 :gdjs.Escena_321Code.GDDino_9595AnaxObjects1[0].getPointY("center")) + 30, "");
}
{for(var i = 0, len = gdjs.Escena_321Code.GDFireball_95952Objects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDFireball_95952Objects1[i].addForce(-(200), 0, 1);
}
}
{for(var i = 0, len = gdjs.Escena_321Code.GDFireball_95952Objects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDFireball_95952Objects1[i].getBehavior("Flippable").flipX(false);
}
}

{ //Subevents
gdjs.Escena_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken_imagenae"), gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDChicken_95959595imagenaeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Escena_321Code.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length;i<l;++i) {
    if ( gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Escena_321Code.GDDino_9595AnaxObjects1[k] = gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i];
        ++k;
    }
}
gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken_imagenae"), gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDChicken_95959595imagenaeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length;i<l;++i) {
    if ( !(gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_321Code.GDDino_9595AnaxObjects1[k] = gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i];
        ++k;
    }
}
gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19852756);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(1);
}
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("Resizable").setSize(64, 53);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken_imagenae"), gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDChicken_95959595imagenaeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin_Gold"), gdjs.Escena_321Code.GDCoin_9595GoldObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);

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
gdjs.Escena_321Code.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDCoin_95959595GoldObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDCoin_9595GoldObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_monedas"), gdjs.Escena_321Code.GDtxt_9595monedasObjects1);
{for(var i = 0, len = gdjs.Escena_321Code.GDCoin_9595GoldObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDCoin_9595GoldObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Escena_321Code.GDtxt_9595monedasObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDtxt_9595monedasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup 7.aac", false, 100, 1);
}
}
gdjs.Escena_321Code.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("CD"), gdjs.Escena_321Code.GDCDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDCDObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDCDObjects1 */
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_cd"), gdjs.Escena_321Code.GDtxt_9595cdObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_monedas"), gdjs.Escena_321Code.GDtxt_9595monedasObjects1);
{for(var i = 0, len = gdjs.Escena_321Code.GDCDObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDCDObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].getBehavior("Resizable").setSize(96, 96);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.Escena_321Code.GDtxt_9595cdObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDtxt_9595cdObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}
{for(var i = 0, len = gdjs.Escena_321Code.GDtxt_9595monedasObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDtxt_9595monedasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup 7.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("fireball"), gdjs.Escena_321Code.GDfireballObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDfireballObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDfireballObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_monedas"), gdjs.Escena_321Code.GDtxt_9595monedasObjects1);
{for(var i = 0, len = gdjs.Escena_321Code.GDfireballObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDfireballObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(20);
}
{for(var i = 0, len = gdjs.Escena_321Code.GDtxt_9595monedasObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDtxt_9595monedasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Winter_Tile_Water_Waves"), gdjs.Escena_321Code.GDWinter_9595Tile_9595Water_9595WavesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDWinter_95959595Tile_95959595Water_95959595WavesObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump_Light_05.wav", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Anax"), gdjs.Escena_321Code.GDDino_9595AnaxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Floater_enemy"), gdjs.Escena_321Code.GDFloater_9595enemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDDino_95959595AnaxObjects1Objects, gdjs.Escena_321Code.mapOfGDgdjs_9546Escena_9595321Code_9546GDFloater_95959595enemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_321Code.GDDino_9595AnaxObjects1 */
{for(var i = 0, len = gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length ;i < len;++i) {
    gdjs.Escena_321Code.GDDino_9595AnaxObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.Escena_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_321Code.GDbloqueObjects1.length = 0;
gdjs.Escena_321Code.GDbloqueObjects2.length = 0;
gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length = 0;
gdjs.Escena_321Code.GDDino_9595AnaxObjects2.length = 0;
gdjs.Escena_321Code.GDBackground_9595Blue_9595DesertObjects1.length = 0;
gdjs.Escena_321Code.GDBackground_9595Blue_9595DesertObjects2.length = 0;
gdjs.Escena_321Code.GDSummer_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena_321Code.GDSummer_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena_321Code.GDGrassObjects1.length = 0;
gdjs.Escena_321Code.GDGrassObjects2.length = 0;
gdjs.Escena_321Code.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Escena_321Code.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Escena_321Code.GDDoorObjects1.length = 0;
gdjs.Escena_321Code.GDDoorObjects2.length = 0;
gdjs.Escena_321Code.GDtxt_9595monedasObjects1.length = 0;
gdjs.Escena_321Code.GDtxt_9595monedasObjects2.length = 0;
gdjs.Escena_321Code.GDNewSprite2Objects1.length = 0;
gdjs.Escena_321Code.GDNewSprite2Objects2.length = 0;
gdjs.Escena_321Code.GDULTIObjects1.length = 0;
gdjs.Escena_321Code.GDULTIObjects2.length = 0;
gdjs.Escena_321Code.GDCDObjects1.length = 0;
gdjs.Escena_321Code.GDCDObjects2.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux2Objects1.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux2Objects2.length = 0;
gdjs.Escena_321Code.GDbloque2Objects1.length = 0;
gdjs.Escena_321Code.GDbloque2Objects2.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux3Objects1.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux3Objects2.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux4Objects1.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux4Objects2.length = 0;
gdjs.Escena_321Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Escena_321Code.GDCoin_9595GoldObjects2.length = 0;
gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1.length = 0;
gdjs.Escena_321Code.GDChicken_9595imagenaeObjects2.length = 0;
gdjs.Escena_321Code.GDfireballObjects1.length = 0;
gdjs.Escena_321Code.GDfireballObjects2.length = 0;
gdjs.Escena_321Code.GDtxt_9595cdObjects1.length = 0;
gdjs.Escena_321Code.GDtxt_9595cdObjects2.length = 0;
gdjs.Escena_321Code.GDFloater_9595enemyObjects1.length = 0;
gdjs.Escena_321Code.GDFloater_9595enemyObjects2.length = 0;
gdjs.Escena_321Code.GDWinter_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena_321Code.GDWinter_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena_321Code.GDFlyObjects1.length = 0;
gdjs.Escena_321Code.GDFlyObjects2.length = 0;
gdjs.Escena_321Code.GDFireball_95952Objects1.length = 0;
gdjs.Escena_321Code.GDFireball_95952Objects2.length = 0;

gdjs.Escena_321Code.eventsList2(runtimeScene);
gdjs.Escena_321Code.GDbloqueObjects1.length = 0;
gdjs.Escena_321Code.GDbloqueObjects2.length = 0;
gdjs.Escena_321Code.GDDino_9595AnaxObjects1.length = 0;
gdjs.Escena_321Code.GDDino_9595AnaxObjects2.length = 0;
gdjs.Escena_321Code.GDBackground_9595Blue_9595DesertObjects1.length = 0;
gdjs.Escena_321Code.GDBackground_9595Blue_9595DesertObjects2.length = 0;
gdjs.Escena_321Code.GDSummer_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena_321Code.GDSummer_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena_321Code.GDGrassObjects1.length = 0;
gdjs.Escena_321Code.GDGrassObjects2.length = 0;
gdjs.Escena_321Code.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Escena_321Code.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Escena_321Code.GDDoorObjects1.length = 0;
gdjs.Escena_321Code.GDDoorObjects2.length = 0;
gdjs.Escena_321Code.GDtxt_9595monedasObjects1.length = 0;
gdjs.Escena_321Code.GDtxt_9595monedasObjects2.length = 0;
gdjs.Escena_321Code.GDNewSprite2Objects1.length = 0;
gdjs.Escena_321Code.GDNewSprite2Objects2.length = 0;
gdjs.Escena_321Code.GDULTIObjects1.length = 0;
gdjs.Escena_321Code.GDULTIObjects2.length = 0;
gdjs.Escena_321Code.GDCDObjects1.length = 0;
gdjs.Escena_321Code.GDCDObjects2.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux2Objects1.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux2Objects2.length = 0;
gdjs.Escena_321Code.GDbloque2Objects1.length = 0;
gdjs.Escena_321Code.GDbloque2Objects2.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux3Objects1.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux3Objects2.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux4Objects1.length = 0;
gdjs.Escena_321Code.GDDino_9595Doux4Objects2.length = 0;
gdjs.Escena_321Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Escena_321Code.GDCoin_9595GoldObjects2.length = 0;
gdjs.Escena_321Code.GDChicken_9595imagenaeObjects1.length = 0;
gdjs.Escena_321Code.GDChicken_9595imagenaeObjects2.length = 0;
gdjs.Escena_321Code.GDfireballObjects1.length = 0;
gdjs.Escena_321Code.GDfireballObjects2.length = 0;
gdjs.Escena_321Code.GDtxt_9595cdObjects1.length = 0;
gdjs.Escena_321Code.GDtxt_9595cdObjects2.length = 0;
gdjs.Escena_321Code.GDFloater_9595enemyObjects1.length = 0;
gdjs.Escena_321Code.GDFloater_9595enemyObjects2.length = 0;
gdjs.Escena_321Code.GDWinter_9595Tile_9595Water_9595WavesObjects1.length = 0;
gdjs.Escena_321Code.GDWinter_9595Tile_9595Water_9595WavesObjects2.length = 0;
gdjs.Escena_321Code.GDFlyObjects1.length = 0;
gdjs.Escena_321Code.GDFlyObjects2.length = 0;
gdjs.Escena_321Code.GDFireball_95952Objects1.length = 0;
gdjs.Escena_321Code.GDFireball_95952Objects2.length = 0;


return;

}

gdjs['Escena_321Code'] = gdjs.Escena_321Code;
