

export const Diagnostics = require('Diagnostics');

const s = require('Scene');
const p = require('Patches');
const Reactive = require('Reactive');

//const isCollide = false;

const face = s.root.find('FacePoint');
const portalStart = s.root.find('StartPoint');
const portalEnd = s.root.find('ExitPoint');

function update()
{
	let collDistance0 = portalStart.worldTransform.position.x.sub(face.worldTransform.position.x);
	p.setScalarValue('collDistance0', collDistance0);
	/*
	const filter = s.root.find('faceMesh0');
	filter.hidden = true;
	var i =0; 

	//Collide when distance is less than or equal to 0
	if(collDistance0.le(0)){
		Diagnostics.watch(" Collide Yes", i+1);
		filter.hidden = false;
	}

	//Hide filter if greater than 0
	else if (collDistance0.gt(0)){
		filter.hidden = true;
	}	

	else{
		Diagnostics.log("huh?");
	}
	*/
	Diagnostics.watch(" face x", face.worldTransform.position.x);
	Diagnostics.watch(" portalStart x", portalStart.worldTransform.position.x);
	Diagnostics.watch(" Distance", collDistance0);

}

update();




