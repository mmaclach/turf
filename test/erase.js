var t = require('../index'),
    should = require('should'),
    fs = require('fs')

describe('erase', function(){
  it('should return polygon 1 minus polygon 2', function(done){
    t.load(__dirname + '/testIn/Intersect1.geojson', function(err, polys1){
      t.load(__dirname + '/testIn/Intersect2.geojson', function(err, polys2){
        t.erase(polys1.features[0], polys2.features[0], function(err, erased){
          if(err) throw err
          erased.should.be.ok
          fs.writeFileSync(__dirname + '/testOut/erased.geojson', JSON.stringify(erased))
          done()
        })
      })
    })
  })
}) 