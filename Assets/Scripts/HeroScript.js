#pragma strict
public var movementSpeed:float;
public var jumpSpeed:float;
public var jumping:boolean;
public var grounded:boolean;
public var maxHeight:float;
private var floorHeight:float;

function Start () {
	GameManager.getInstance().hero = this;
}

function Update () {
	
}

function FixedUpdate ()
{
	if(Input.GetButtonDown("Jump") && grounded)
	{
		jumping=true;
		grounded = false;
		floorHeight = transform.position.y;
	}
	if(Input.GetButtonUp("Jump"))
	{
		jumping=false;
	}
	rigidbody.velocity.x = movementSpeed * (1+GameManager.getInstance().difficulty*0.2);
	if(jumping && transform.position.y - floorHeight < maxHeight)
	{
		rigidbody.velocity.y = jumpSpeed;
		
	}
	else
	{
		jumping = false;
	}
}

function OnCollisionEnter()
{
	grounded = true;
}

function OnCollisionStay()
{
	grounded = true;
}

function OnTriggerEnter()
{
	if(rigidbody.velocity.y<0)
	{
		GameManager.getInstance().gameOver();
	}
}