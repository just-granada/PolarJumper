#pragma strict
private static var gameManager:GameManager;

public var score:int;
private var tempScore:int;
public var hero:HeroScript;
public var scoreDisplay:TextMesh;
public var difficulty:float;

function Awake () {
	if(gameManager==null)
	{
		gameManager=this;
	}
	Time.timeScale=10;
}

function Update()
{
	Debug.Log(score);
	if(tempScore > 3)
	{
		tempScore=0;
		difficulty += 0.5;
	}
	Time.timeScale=10 - 8*Input.GetAxisRaw("Vertical");
}

public function addScore()
{
	score ++;
	tempScore++;
	scoreDisplay.text = "" + score;
}

public static function getInstance():GameManager
{
	return gameManager;
}

public static function gameOver():void
{
	Application.LoadLevel("MainScene"); 
}
