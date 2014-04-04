#pragma strict
private static var gameManager:GameManager;

public var score:int;
public var platformCount:int;
private var tempScore:int;
public var hero:HeroScript;
public var scoreDisplay:TextMesh;
public var difficulty:float;
public var camera:Camera;
public var stepping:boolean;

function Awake () {
	if(gameManager==null)
	{
		gameManager=this;
	}
	Time.timeScale=10;
	Camera.main.orthographicSize=18 + score/6.0;
}

function Update()
{
	Time.timeScale=10 - 8*Input.GetAxisRaw("Vertical");
	if(stepping)
	{
		score++;
		scoreDisplay.text = "" + score;
	}
}

public function addScore()
{
	platformCount ++;
	tempScore++;
	if(tempScore > 3)
	{
		tempScore=0;
		difficulty += 0.5;
	}
	Camera.main.orthographicSize=18 + platformCount/6.0;
	Camera.main.transform.position.x+=0.2;
}

public static function getInstance():GameManager
{
	return gameManager;
}

public static function gameOver():void
{
	Application.LoadLevel("MainScene"); 
}
