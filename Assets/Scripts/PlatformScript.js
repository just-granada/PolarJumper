﻿#pragma strict
public var platformPrefab:GameObject;
public var minDistance:float;
public var maxDistance:float;
public var maxHeight:float;
public var minScale:float;
public var maxScale:float;
public var drawDistance:float;
public var cacheCount:int;
private var platformsCreated:boolean = false;
public static var farthestPlatform:PlatformScript;

function Start () {
	if(farthestPlatform == null)
	{
		farthestPlatform = this;
	}
}

function Update () {
	
}

function OnCollisionEnter()
{
	GameManager.getInstance().addScore();
}

function OnCollisionStay () {
	if(farthestPlatform.transform.position.x - transform.position.x < drawDistance*(1+GameManager.getInstance().difficulty*0.5))
	{
		farthestPlatform.createNextPlatform();
	}
}

public function createNextPlatform()
{
	Debug.Log("creating platform");
	var platformDistance:float = (Random.value*(maxDistance-minDistance)+minDistance)*(1+GameManager.getInstance().difficulty*0.25);
	var platformHeight:float = Random.value*maxHeight*2-maxHeight;
	var newPlatform = Instantiate(platformPrefab, Vector3(transform.position.x+transform.localScale.x 
		+ platformDistance, transform.position.y + platformHeight, transform.position.z),Quaternion.identity);
	newPlatform.transform.localScale.x = (Random.value*(maxScale - minScale) + minScale)*(1-GameManager.getInstance().difficulty*0.02);
	farthestPlatform = newPlatform.GetComponent(PlatformScript);
}

