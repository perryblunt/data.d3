(function() {
  var width = 1000,
      height = 500;


  var svg = d3.select("#chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)")





  var defs = svg.append("defs");

  defs.append("pattern")
     .attr("id", "jon-snow")
     .attr("height", "100")
     .attr("width", "100")
     .attr("patternContentUnits", "objectBoundingBox")
     .append("image")
     .attr("height", 1)
     .attr("width", 1)
     .attr("perserveAspectRatio", "none")
     .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
     .attr("xlink:href", "snow.jpg")

  var radiusScale = d3.scaleSqrt().domain([1, 100]).range([10, 80])


    //R&B Artise
  var forceXrandb = d3.forceX(function(d) {
     if(d.genre === 'randb') {
       return 100
     } else {
       return 650
     }
    }).strength(0.15)


      //pop Artise
  var forceXpop = d3.forceX(function(d) {
     if(d.genre === 'pop') {
       return 100
     } else {
       return 650
     }
    }).strength(0.15)

     //Hip hop Artise
  var forceXhiphop = d3.forceX(function(d) {
      if(d.genre === 'hip-hop') {
        return 100
      } else {
        return 650
      }
    }).strength(0.15)

    //Reggae Artise

  var forceXreggae = d3.forceX(function(d) {
      if(d.genre === 'reggae') {
        return 100
      } else {
        return 650
      }
    }).strength(0.15)

  var forceXSeparate = d3.forceX(function(d) {
      if(d.decade === 'pre-2000') {
        return 200
      } else {
        return 650
      }
    }).strength(0.15)

  var forceXCombine = d3.forceX(width /2).strength(0.05)

  var forceCollide = d3.forceCollide(function(d) {
      return radiusScale(d.sales) + 1
    })

  var simulation = d3.forceSimulation()
    .force("x", forceXCombine)
    .force("y", d3.forceY(height / 2).strength(0.05))
    .force("collide", forceCollide)


  d3.queue()
    .defer(d3.csv, "sales.csv")
    .await(ready)


function ready (error, datapoints) {

  defs.selectAll(".artist-pattern")
      .data(datapoints)
      .enter().append("pattern")
      .attr("class", "artist-pattern")
      .attr("id", function(d) {
        return d.name.toLowerCase().replace(/ /g, "-")
      })
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("height", 1)
      .attr("width", 1)
      .attr("perserveAspectRatio", "none")
      .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
      .attr("xlink:href", function(d) {
        return d.image_path


      });

  var circles = svg.selectAll(".artist")
      .data(datapoints)
      .enter().append("circle")
      .attr("class", "artist")
      .attr("r", function(d) {
        return radiusScale(d.sales)
        })
      .attr("fill", function(d) {
          return "url(#" + d.name.toLowerCase().replace(/ /g, "-") + ")"
        })
      .on('click', function(d) {
        console.log(d)
        })

      //Everyone
    d3.select("#decade").on('click', function() {
      simulation
        .force("x", forceXSeparate)
        .alphaTarget(0.25)
        .restart()
    })
      //New School
    d3.select("#combine").on('click', function() {
      simulation
        .force("x", forceXCombine)
        .alphaTarget(0.25)
        .restart()
    })
       //hip-hop
    d3.select("#hip-hop").on('click', function() {
      simulation
        .force("x", forceXhiphop)
        .alphaTarget(0.25)
        .restart()

    })
       //reggae
    d3.select("#reggae").on('click', function() {
      simulation
        .force("x", forceXreggae)
        .alphaTarget(0.25)
        .restart()
    })
      //pop
    d3.select("#pop").on('click', function() {
      simulation
        .force("x", forceXpop)
        .alphaTarget(0.25)
        .restart()
    })
       //R&B
    d3.select("#randb").on('click', function() {
      simulation
        .force("x", forceXrandb)
        .alphaTarget(0.25)
        .restart()
    })


    simulation.nodes(datapoints)
      .on('tick', ticked)

    function ticked() {
      circles
         .attr("cx", function(d) {
           return d.x
         })
         .attr("cy", function(d) {
           return d.y
         })
    }



  }
})();
