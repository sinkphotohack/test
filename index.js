var data = [
  {"year": 2010, "points": 86, "wins": 27, "draws": 5, "losses": 6, "other": {"finished": "1st", "coach": "Ancelotti", "trophy": "Premiership Champions"}},
  {"year": 2011, "points": 71, "wins": 21, "draws": 8, "losses": 9, "other": {"finished": "2nd", "coach": "Ancelotti"}},
  {"year": 2012, "points": 64, "wins": 18, "draws": 10, "losses": 10, "other": {"finished": "6th" , "coach": "Di Matteo", "trophy": "Champions League Winners"}},
  {"year": 2013, "points": 75, "wins": 22, "draws": 9, "losses": 7, "other": {"finished": "3rd", "coach": "Benitez", "trophy": "Europa League Winners"}},
  {"year": 2014, "points": 82, "wins": 25, "draws": 7, "losses": 6, "other": {"finished": "3rd", "coach": "Mourinho"}},
  {"year": 2015, "points": 87, "wins": 26, "draws": 9, "losses": 3, "other": {"finished": "1st", "coach": "Mourinho", "trophy": "Premiership Champions"}},
  {"year": 2016, "points": 50, "wins": 12, "draws": 14, "losses": 12, "other": {"finished": "10th", "coach": "Hiddink"}},
  {"year": 2017, "points": 93, "wins": 30, "draws": 3, "losses": 5, "other": {"finished": "1st", "coach": "Conte", "trophy": "Premiership Champions"}},
  {"year": 2018, "points": 70, "wins": 21, "draws": 7, "losses": 10, "other": {"finished": "5th", "coach": "Conte", "trophy": "FA Cup"}},
  {"year": 2019, "points": 72, "wins": 21, "draws": 9, "losses": 8, "other": {"finished": "3rd", "coach": "Sarri", "trophy": "Europa League Winners"}},
  {"year": 2020, "points": 5, "wins": 1, "draws": 2, "losses": 1, "other": {"finished": "N/A", "coach": "Lampard"}}

];
//mouse event handlers
function mouseover (d) {
   
  tooltip
      .html("Year: " + d.year + "<br>" + "Points: " + d.points )
      .style("opacity", 1)
}
function mousemove(d, i) {
  const { clientX, clientY} = d3.event;
  tooltip
    .style("left", (clientX) + "px") 
    .style("top", (clientY) + "px")
}
 function mouseleave (d) {
  tooltip
    .style("opacity", 0)
}
// Set scales

var width = 900;
var height = 600;
var margin = { top: 15, bottom: 15, left: 70, right: 15 };

var svg = d3.select('#svg-area')
  .append('svg')
  .attr('width', width - margin.left - margin.right)
  .attr('height', height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

// tooltip

var tooltip = d3.select('body')
  .append('div')
  .attr('class', 'tooltip')
  .attr('opacity', '1')
  .style("background-color", "green")
  .style("border", "solid")
  .style("border-width", "1px")
  .style("border-radius", "5px")
  .style("padding", "7px")
  .style("max-width", "90px")
// Create axes

var x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0.3)

var y = d3.scaleLinear()
  .domain([0, 120])
  .range([height - margin.bottom, margin.top])

svg
  .append("g")
  .attr("fill", 'royalblue')

.selectAll("rect")
  .data(data.sort((a, b) => d3.descending(a.year, b.points)))
  .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.points))
    .attr('title', (d) => d.points)
    .attr("class", "rect")
    .attr("height", d => y(0) - y(d.points))
    .attr("width", x.bandwidth())
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);

// Create Bars or Line function

function yAxis(g) {
  g.attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .attr("font-size", '20px')
}

function xAxis(g) {
  g.attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].year))
    .attr("font-size", '20px')
}

// Append the axes as G

svg.append("g").call(xAxis);
svg.append("g").call(yAxis);
svg.node();

// Read and arrange the data





// Create Circle group




// Mouseover / mouseout
 // Three function that change the tooltip when user hover / move / leave a cell
 
// Legend function