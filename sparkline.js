
function createSparkline(data, spacing, height, color, elementid)
{
	const min = Math.min(...data);
	const max = Math.max(...data);
	const range = max - min;
	const pixelsperunit = height / range;
	let x = 0;
	let y1 = 0;
	let y2 = 0;

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttributeNS(null, "width", spacing * (data.length - 1));
    svg.setAttributeNS(null, "height", height);

	for(let i = 0, l = data.length - 1; i < l; i++)
	{
		y1 = height - ((data[i] - min) * pixelsperunit);
		y2 = height - ((data[i+1] - min) * pixelsperunit);
		drawLine(svg, x, y1, x + spacing, y2, color);
		x += spacing;
	}

	document.getElementById(elementid).appendChild(svg);
}

function drawLine(element, x1, y1, x2, y2, color)
{
	const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

	line.setAttributeNS(null, "x1", x1);
	line.setAttributeNS(null, "y1", y1);
	line.setAttributeNS(null, "x2", x2);
	line.setAttributeNS(null, "y2", y2);

	line.setAttributeNS(null, "stroke", color);
	line.setAttributeNS(null, "stroke-width", 1);

	element.appendChild(line);
}
