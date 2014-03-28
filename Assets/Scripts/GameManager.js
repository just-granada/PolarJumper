#pragma strict
private static var gameManager:GameManager;

public var score:int;
private var tempScore:int;
public var hero:HeroScript;
public var scoreDisplay:TextMesh;
public var difficulty:float;
public var camera:Camera;

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
}

public function addScore()
{
	score ++;
	tempScore++;
	scoreDisplay.text = "" + score;
	if(tempScore > 3)
	{
		tempScore=0;
		difficulty += 0.5;
	}
	Camera.main.orthographicSize=18 + score/6.0;
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
